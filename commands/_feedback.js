/*CMD
  command: /feedback
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = "@GlobalSellerShop"
var rr = User.getProperty("rate")
if (rr == true) {
  Api.editMessageText({
    message_id: User.getProperty("mmm"),
    text: "<b> 👌 Aʟʀᴇᴀᴅʏ Rᴀᴛᴇᴅ</>",
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
  return
}
var tt = `<b>Tʜᴀɴᴋs Fᴏʀ Yᴏᴜʀ Fᴇᴇᴅʙᴀᴄᴋ

👤 Fɪʀsᴛ Nᴀᴍᴇ: ${user.first_name} 
👨‍💻 User Id: ${user.telegramid}
🤖 Bᴏᴛ Nᴀᴍᴇ: @${bot.name}
😍 Rᴀᴛɪɴɢ: 🌟🌟🌟🌟🌟</>`
Api.sendMessage({ chat_id: key, text: tt, parse_mode: "HTML" })
Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: "<b>💁 Tʜᴀɴᴋs Fᴏʀ Rᴀᴛɪɴɢs</>",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
User.setProperty("rate", true)

