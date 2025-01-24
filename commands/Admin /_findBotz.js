/*CMD
  command: /findBotz
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

var mm = User.getProperty("adminid")
var p = params
var bt = Bot.getProperty("Bot+" + p)
var name = bt.username
var tim = bt.time
var tokn = bt.token
var st = Bot.getProperty("status?" + name)
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
  var txt = "<b>🤖 Tʜɪs Bᴏᴛ Nᴏᴛ Fᴏᴜɴᴅ Iɴ Dᴀᴛᴀʙᴀsᴇ</>"
} else {
  var txt =
    "🤖<b> Bᴏᴛ: @" +
    name +
    "\n\n⏱ Cʀᴇᴀᴛᴇᴅ Aᴛ:</> <code>" +
    tim +
    "</>\n\n🎯 <b>Tᴏᴋᴇɴ:</> <code>" +
    tokn +
    "</>\n\n📈 <b>Sᴛᴀᴛᴜs:</> " +
    sttt +
    ""
}
var inlkey = [
  [
    { text: stt, callback_data: "/status " + name },
    { text: "Dᴇʟᴇᴛᴇ 🗑️", callback_data: "/delete " + name }
  ],
  [
    { text: "◁ Bᴀᴄᴋ ", callback_data: "/admin" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]
Api.editMessageText({
  message_id: mm,
  text: txt,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: inlkey }
})

