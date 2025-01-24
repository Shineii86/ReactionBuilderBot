/*CMD
  command: /verify_password
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

if (message === "@Hentai86") {
  Bot.sendMessage(
    "✅ Pᴀssᴡᴏʀᴅ Vᴇʀɪғɪᴇᴅ!\n\nPʟᴇᴀsᴇ Eɴᴛᴇʀ Yᴏᴜʀ Bᴏᴛs Bᴜsɪɴᴇss Eᴍᴀɪʟ Tᴏ Tʀᴀɴsғᴇʀ Tʜᴇ Bᴏᴛ Tᴏ Yᴏᴜʀ Aᴄᴄᴏᴜɴᴛ:"
  )
  Bot.runCommand("/submit_email")
} else {
  Bot.sendMessage("❌ Iɴᴄᴏʀʀᴇᴄᴛ Pᴀssᴡᴏʀᴅ. Pʟᴇᴀsᴇ Tʀʏ Aɢᴀɪɴ:")
  Bot.runCommand("/verify_password")
}

