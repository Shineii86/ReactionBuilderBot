/*CMD
  command: /apiSet
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

var mm = User.getProperty("adminid")
var adm = Bot.getProperty("adminID")
if (adm == user.telegramid) {
  Bot.setProperty("BBAPI", message)
  Api.editMessageText({
    message_id: mm,
    text: "*🎊 Yᴏᴜʀ Bᴏᴛ Bᴜsɪɴᴇss Aᴘɪ Sᴇᴛ*",
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
  return
}

