/*CMD
  command: /deleted
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

var del = params
var b = del
var mm = User.getProperty("mmm")
function defineRow(ind) {
  if (ind < 1) {
    return 0
  }
  if (ind < 2) {
    return 1
  }
  if (ind < 3) {
    return 2
  }
  if (ind < 4) {
    return 3
  }
}

function shuffleDelBtn(arra1) {
  var ctr = arra1.length,
    temp,
    index
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = arra1[ctr]
    arra1[ctr] = arra1[index]
    arra1[index] = temp
  }
  return arra1
}
var arrayOfBut = ["Yᴇs, I'ᴍ 100% Sᴜʀᴇ!", "Hᴇʟʟ Nᴏ!", "Nᴏ!"]
var arrayOfBtn = shuffleDelBtn(arrayOfBut)
var inlKeyboard = [[], [], [], []]
for (var index in arrayOfBtn) {
  if (arrayOfBtn[index] == "Yᴇs, I'ᴍ 100% Sᴜʀᴇ!") {
    inlKeyboard[defineRow(index)].push({
      text: arrayOfBtn[index],
      callback_data: "/deletes " + b
    })
  } else {
    inlKeyboard[defineRow(index)].push({
      text: arrayOfBtn[index],
      callback_data: "/botHub " + del
    })
  }
  var ind = defineRow(index) + 1
}
inlKeyboard[ind].push(
  { text: "◁ Bᴀᴄᴋ ", callback_data: "/mybot" },
  { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
)

var cap = `👮 Aʀᴇ Yᴏᴜ <b>Tᴏᴛᴀʟʟʏ</b> Sᴜʀᴇ Yᴏᴜ Wᴀɴᴛ Tᴏ Dᴇʟᴇᴛᴇ @${b} Fʀᴏᴍ Sᴛᴏʀᴇ?`
Api.editMessageText({
  message_id: mm,
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlKeyboard }
})

