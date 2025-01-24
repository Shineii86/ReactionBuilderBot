/*CMD
  command: /broadcast
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

/*
var adminID = 5572081489 // Replace With Your Telegram ID

if (user.telegramid == adminID) {
  Bot.runAll({
    command: "/broadcasting",
    for_chats: "private-chats",
    options: { msg: message }
  })
  Bot.sendMessage("*🚀 Mᴇssᴀɢᴇ Sᴇɴᴅᴇᴅ Tᴏ Aʟʟ Usᴇʀs*")
} else {
  Bot.sendMessage("*🔰 Yᴏᴜ'ʀᴇ Nᴏᴛ Aɴ Aᴅᴍɪɴ*")
}
*/
var mm = User.getProperty("adminid")
Api.editMessageText({
  message_id: mm,
  text: "*📢 Sᴇɴᴅ Tʜᴇ Tᴇxᴛ Tᴏ Bʀᴏᴀᴅᴄᴀsᴛ*",
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◁ Bᴀᴄᴋ ", callback_data: "/admin" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
Bot.runCommand("/broadcasts")

