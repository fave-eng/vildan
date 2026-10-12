# English Space — Вильдан / Vildan

## Prepared site
- Personal student ID: `vildan` (separate from all existing students).
- Student name: Вильдан / Vildan.
- Coursebook: **English File B1**. No edition was supplied; do not assume 4th edition or B1+.
- Student's actual proficiency level: **not set yet** (`config.js`: `student.level: ""`). B1 here is the coursebook designation, not a placement-test result.
- First homework, vocabulary, grammar and Knowledge Base catalogues are deliberately empty. No Elina lessons or audio were copied.
- Design and functionality are based on the uploaded Elina starter architecture.
- Files in `data/lessons/` are fetched over HTTP(S), not `file://`.

## Where to add content
- Homework: copy `data/lessons/lesson-template.json` into `data/lessons/lesson-1.json`, publish only complete and tested exercises.
- Words: `data/vocabulary-data.js` (store each new studied topic).
- Grammar: `data/grammar-data.js` (accurate structured theory, comparison, examples and tasks for relevant topics).
- Knowledge Base: `data/knowledge-data.js` (see commented structured example), displayed automatically by `scripts/knowledge.js`.
- Audio and images: `audio/` and `images/`. Add only genuine material from Vildan's book; preserve exact filenames.
- Update `student.level` in `config.js` when the student's level is confirmed. If needed, restore the level indicator on the homepage once the level is confirmed.

## Supabase and Telegram
- Shared Supabase project: `zqzgarvmpqqqaobeicpc`; site uses public anon key, not service-role credentials.
- Progress is indexed by `student_id=vildan` in the existing progress tables.
- Client-side separation by `student_id` does NOT provide secure authorization. Validate the project's RLS/auth policies before sharing publicly.
- Teacher-supplied Telegram link: https://t.me/c/4310538060/5
- Recipient row configured on 2026-10-12 in existing `public.telegram_recipients`: `student_id='vildan'`, `chat_id=-1004310538060`, `message_thread_id=5`, `enabled=true`. No other student row was changed.
- The URL's `/5` was interpreted as the topic root / thread ID. Confirm with a LIVE Telegram test to ensure the message appears in the intended thread; the link alone is not a Telegram Bot API confirmation.
- Reusable SQL: `supabase/telegram-recipient-setup.sql` (already applied; safe to re-run if needed).
- Reuse already deployed shared `notify-telegram` Edge Function; **do not deploy the included source blindly** because it affects all students.
- On published site open `diagnostics.html`, run **Проверить всё**, then **Отправить тестовый отчёт в Telegram**. Sending a test creates an actual Telegram message.
- `.github/workflows/1-setup-telegram.yml` checks connection in read-only mode; requires deployment as a separate repo for Vildan.
- `.github/workflows/2-notify-new-materials.yml` supports optional manual new-homework notices; set repo secret `NOTIFY_WEBHOOK_SECRET` only through GitHub Actions settings, NEVER put it in frontend files.
- New-homework notification requires actual published `lesson-N.json` with `notification.enabled:true` and manual workflow invocation. Homework-submission reports are sent by site logic after saving when backend is available.
- Site and GitHub repo were NOT deployed from this ZIP; browser/cloud write and Telegram real delivery require post-publication tests.

## Deploy
1. Create a separate GitHub repository `vildan` or another distinct name.
2. Upload everything inside this folder, including hidden `.github/workflows` and `.gitattributes`.
3. Enable GitHub Pages (`Settings → Pages`) and wait for the published site.
4. Check the interface, diagnostics, RLS/access and notifications before inviting the student.
