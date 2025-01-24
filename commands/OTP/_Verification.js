/*CMD
  command: /Verification
  help: 
  need_reply: false
  auto_retry_time: 
  folder: OTP

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.run({
  command: "/AwaitVerification",
  options: { askedTime: Date.now() }
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

// Text Message
var cap = `<b>❇️ Eɴᴛᴇʀ Yᴏᴜʀ Oᴛᴘ Fʀᴏᴍ Tʜᴇ Cʜᴀɴɴᴇʟ Tᴏ Vᴇʀɪғʏ Yᴏᴜʀsᴇʟғ.

🔗 Oᴛᴘ Cʜᴀɴɴᴇʟ:</> @QuinxOTP.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Keyboard Buttons
Api.editMessageText({
  message_id: User.getProperty("mmm"),
  text: cap,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})

