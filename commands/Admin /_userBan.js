/*CMD
  command: /userBan
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
      "*👤 Usᴇʀ Wᴀs Nᴏᴛ Fᴏᴜɴᴅ Tᴏ Bᴀɴ!! *\n\nPʟᴇᴀsᴇ Rᴇᴄʜᴇᴄᴋ Usᴇʀ's Tᴇʟᴇɢʀᴀᴍ Iᴅ"
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

  var bnn = Bot.getProperty("Banned_Users", [])
  for (var ini in bnn) {
    var uni = bnn[ini]
    if (uni == tgi) {
      var tt = "🤔 Sᴇᴇᴍs Lɪᴋᴇ Usᴇʀ Is Aʟʀᴇᴀᴅʏ Bᴀɴɴᴇᴅ! "
      Api.editMessageText({
        message_id: mm,
        text: tt,
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [[{ text: "◀ Back", callback_data: "/admin" }]]
        }
      })
      Bot.run({
        command: "/setUserChat " + message + "",
        user_id: message
      })
      return
    }
  }
  bnn.push(user.telegramid)
  Bot.setProperty("Banned_Users", bnn, "json")
  Bot.blockChat(us.id)
  Api.editMessageText({
    message_id: mm,
    text:
      "<b>👮 <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      us.user.first_name +
      "</a> Hᴀs Bᴇᴇɴ Bᴀɴᴇᴅ</>",
    parse_mode: "HTML",
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

