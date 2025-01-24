/*CMD
  command: /accepted
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = 5572081489
if (user.telegramid == admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  var value = message
  if (!isNumeric(value)) {
    Bot.sendMessage("*📛 Iɴᴠᴀɪʟᴅ Vᴀʟᴜᴇ. Eɴᴛᴇʀ Oɴʟʏ Nᴜᴍᴇʀɪᴄ Vᴀʟᴜᴇ. Tʀʏ Aɢᴀɪɴ*")
    Bot.runCommand("/accepted")
    return
  }

  let amount = parseFloat(message)
  let tgid = User.getProperty("editid")
  let cur = "₹"
  let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  bal.add(amount)

  // Message Send For Admin
  Api.sendMessage({
    chat_id: admin,
    text: "<b>💰 Aᴍᴏᴜɴᴛ Aᴅᴅᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ, Dᴇᴛᴀɪʟs Bᴇʟᴏᴡ</>",
    parse_mode: "HTML",
    disable_web_page_preview: true
  })

  // Bot Advertising
  var ads = [
    "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
    "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
    "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
    "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
    "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
    "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
  ]
  var randomAd = ads[Math.floor(Math.random() * ads.length)]

  var cap = `<b>🎊 Yᴏᴜʀ Pᴀʏᴍᴇɴᴛ Hᴀs Bᴇᴇɴ Aᴄcᴇᴘᴛᴇᴅ, Yᴏᴜʀ Pʀᴇᴍɪᴜᴍ Sᴜʙsᴄʀɪᴘᴛɪᴏɴ Pʟᴀɴ Wɪʟʟ Bᴇ Aᴄᴛɪᴠᴀᴛᴇᴅ Sʜᴏʀᴛʟʏ.</b>
  
📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  // Send Stickers
  Api.sendSticker({
    chat_id: tgid,
    sticker:
      "CAACAgUAAxkBAAMVZ3jFec_sal3v0XMHlysrLf9TlJ0AAr8SAAPCuVfpscoDxg7AtTYE",
    on_result: "/deleteafter5"
  })
  Api.sendMessage({
    chat_id: tgid,
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/about" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })

  var text = `<b>👤 Usᴇʀ Iᴅ:</> ${tgid}
<b>➕ Aᴍᴏᴜɴᴛ Aᴅᴅᴇᴅ:</> ${amount}
<b>💰 Bᴀʟᴀɴᴄᴇ:</> ${bal.value()}`

  Api.sendMessage({
    chat_id: admin,
    text: text,
    parse_mode: "HTML"
  })
} else {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "Uɴᴀᴜᴛʜᴏʀɪᴢᴇᴅ Aᴄᴄᴇss."
  })
}

