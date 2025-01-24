/*CMD
  command: /proof
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Vip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

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

if (request.photo && request.photo.length > 0) {
  var but = [
    [
      { text: "◁ Bᴀᴄᴋ ", callback_data: "/premium" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ]
  ]

  Api.deleteMessage({
    chat_id: chat.chatid,
    message_id: request.message_id
  })

  let free = new Date().toLocaleString("en-US", {
    timeZone: "Asia/kolkata"
  })

  var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
  var tm = Libs.DateTimeFormat.format(free, "h:MM:ss")

  var cap = `🔥<b>Yᴏᴜʀ Dᴇᴘᴏsɪᴛ Wɪʟʟ Bᴇ Pʀᴏᴄᴇssᴇᴅ</>

<b>💰 Aᴍᴏᴜɴᴛ:</> ${User.getProperty("amount")}
<b>⌚️ Uᴘᴅᴀᴛᴇ Oɴ:</> ${tm}
<b>📆 Dᴀᴛᴇ:</> ${dt}
        
<b>Tʜᴀɴᴋs Fᴏʀ Bᴜʏ Pʀᴇᴍɪᴜᴍ Pʟᴀɴ Iɴ Bᴏᴛ</>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  Api.editMessageText({
    message_id: User.getProperty("mmm"),
    text: cap,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: but }
  })

  // Define All Dynamic Message Values
  const firstName =
    user && user.first_name
      ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
      : "Uɴᴋɴᴏᴡɴ"

  const userId = user.telegramid
  const username = user.username ? `@${user.username}` : "Uɴᴋɴᴏᴡɴ"
  const lastName = user.last_name || "Uɴᴋɴᴏᴡɴ"
  const isPremium = user.is_premium ? "Yᴇs" : "Nᴏ"
  const languageCode = user.language_code || "Uɴᴋɴᴏᴡɴ"
  const userProfileLink = `<a href='tg://user?id=${userId}'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>`

  var caps = `<b>🏦 Nᴇᴡ Dᴇᴘᴏsɪᴛ Rᴇᴇᴜᴇsᴛ</>

<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</> ${firstName}
<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</> ${lastName}
<b>🌐 Usᴇʀɴᴀᴍᴇ:</> ${username}
<b>🏆 Tᴇʟᴇɢʀᴀᴍ Pʀᴇᴍɪᴜᴍ:</> ${isPremium}
<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</> ${languageCode}
<b>🆔 Usᴇʀ Iᴅ:</> <code>${user.telegramid}</code>
<b>💁 Pʀᴏғɪʟᴇ:</> ${userProfileLink}
<b>💸 Aᴍᴏᴜɴᴛ:</> ${User.getProperty("amount")}

<b>👑 Cʀᴇᴀᴛᴏʀ:</> <a href='t.me/shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</>`

  // Check that photo exists and is valid before accessing file_id
  var photoId = request.photo[0]?.file_id
  if (photoId) {
    Api.sendPhoto({
      chat_id: 5572081489,
      photo: photoId, // safely access the photo file_id
      caption: caps,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "✅ Aᴄᴄᴇᴘᴛ", callback_data: "/accept " + user.telegramid },
            {
              text: "Rᴇᴊᴇᴄᴛ ❎",
              callback_data: "/reject " + user.telegramid + ""
            }
          ]
        ]
      }
    })
  }
} else {
  var capz = `<b>🥴 Oɴʟʏ Pʜᴏᴛᴏ Aʟʟᴏᴡᴇᴅ</b>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  var butt = [
    [
      { text: "◁ Bᴀᴄᴋ ", callback_data: "/premium" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ]
  ]
  Api.editMessageText({
    chat_id: user.telegramid,
    message_id: User.getProperty("mmm"),
    text: capz,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: butt }
  })
}

