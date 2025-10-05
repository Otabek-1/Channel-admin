const { Telegraf, Markup } = require("telegraf")
const fs = require("fs")
const path = require("path")
const cron = require("node-cron")
const { quizzes, posts, quotes, facts, challenges, polls, evening_polls } = require("./data")
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const channel = process.env.CHANNEL_LINK


let broadcast_input = false;

const checkAdmin = (id) => {
  return Number(process.env.ADMIN) === Number(id);
}

async function sendQuizz() {
  const quizz = quizzes[Math.floor(Math.random() * quizzes.length)]
  await bot.telegram.sendPoll(channel, quizz.question, quizz.options, {
    type: "quiz",
    correct_option_id: quizz.correct,
    explanation: quizz.explanation
  })
}

async function sendPost() {
  const post = posts[Math.floor(Math.random() * posts.length)]
  await bot.telegram.sendMessage(channel, `#${post.category}\n\n${post.title}\n${post.content}`)
}

async function generateSchedule() {
  const time = new Date();
  const week_days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
  const sun_stickers = ["☀️", "🌇", "🌄", "🌅", "🌞"];
  const greetings = [`Hammaga salom!`, "Hello, dears!", "Hayrli tong!", "Good morning"];

  const message = `
${sun_stickers[Math.floor(Math.random() * sun_stickers.length)]} <b>${greetings[Math.floor(Math.random() * greetings.length)]}</b>

Bugun - <b>${week_days[time.getDay()]}</b>, haftaning ${time.getDay() === 0? 7 : time.getDay() + 1}-kuni. Kuningiz xayrli bo‘lsin! 🌸

✨ Motivatsiya: 
<blockquote>${quotes[Math.floor(Math.random() * quotes.length)]}</blockquote>

📚 Fakt: 
<i>${facts[Math.floor(Math.random() * facts.length)]}</i>

🎯 Bugungi challenga tayyormisiz? : 
<b>${challenges[Math.floor(Math.random() * challenges.length)]}</b>
  `

  await bot.telegram.sendMessage(channel, message, { parse_mode: "HTML" });
}

async function sendpoll(){
  const poll = polls[Math.floor(Math.random()*polls.length)]
  await bot.telegram.sendPoll(channel, poll.question, poll.options,{
    type:poll.type,
    is_anonymous:poll.is_anonymous
  })
}

async function sendEveningPolls() {
  const poll = evening_polls[Math.floor(Math.random()*evening_polls.length)]
  await bot.telegram.sendPoll(channel, poll.question, poll.options, {
    type:poll.type,
    is_anonymous:poll.is_anonymous
  })
}

async function goodNight() {
  const moon_stickers = ["🌙", "⭐️", "✨", "🌌", "😴"];
  const farewells = [
    "Xayrli tun, do‘stlar! 😴",
    "Yaxshi dam oling! 🌙",
    "Tinch uyqular tilayman ⭐️",
    "Bugun zo‘r edingiz! Ertaga yana davom 💪",
    "Oqshomingiz xotirjam o‘tsin ✨"
  ];

  const message = `
${moon_stickers[Math.floor(Math.random() * moon_stickers.length)]} <b>${farewells[Math.floor(Math.random() * farewells.length)]}</b>

Bugun siz bilan ajoyib kun o‘tdi 🌸  
Ertaga yangi imkoniyatlar, yangi motivatsiya va yangi bilimlar kutmoqda 🚀  

Tinch uxlang va ertaga yana davom etamiz! 🤗
  `;

  await bot.telegram.sendMessage(channel, message, { parse_mode: "HTML" });
}


bot.start(async (ctx) => {
  const user = ctx.message.from;
  if (checkAdmin(user.id)) {
    ctx.sendMessage("Salom!", Markup.inlineKeyboard([
      [Markup.button.callback("Send broadcast", "send_broadcast")]
    ]))
  } else {
    ctx.sendMessage("Salom!")
  }
  goodNight()
})

cron.schedule("0 7 * * *", async () => {
  await generateSchedule();
});

// Har kuni 21:00 da evening poll
cron.schedule("0 21 * * *", async () => {
  await sendEveningPolls();
});

// Har kuni 21:50 da good night
cron.schedule("50 21 * * *", async () => {
  await goodNight();
});

// Har kuni 7:30 da poll
cron.schedule("30 7 * * *", async () => {
  await sendpoll();
});

// Kuni bo‘yi random soatlarda quizz, poll, post
function scheduleRandomContent() {
  // Har 1-2 soatda random vaqt tanlash uchun
  const min = 60 * 60 * 1000; // 1 soat
  const max = 2 * 60 * 60 * 1000; // 2 soat
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;

  setTimeout(async () => {
    // Random content turi tanlash
    const funcs = [sendQuizz, sendPost];
    const func = funcs[Math.floor(Math.random() * funcs.length)];
    await func();

    // Keyingi random vaqtga yana o‘zini chaqiradi
    scheduleRandomContent();
  }, delay);
}

// Bot ishga tushganda random content scheduling boshlanadi
scheduleRandomContent();

bot.on("callback_query", async (ctx) => {
  if (ctx.callbackQuery.data == "send_broadcast") {
    broadcast_input = true;
    await ctx.reply("Send me post text.")
  }
  await ctx.answerCbQuery()
})

bot.on("text", async (ctx) => {
  if (broadcast_input && checkAdmin(ctx.message.from.id)) {
    const broadcast_text = ctx.message.text;
    await ctx.reply("Accepted! Post successfully published!")
    await bot.telegram.sendMessage(channel, broadcast_text)
    broadcast_input = false
  }
})

bot.launch()