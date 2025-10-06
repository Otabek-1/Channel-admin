const { Telegraf, Markup } = require("telegraf")
const fs = require("fs")
const path = require("path")
const cron = require("node-cron")
const { quizzes, posts, quotes, facts, challenges, polls, evening_polls, journey } = require("./data")
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN)
const channel = process.env.CHANNEL_LINK


let broadcast_input = false;

let userProgress = {}; // { userId: { lives, step, dialogue, timeout } }
let journey_completed = [];
let attempted = [];

function formatUser(user) {
  return user.username ? `@${user.username}` : (user.first_name || "") + " " + (user.last_name || "");
}

async function startDialogue(ctx, userId) {
  const prog = userProgress[userId];
  const step = journey.steps[prog.step];
  const dialogue = step.dialogue[prog.dialogue];

  await ctx.reply(
    `📍 <b>${step.scene}</b>\n<i>${step.narration}</i>\n\n👤 <b>${dialogue.speaker}</b>: ${dialogue.text}`,
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: dialogue.options.map((opt, i) => [
          { text: opt, callback_data: `journey_option_${i}` }
        ])
      }
    }
  );

  // set timeout
  prog.timeout = setTimeout(async () => {
    prog.lives--;
    if (prog.lives <= 0) {
      await ctx.reply("❌ Vaqt tugadi va imkoniyatlaringiz ham tugadi.");
      delete userProgress[userId];
    } else {
      await ctx.reply(`⏳ Vaqt tugadi! ❌ 1 life yo‘qoldi. Qoldi: ${prog.lives}`);
      // keyingi dialogue
      prog.dialogue++;
      if (prog.dialogue >= step.dialogue.length) {
        prog.step++;
        prog.dialogue = 0;
      }
      if (prog.step >= journey.steps.length) {
        await ctx.reply(journey.ending);
        journey_completed.push(formatUser(ctx.from));
        delete userProgress[userId];
      } else {
        await startDialogue(ctx, userId);
      }
    }
  }, dialogue.time_limit * 1000);
}

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

Bugun - <b>${week_days[time.getDay()]}</b>, haftaning ${time.getDay() === 0 ? 7 : time.getDay() + 1}-kuni. Kuningiz xayrli bo‘lsin! 🌸

✨ Motivatsiya: 
<blockquote>${quotes[Math.floor(Math.random() * quotes.length)]}</blockquote>

📚 Fakt: 
<i>${facts[Math.floor(Math.random() * facts.length)]}</i>

🎯 Bugungi challenga tayyormisiz? : 
<b>${challenges[Math.floor(Math.random() * challenges.length)]}</b>
  `

  await bot.telegram.sendMessage(channel, message, { parse_mode: "HTML" });
}

async function sendpoll() {
  const poll = polls[Math.floor(Math.random() * polls.length)]
  await bot.telegram.sendPoll(channel, poll.question, poll.options, {
    type: poll.type,
    is_anonymous: poll.is_anonymous
  })
}

async function sendEveningPolls() {
  const poll = evening_polls[Math.floor(Math.random() * evening_polls.length)]
  await bot.telegram.sendPoll(channel, poll.question, poll.options, {
    type: poll.type,
    is_anonymous: poll.is_anonymous
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
      [Markup.button.callback("Send broadcast", "send_broadcast")],
    ]))
  } else {
    const now = moment().tz("Asia/Tashkent");
    const hour = now.hour();

    if (hour >= 16 && hour < 20) {
      await ctx.sendMessage("Salom! ✨ Bugungi Journey boshlashga tayyormisiz?",
        Markup.inlineKeyboard([
          [Markup.button.callback("▶️ Start today's journey", "start_journey")]
        ])
      );
    } else {
      await ctx.sendMessage("Salom! 😊\n\nJourney faqat <b>16:00 - 20:00</b> orasida ochiladi (Asia/Tashkent). Kutib turing! ⏳", { parse_mode: "HTML" });
    }
  }
});

cron.schedule("0 7 * * *", async () => {
  await generateSchedule();
}, {
  scheduled: true,
  timezone: "Asia/Tashkent"   // Uzbekistan vaqti
});

// Har kuni 21:00 da evening poll
cron.schedule("0 21 * * *", async () => {
  await sendEveningPolls();
}, {
  scheduled: true,
  timezone: "Asia/Tashkent"   // Uzbekistan vaqti
});

// Har kuni 21:50 da good night
cron.schedule("50 21 * * *", async () => {
  await goodNight();
}, {
  scheduled: true,
  timezone: "Asia/Tashkent"   // Uzbekistan vaqti
});

// Har kuni 7:30 da poll
cron.schedule("30 7 * * *", async () => {
  await sendpoll();
}, {
  scheduled: true,
  timezone: "Asia/Tashkent"   // Uzbekistan vaqti
});

cron.schedule("0 16 * * *", async () => {
  await bot.telegram.sendMessage(
    channel,
    `🚀 <b>Attention!</b>\n\n 
Bugungi <b>Journey</b> start oldi! 🎉  
Hoziroq botga kiring va <code>/start</code> buyrug‘ini yozib, safaringizni boshlang. 🌍✈️  

❓ Savollarga to‘g‘ri javob berib, sayohatni oxirigacha bora olasizmi?  
⏳ Sizda <b>20:00 gacha</b> vaqt bor!  

Good luck & have fun! 🍀`,
    { parse_mode: "HTML" }, Markup.inlineKeyboard([
      [Markup.button.url("https://t.me/pro_course_english_bot")]
    ])
  );
}, {
  scheduled: true,
  timezone: "Asia/Tashkent"
})

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


// start journey
bot.action("start_journey_action", async (ctx) => {
  await ctx.editMessageReplyMarkup();

  const userId = ctx.from.id;
  if (attempted.includes(userId)) {
    return ctx.reply("Ooops 😬 Siz allaqachon bugungi imkoniyatdan foydalandingiz.");
  }

  attempted.push(userId);
  userProgress[userId] = { lives: journey.lives, step: 0, dialogue: 0, timeout: null };
  await ctx.reply("🔥 Journey boshlandi! Diqqat bilan javob bering!");
  await startDialogue(ctx, userId);
});

// option bosilganda
bot.on("callback_query", async (ctx) => {
  const userId = ctx.from.id;
  const data = ctx.callbackQuery.data;

  if (data == "send_broadcast") {
    broadcast_input = true;
    await ctx.reply("Send me post text.");
    await ctx.answerCbQuery();
    return;
  }
  if (data == "start_journey") {
    await ctx.reply(
      `🚀 Ajoyib! Demak bugungi sayohat:\n\n<b>${journey.journey_title}</b>\n\nSizda xato qilishga <b>totally ${journey.lives}</b> ta imkoniyat bor. 💡\n\n<b>⚠️ WARNING!</b>\nAgar imkoniyatlaringiz tugasa sayohat avtomatik to‘xtatiladi va sizda <i>qayta topshirish imkoniyati yo‘q</i>. ❌\n\n⏳ Har bir savolga javob berish uchun sizda faqat <b>30 sekund</b> vaqt bor. Agar ulgurmasangiz ham imkoniyatingiz 1 taga kamayadi.\n\n🔥 Boshlashga tayyormisiz???`,
      { parse_mode: "HTML" }, Markup.inlineKeyboard([
        ["Let's go 🚀", "start_journey_action"]
      ])
    );
    await ctx.answerCbQuery();
    return;
  }

  if (!data.startsWith("journey_option_")) {
    await ctx.answerCbQuery();
    return;
  }

  const prog = userProgress[userId];
  if (!prog) {
    await ctx.answerCbQuery("Sizda aktiv journey yo‘q.");
    return;
  }

  clearTimeout(prog.timeout);

  const step = journey.steps[prog.step];
  const dialogue = step.dialogue[prog.dialogue];
  const choice = Number(data.split("_")[2]);

  if (choice === dialogue.correct_option) {
    await ctx.reply("✅ To‘g‘ri!");
  } else {
    prog.lives--;
    await ctx.reply(`❌ Noto‘g‘ri. Qoldi: ${prog.lives} life`);
    if (prog.lives <= 0) {
      await ctx.reply("O‘yin tugadi � Siz safardan yiqildingiz.");
      delete userProgress[userId];
      await ctx.answerCbQuery();
      return;
    }
  }

  // next dialogue
  prog.dialogue++;
  if (prog.dialogue >= step.dialogue.length) {
    prog.step++;
    prog.dialogue = 0;
  }

  if (prog.step >= journey.steps.length) {
    await ctx.reply(journey.ending);
    journey_completed.push(formatUser(ctx.from));
    delete userProgress[userId];
  } else {
    await startDialogue(ctx, userId);
  }

  await ctx.answerCbQuery();
});
// Har kuni 20:00 da natija chiqarish
cron.schedule("0 20 * * *", async () => {
  if (journey_completed.length === 0) {
    await bot.telegram.sendMessage(channel, "Bugun hech kim journey’ni tugata olmadi 😢");
  } else {
    await bot.telegram.sendMessage(
      channel,
      `🎉 Bugungi journey’dan muvaffaqiyatli o‘tganlar:\n\n${journey_completed.join("\n")}`
    );
  }
  // reset
  journey_completed = [];
  attempted = [];
}, {
  timezone: "Asia/Tashkent"
});

bot.on("text", async (ctx) => {
  if (broadcast_input && checkAdmin(ctx.message.from.id)) {
    const broadcast_text = ctx.message.text;

    // Agar admin matndan keyin "no" deb yozsa
    if (broadcast_text.trim().toLowerCase() === "no") {
      await ctx.reply("✅ Post kanalga faqat matn bilan yuborildi!");
      await bot.telegram.sendMessage(channel, last_broadcast_text);
      broadcast_input = false;
    }
    // Agar admin "Button name, link" formatida yozsa
    else if (broadcast_text.includes(",")) {
      const [btnText, btnUrl] = broadcast_text.split(",").map(s => s.trim());

      await ctx.reply("✅ Post kanalga button bilan yuborildi!");
      await bot.telegram.sendMessage(
        channel,
        last_broadcast_text,
        Markup.inlineKeyboard([
          [Markup.button.url(btnText, btnUrl)]
        ])
      );
      broadcast_input = false;
    }
    // Aks holda – bu matnni keyin yuborish uchun saqlab qo‘yamiz
    else {
      last_broadcast_text = broadcast_text;
      await ctx.reply("✅ Accepted! Do you want to add button (link)? Write `Button name, link_url` or write `no`.");
    }
  }
});

bot.launch()