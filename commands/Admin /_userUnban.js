/*CMD
  command: /userUnban
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

var adm = Bot.getProperty("adminID")
var mm = User.getProperty("adminid")
if (user.telegramid == adm) {
  var tgi = message
  var us = Bot.getProperty("Chat" + message + "", "null")
  if (us == "null") {
    var tti =
      "*Usᴇʀ Wᴀs Nᴏᴛ Fᴏᴜɴᴅ Tᴏ Uɴʙᴀɴ!! *\n\nPʟᴇᴀsᴇ Rᴇᴄʜᴇᴄᴋ Usᴇʀ's Tᴇʟᴇɢʀᴀᴍ Iᴅ"
    Api.editMessageText({
      message_id: mm,
      text: tti,
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

  Bot.unblockChat(us.id)
  Api.editMessageText({
    message_id: mm,
    text:
      "<b><a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      us.user.first_name +
      "</a> Hᴀs Bᴇᴇɴ UɴBᴀɴᴇᴅ</>",
    parse_mode: "html",
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
} else {
  Bot.sendMessage(" ")
}

