/*CMD
  command: /broadcasting
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

// User's Name
var username =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Unknown"

var msg = options.msg
var broadcastMSG = `<b>📢 ${username} Aᴅᴍɪɴ Mᴇssᴀɢᴇ</b>
<blockquote>${msg}</blockquote>`

Api.sendMessage({
  text: broadcastMSG,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🔔 Uᴘᴅᴀᴛᴇs", url: "t.me/MaximXBots" },
        { text: "Sᴜᴘᴘᴏʀᴛ 💬", url: "t.me/MaximXGroup" }
      ]
    ]
  }
})

