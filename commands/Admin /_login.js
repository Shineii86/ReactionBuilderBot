/*CMD
  command: /login
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 5572081489) {
  // Telegram ID
  Bot.setProperty("admin_chat", user.telegramid, "string")
  Bot.setProperty("adminID", user.telegramid, "string")
  Bot.sendMessage("*Yᴏᴜ Aʀᴇ Nᴏᴡ Aᴅᴍɪɴ Wɪᴛʜ* `" + user.telegramid + "` *ID*")
} else {
  Bot.sendMessage("*Oᴏᴏᴘs Iᴛ Sᴇᴇᴍs Wᴇ Aʟʀᴇᴀᴅʏ Hᴀs Aɴ Aᴅᴍɪɴs*")
}

