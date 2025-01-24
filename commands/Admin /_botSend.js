/*CMD
  command: /botSend
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
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Api.editMessageText({
    message_id: mm,
    text: `*✅ Bᴏᴛ Sᴜᴄᴄᴇssғᴜʟʟʏ Sᴇɴᴛ Tᴏ:* ${message}`,
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

