-- Vildan only. Re-running is safe; other student rows remain unchanged.
-- Target link supplied by teacher: https://t.me/c/4310538060/5
-- Verify that /5 is the intended forum message_thread_id by a live test.
INSERT INTO public.telegram_recipients
  (student_id, chat_id, message_thread_id, enabled)
VALUES ('vildan', -1004310538060, 5, true)
ON CONFLICT (student_id)
DO UPDATE SET chat_id = excluded.chat_id,
              message_thread_id = excluded.message_thread_id,
              enabled = excluded.enabled,
              updated_at = now();

SELECT student_id, chat_id, message_thread_id, enabled
FROM public.telegram_recipients
WHERE student_id = 'vildan';
