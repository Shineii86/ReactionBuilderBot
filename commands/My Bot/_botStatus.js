/*CMD
  command: /botStatus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var c = JSON.parse(content)
var id = c[0].id
var nae = User.getProperty("statusbot")
var std = Bot.getProperty("status?" + nae)
var token = Bot.getProperty("BBAPI")
var mm = User.getProperty("mmm")
if (std == "On") {
  Bot.setProperty("status?" + nae, "Off", " string")
  HTTP.post({
    url:
      "https://api.bots.business/v1/bots/" +
      id +
      "/status?api_key=" +
      token +
      "",
    body: { status: "start_stopping" }
  })
} else {
  Bot.setProperty("status?" + nae, "On", " string")
  HTTP.post({
    url:
      "https://api.bots.business/v1/bots/" +
      id +
      "/status?api_key=" +
      token +
      "",
    body: { status: "start_launch" }
  })
}
var bt = Bot.getProperty("Bot+" + nae)
var name = bt.username
var tim = bt.time
var tokn = bt.token
var st = Bot.getProperty("status?" + nae)
if (st == "On") {
  var stt = "⏹ Dᴇᴀᴄᴛɪᴠᴀᴛᴇ"
} else {
  var stt = "▶️ Aᴄᴛɪᴠᴇ"
}
if (st == "On") {
  var sttt = "Rᴜɴɴɪɴɢ 🚀"
} else {
  var sttt = "Sᴛᴏᴘ ⛔"
}
if (!bt) {
  var txt = "<b>👮 Tʜɪs Bᴏᴛ Nᴏᴛ Fᴏᴜɴᴅ Iɴ Dᴀᴛᴀʙᴀsᴇ</>"
} else {
  var txt =
    "🤖<b> Bᴏᴛ: @" +
    name +
    "\n\n⏱ Cʀᴇᴀᴛᴇᴅ Aᴛ:</> <code>" +
    tim +
    "</>\n\n🎉 <b>Tᴏᴋᴇɴ:</> <code>" +
    tokn +
    "</>\n\n🤖 <b>Sᴛᴀᴛᴜs:</> " +
    sttt +
    ""
}
var inlkey = [
  [
    { text: stt, callback_data: "/status " + name },
    { text: "Dᴇʟᴇᴛᴇ 🗑️", callback_data: "/delete " + name }
  ],
  [
    { text: "◁ Bᴀᴄᴋ ", callback_data: "/mybot" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]
Api.editMessageText({
  message_id: mm,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
})

