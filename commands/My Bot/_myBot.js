/*CMD
  command: /myBot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: My Bot

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mybot
  group: 
CMD*/

var bots = Bot.getProperty("MyBotLists" + user.telegramid)
var mm = User.getProperty("mmm")
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

if (!bots || bots.length === 0) {
  var txt = `<b>👮 Tʜᴇʀᴇ Is Nᴏ Cᴏɴɴᴇᴄᴛᴇᴅ Bᴏᴛs Yᴇᴛ.</> Sᴇɴᴅ /addbot To Cᴏɴɴᴇᴄᴛ A Nᴇᴡ Oɴᴇ.
    
📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  var key = [
    [
      { text: "◁ Bᴀᴄᴋ ", callback_data: "/start" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ]
  ]
  Api.editMessageText({
    message_id: mm,
    text: txt,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: key }
  })
  return
}

// Initialize inline keyboard
var inlkey = []
var txt = `⭐<b> Cʜᴏᴏsᴇ A Bᴏᴛ Fʀᴏᴍ Tʜᴇ Lɪsᴛ Bᴇʟᴏᴡ:</>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Add bots to the inline keyboard
for (var index in bots) {
  var b = bots[index].name

  // Add each bot as a button
  inlkey.push([
    {
      text: "@" + b,
      callback_data: "/botHub " + b
    }
  ])
}

// Add navigation buttons
inlkey.push([
  { text: "◁ Back", callback_data: "/start" },
  { text: "Close ✕", callback_data: "/close" }
])

// Send the message with the inline keyboard
Api.editMessageText({
  message_id: mm,
  text: txt,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlkey }
})

