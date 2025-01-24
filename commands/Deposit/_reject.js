/*CMD
  command: /reject
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

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

// Message
var cap = `<b>Yᴏᴜʀ Pᴀʏᴍᴇɴᴛ Rᴇҩᴜᴇsᴛ Hᴀs Bᴇᴇɴ Rᴇᴊᴇᴄᴛᴇᴅ Bʏ Aᴅᴍɪɴ</>

<b>Rᴇᴀsᴏɴs Fᴏʀ Rᴇᴊᴇᴄᴛɪᴏɴ Mᴀʏ Iɴᴄʟᴜᴅᴇ:</>
1. Iɴᴠᴀʟɪᴅ Pᴀʏᴍᴇɴᴛ Sᴄʀᴇᴇɴsʜᴏᴛ.
2. Sᴄʀᴇᴇɴsʜᴏᴛ Pʀᴇᴠɪᴏᴜsʟʏ Usᴇᴅ.
3. Pᴀʏᴍᴇɴᴛ Dɪsᴄʀᴇᴘᴀɴᴄʏ.
4. Iɴᴄᴏʀʀᴇᴄᴛ Pᴀʏᴍᴇɴᴛ Dᴇᴛᴀɪʟs.
5. Sᴜsᴘᴇᴄᴛᴇᴅ Fʀᴀᴜᴅᴜʟᴇɴᴛ Aᴄᴛɪᴠɪᴛʏ.

<b>Pʟᴇᴀsᴇ Rᴇᴠɪᴇᴡ Yᴏᴜʀ Sᴜʙᴍɪssɪᴏɴ Aɴᴅ Tʀʏ Aɢᴀɪɴ Iғ Nᴇᴄᴇssᴀʀʏ</>.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Send Stickers
Api.sendSticker({
  chat_id: params,
  sticker:
    "CAACAgUAAxkBAAMXZ3jMyvtqcnsFowJsqZEvjizT3fsAAnsTAAJNHrlX1IC8GLxOVdk2BA",
  on_result: "/deleteafter5"
})
Api.sendMessage({
  chat_id: params,
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

Bot.sendMessage("❎ Pᴀʏᴍᴇɴᴛ Rᴇᴊᴇᴄᴛᴇᴅ")
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❎ Rᴇᴊᴇᴄᴛᴇᴅ",
  show_alert: false
})

