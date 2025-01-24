/*CMD
  command: /deletes
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

var b = params
var bi = Bot.getProperty("Bot+" + b)
var to = Bot.getProperty("MyBotLists" + user.telegramid, [])
var mm = User.getProperty("mmm")
for (var index in to) {
  var uniqueid = to[index].name
  if (uniqueid == b) {
    to.splice(parseInt(index), 1)
  }
}
Bot.setProperty("MyBotLists" + user.telegramid, to, "json")

Bot.setProperty("Bot+" + b, null)

var token = Bot.getProperty("BBAPI")
let ur =
  "https://api.bots.business/v1/bots/search?name=" +
  params +
  "&api_key=" +
  token
User.setProperty("DeleteBot", params)

Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: "✋<b> Pʟᴇᴀsᴇ Wᴀɪᴛ...</>",
  parse_mode: "HTML",
  disable_web_page_preview: true
})

HTTP.get({
  url: ur,
  success: "/botDelete"
})

