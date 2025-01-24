/*CMD
  command: /status
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

var token = Bot.getProperty("BBAPI")
let ur =
  "https://api.bots.business/v1/bots/search?name=" +
  params +
  "&api_key=" +
  token +
  ""
User.setProperty("statusbot", params)
Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: "✋<b> Pʟᴇᴀsᴇ Wᴀɪᴛ...</>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "◁ Back", callback_data: "/botHub " + params },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
      
    ]
  }
})

HTTP.get({
  url: ur,
  success: "/botStatus"
})

