/*CMD
  command: /findBots
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

var bots = Bot.getProperty("MyBotLists" + message)
var mm = User.getProperty("adminid")
if (!bots) {
  var txt = "*Hᴇ Is Nᴏ Cᴏɴɴᴇᴄᴛᴇᴅ Bᴏᴛs Yᴇᴛ. Sᴇɴᴅ /addbot Tᴏ Cᴏɴɴᴇᴄᴛ A Nᴇᴡ Oɴᴇ.*"

  var key = [
    [
      { text: "◁ Bᴀᴄᴋ ", callback_data: "/admin" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ]
  ]
  Api.editMessageText({
    message_id: mm,
    text: txt,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: key }
  })
  return
}

var inlkey = [[]]
var codeIndex
inlkey[1] = []
inlkey[2] = []
inlkey[3] = []
inlkey[4] = []
inlkey[5] = []

for (var index in bots) {
  var b = bots[index].name

  codeIndex = bots[index]
  if (index < 10) {
    var txt = "💬 <b>Cʜᴏᴏsᴇ A Bᴏᴛ Fʀᴏᴍ Tʜᴇ Lɪsᴛ Bᴇʟᴏᴡ:</>"

    codeIndex = bots[index]
    if (index < 2) {
      var keyboardRow = 0
    } else if (index < 4) {
      var keyboardRow = 1
    } else if (index < 6) {
      var keyboardRow = 2
    } else if (index < 8) {
      var keyboardRow = 3
    } else if (index < 10) {
      var keyboardRow = 4
    }

    inlkey[keyboardRow].push({
      text: "@" + b,
      callback_data: "/findBotz " + b
    })
  }
  if (index > 10) {
    var lolnext = lolnext + 1
  }
}
var keyboardRow = keyboardRow + 1
inlkey[keyboardRow].push(
  { text: "◁ Bᴀᴄᴋ ", callback_data: "/admin" },
  { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
)

Api.editMessageText({
  message_id: mm,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
})

