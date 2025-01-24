/*CMD
  command: /premium+
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Vip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Sᴏᴏɴ...", // Your Text Here
  show_alert: true
})

