// Short manual new-homework notifications for Vildan only.
// Existing shared notify-telegram continues to handle completed-homework reports.
import { createClient } from 'npm:@supabase/supabase-js@2.58.0'

const phrases = [
  ['📝 New homework!', 'A little practice goes a long way.'],
  ['📚 Your next task is ready!', 'Ready for a quick English workout?'],
  ['✨ Time for a little English!', 'Try it when you have a moment.'],
  ['📝 Fresh homework is here!', 'New tasks, fresh practice. You’ve got this!'],
  ['📖 Ready for your next lesson?', 'Keep your English skills sharp!'],
  ['🚀 New practice unlocked!', 'One more step towards stronger English.'],
  ['📚 Another homework is ready!', 'Take your time and enjoy the practice.'],
  ['📝 Let’s practise English!', 'A short study session makes a difference.'],
]
const read = (v: unknown) => typeof v === 'string' ? v.trim() : ''
const escapeHtml = (v: unknown) => read(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
const respond = (data: Record<string, unknown>, status = 200) => Response.json(data, { status })
const url = (v: unknown): string | null => {
  try { const s = read(v); return new URL(s).protocol === 'https:' ? s : null }
  catch { return null }
}
function safeSecret(expected: string, actual: string): boolean {
  const a = new TextEncoder().encode(expected), b = new TextEncoder().encode(actual)
  if (!a.length || a.length !== b.length) return false
  let mismatch = 0
  for (let i = 0; i < a.length; i++) mismatch |= a[i] ^ b[i]
  return mismatch === 0
}
function formatMessage(p: Record<string, any>, number: number, version: number): string {
  const [heading, encouragement] = phrases[(number + version - 2) % phrases.length]
  const title = read(p.homework?.title).slice(0, 90)
  return '<b>' + heading + '</b>\nHomework #' + number + (title ? ': ' + escapeHtml(title) : '') + '\n' + encouragement
}
function keyboard(p: Record<string, any>) {
  const rows: { text: string, url: string }[][] = []
  const add = (text: string, candidate: unknown) => {
    const href = url(candidate)
    if (href) rows.push([{ text, url: href }])
  }
  add('Open homework', p.homework?.url)
  add('Vocabulary', p.vocabulary?.url)
  for (const topic of (Array.isArray(p.grammar) ? p.grammar : []).slice(0, 3)) {
    add('Grammar: ' + (read(topic.title).slice(0, 32) || 'topic'), topic.url)
  }
  return rows
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return respond({ ok: false, error: 'Method not allowed' }, 405)
  if (!safeSecret(read(Deno.env.get('NOTIFY_WEBHOOK_SECRET')), read(req.headers.get('x-notify-secret')))) {
    return respond({ ok: false, error: 'Unauthorized' }, 401)
  }
  const p: Record<string, any> = await req.json().catch(() => ({}))
  const id = read(p.materialId), match = /^lesson-([1-9]\d*)$/.exec(id)
  const version = Number(p.notificationVersion || 1)
  if (p.studentId !== 'vildan' || p.materialType !== 'lesson_bundle' || !match ||
      !Number.isSafeInteger(version) || version < 1) return respond({ ok: false, error: 'Invalid lesson notification' }, 400)
  const supabaseUrl = read(Deno.env.get('SUPABASE_URL'))
  const serviceKey = read(Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'))
  const botToken = read(Deno.env.get('TELEGRAM_BOT_TOKEN'))
  if (!supabaseUrl || !serviceKey || !botToken) return respond({ ok: false, error: 'Missing server configuration' }, 500)
  const db = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } })
  const { data: recipient, error: recipientError } = await db.from('telegram_recipients')
    .select('chat_id,message_thread_id,enabled').eq('student_id', 'vildan').maybeSingle()
  if (recipientError || !recipient?.enabled || recipient.message_thread_id == null) {
    return respond({ ok: false, error: 'Recipient or Telegram topic not available' }, 500)
  }
  const key = { student_id: 'vildan', material_type: 'lesson_bundle', material_id: id, notification_version: version }
  const { data: old, error: lookupError } = await db.from('material_publications')
    .select('id,status,telegram_message_id').eq('student_id', 'vildan')
    .eq('material_type', 'lesson_bundle').eq('material_id', id).eq('notification_version', version).maybeSingle()
  if (lookupError) return respond({ ok: false, error: 'Could not check previous notifications' }, 500)
  if (old?.status === 'sent' || old?.status === 'pending') {
    return respond({ ok: true, skipped: true, reason: 'already_sent_or_pending', telegramMessageId: old.telegram_message_id })
  }
  let publicationId: string
  if (old?.id) {
    publicationId = old.id
    const { error } = await db.from('material_publications').update({ status:'pending', error_message:null, payload:p }).eq('id', publicationId)
    if (error) return respond({ ok: false, error: 'Could not retry notification' }, 500)
  } else {
    const { data, error } = await db.from('material_publications').insert({ ...key, status:'pending', payload:p }).select('id').single()
    if (error) return respond({ ok: false, error: 'Could not register notification' }, 500)
    publicationId = data.id
  }
  try {
    const buttons = keyboard(p)
    const body: Record<string, unknown> = {
      chat_id: recipient.chat_id, message_thread_id: recipient.message_thread_id,
      text: formatMessage(p, Number(match[1]), version), parse_mode:'HTML', disable_web_page_preview:true,
    }
    if (buttons.length) body.reply_markup = { inline_keyboard: buttons }
    const response = await fetch('https://api.telegram.org/bot' + botToken + '/sendMessage', {
      method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(body),
    })
    const result = await response.json().catch(() => null)
    if (!response.ok || !result?.ok) throw new Error('Telegram did not accept the message')
    const { error } = await db.from('material_publications').update({
      status:'sent', telegram_message_id:result.result.message_id, sent_at:new Date().toISOString(), error_message:null,
    }).eq('id', publicationId)
    if (error) throw new Error('Telegram delivered but publication status could not be saved')
    return respond({ ok:true, skipped:false, telegramMessageId:result.result.message_id, threadId:recipient.message_thread_id })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown delivery error'
    await db.from('material_publications').update({ status:'failed', error_message:message }).eq('id', publicationId)
    return respond({ ok:false, error:'Telegram notification failed' }, 502)
  }
})