/*CMD
  command: /submit_email
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

if (!message) {
  Bot.sendMessage(
    "🌟 Pʟᴇᴀsᴇ Eɴᴛᴇʀ Tʜᴇ Eᴍᴀɪʟ Aᴅᴅʀᴇss Wʜᴇʀᴇ Yᴏᴜ'ᴅ Lɪᴋᴇ Tᴏ Sᴇɴᴅ Tʜɪs Bᴏᴛ."
  )
  return
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

if (!isValidEmail(message)) {
  Bot.sendMessage(
    "❌ Iɴᴠᴀʟɪᴅ Eᴍᴀɪʟ Fᴏʀᴍᴀᴛ. Pʟᴇᴀsᴇ Tʀʏ Aɢᴀɪɴ Wɪᴛʜ A Cᴏʀʀᴇᴄᴛ Eᴍᴀɪʟ Aᴅᴅʀᴇss."
  )
  return
}

BBAdmin.installBot({
  email: message,
  // as_protected: true,
  bot_id: bot.id
})

Bot.sendMessage("✅ Bᴏᴛ Sᴜᴄᴄᴇssғᴜʟʟʏ Sᴇɴᴛ Tᴏ: " + message)

// UserName
var name =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Unknown"

// Notify your channel
var userInfo = `🚀 <b>Nᴇᴡ Bᴏᴛ Cʟᴏɴᴇᴅ!</b>

👤 <b>Usᴇʀ:</b> ${name}
🆔 <b>Usᴇʀ Iᴅ:</b> <a href="tg://user?id=${user.telegramid}">${
  user.telegramid
}</a>
📧 <b>Eᴍᴀɪʟ:</b> ${message}

⏰ <b>Tɪᴍᴇ:</b> ${Date().toString()}`

Api.sendMessage({
  chat_id: "5572081489",
  text: userInfo,
  parse_mode: "HTML"
})

