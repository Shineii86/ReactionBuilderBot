/*CMD
  command: /deletesticker
  help: 
  need_reply: false
  auto_retry_time: 
  folder: stickers

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (options && options.message_id) {
  Api.deleteMessage({
    chat_id: chat.chatid,
    message_id: options.message_id // Delete the sticker message
  })
}

