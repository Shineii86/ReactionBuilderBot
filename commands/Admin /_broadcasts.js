/*CMD
  command: /broadcasts
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.runAll({
  command: "/broadcasting",
  for_chats: "private-chats",
  options: { msg: message }
})

