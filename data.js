const quizzes = [
    {
        question: "🧐 Can you spot the mistake?\n\n👉 'She go to school every day.'",
        options: [
            "Correct as it is ✅",
            "She goes to school every day.",
            "She going to school every day.",
            "She is go school every day."
        ],
        correct: 1,
        explanation: "❌ Subject–verb agreement! With 'She/He/It' we use verb + 's'."
    },
    {
        question: "🔍 Which sentence is more natural in English?\n\n👉 'I very like pizza.'",
        options: [
            "I very like pizza.",
            "I like pizza very much.",
            "Very I like pizza.",
            "I much like pizza."
        ],
        correct: 1,
        explanation: "✅ In English we say 'I like ... very much', not 'I very like ...'."
    },
    {
        question: "🤓 Choose the correct form:\n\n👉 'If I ___ rich, I would travel the world.'",
        options: [
            "am",
            "was",
            "were",
            "be"
        ],
        correct: 2,
        explanation: "💡 In conditional (unreal present), we use 'If I were', not 'was'."
    },
    {
        question: "😏 Which is the odd one out?",
        options: [
            "Their house is big.",
            "They’re going to school.",
            "There is a book on the table.",
            "Theyre happy today."
        ],
        correct: 3,
        explanation: "👉 'Theyre' is wrong. It should be 'They're'."
    },
    {
        question: "🎯 Spot the tricky word:\n\n👉 'He is married with a doctor.'",
        options: [
            "Correct sentence",
            "He is married a doctor.",
            "He is married to a doctor.",
            "He married with a doctor."
        ],
        correct: 2,
        explanation: "🔑 We say 'married TO somebody', not 'with'."
    },
    {
        question: "📝 Which is correct?\n\n👉 'He has visited Paris last year.'",
        options: [
            "He has visited Paris last year.",
            "He visited Paris last year.",
            "He has visit Paris last year.",
            "He visit Paris last year."
        ],
        correct: 1,
        explanation: "✅ We use Past Simple ('visited') with specific time expressions like 'last year'."
    },
    {
        question: "🔎 Choose the correct word:\n\n👉 'I am looking forward ___ your reply.'",
        options: [
            "for",
            "to",
            "at",
            "on"
        ],
        correct: 1,
        explanation: "💡 'Look forward to' is the correct phrase."
    },
    {
        question: "🤔 Which sentence is correct?",
        options: [
            "She can to swim.",
            "She cans swim.",
            "She can swim.",
            "She can swims."
        ],
        correct: 2,
        explanation: "✅ After 'can', use the base form: 'can swim'."
    },
    {
        question: "🧐 Spot the mistake:\n\n👉 'There is too much people here.'",
        options: [
            "Correct as it is ✅",
            "There are too much people here.",
            "There are too many people here.",
            "There is too many people here."
        ],
        correct: 2,
        explanation: "❌ 'People' is plural, so use 'many' and 'are': 'There are too many people here.'"
    },
    {
        question: "📚 Which is the odd one out?",
        options: [
            "Advice",
            "Information",
            "News",
            "Furnitures"
        ],
        correct: 3,
        explanation: "👉 'Furnitures' is incorrect. 'Furniture' is uncountable and has no plural."
    }
    // ...add more as needed...
];

const posts = [
    {
        category: "IELTS_Vocabulary",
        title: "🔥 Top 10 Band 8 Vocabulary for IELTS",
        content: `
1️⃣ Alleviate — make (something bad) less severe  
2️⃣ Substantial — large, important  
3️⃣ Impede — to slow down or block progress  
4️⃣ Perceive — to become aware of something  
5️⃣ Mitigate — reduce severity  
6️⃣ Notion — idea or belief  
7️⃣ Viable — practical, workable  
8️⃣ Detrimental — harmful  
9️⃣ Profound — very deep or intense  
🔟 Ubiquitous — found everywhere

👉 Try to use these words in your writing & speaking!
    `
    },
    {
        category: "Workplace_English",
        title: "💼 10 Useful Business English Phrases",
        content: `
1️⃣ Let's get the ball rolling — start the meeting  
2️⃣ To touch base — to contact someone  
3️⃣ On the same page — have the same understanding  
4️⃣ Deadline — final date/time  
5️⃣ To take initiative — act independently  
6️⃣ To get back to you — reply later  
7️⃣ Win-win situation — good for both sides  
8️⃣ To be swamped — to be very busy  
9️⃣ To wrap up — finish something  
🔟 In the pipeline — in progress

👉 Master these for professional success!
    `
    },
    {
        category: "Everyday_Conversation",
        title: "🗣 Top 10 Everyday English Words",
        content: `
1️⃣ What's up? — How are you?  
2️⃣ Chill out — Relax  
3️⃣ No worries — It's okay  
4️⃣ Hang out — Spend time together  
5️⃣ Awesome — Very good  
6️⃣ I'm starving — I'm very hungry  
7️⃣ By the way — Changing the topic  
8️⃣ Long time no see — Haven’t seen you for a while  
9️⃣ That's lit — Amazing, cool  
🔟 Catch you later — Goodbye

👉 Use these to sound more natural!
    `
    },
    {
        category: "Grammar_Tip",
        title: "✍️ Common Grammar Mistakes",
        content: `
❌ He don't like it.  
✅ He doesn't like it.  

❌ She can sings.  
✅ She can sing.  

❌ I suggested him to go.  
✅ I suggested that he go.  

❌ I'm agree.  
✅ I agree.  

👉 Avoid these to speak more clearly!
    `
    },
    {
        category: "Idioms_&_Phrases",
        title: "🌍 10 Idioms to Boost Your English",
        content: `
1️⃣ Break the ice — start a conversation  
2️⃣ A piece of cake — very easy  
3️⃣ Under the weather — feeling sick  
4️⃣ Costs an arm and a leg — very expensive  
5️⃣ Spill the beans — reveal a secret  
6️⃣ Once in a blue moon — very rare  
7️⃣ Burn the midnight oil — study/work late  
8️⃣ Hit the sack — go to bed  
9️⃣ On cloud nine — very happy  
🔟 Call it a day — finish working

👉 Idioms make your English more colorful!
    `
    },
    {
        category: "IELTS_Vocabulary",
        title: "💡 10 More Advanced Words for IELTS",
        content: `
1️⃣ Concur — to agree  
2️⃣ Dwindle — to decrease gradually  
3️⃣ Exacerbate — to make worse  
4️⃣ Predominant — most common  
5️⃣ Ambiguous — unclear  
6️⃣ Facilitate — to make easier  
7️⃣ Discrepancy — difference  
8️⃣ Intricate — complicated  
9️⃣ Resilient — able to recover quickly  
🔟 Advocate — to support

👉 Try to use these in your next essay!
        `
    },
    {
        category: "Workplace_English",
        title: "📈 10 More Business English Expressions",
        content: `
1️⃣ To brainstorm — generate ideas  
2️⃣ To touch base — check in with someone  
3️⃣ To take it offline — discuss privately  
4️⃣ To circle back — return to a topic  
5️⃣ To give a heads-up — warn in advance  
6️⃣ To move the needle — make a difference  
7️⃣ To think outside the box — be creative  
8️⃣ To get the ball rolling — start something  
9️⃣ To be on the same wavelength — understand each other  
🔟 To run something by someone — get feedback

👉 Use these to sound more professional!
        `
    },
    {
        category: "Everyday_Conversation",
        title: "🗨️ 10 More Everyday English Phrases",
        content: `
1️⃣ No big deal — Not a problem  
2️⃣ Take your time — No rush  
3️⃣ I’m in — I agree  
4️⃣ You bet — Of course  
5️⃣ I’m broke — I have no money  
6️⃣ It’s up to you — You decide  
7️⃣ I’m down — I want to join  
8️⃣ Give me a sec — Wait a moment  
9️⃣ I’m good — No thanks  
🔟 That’s a bummer — That’s unfortunate

👉 Try these in your daily chats!
        `
    },
    {
        category: "Grammar_Tip",
        title: "📝 More Common Grammar Mistakes",
        content: `
❌ I have 20 years old.  
✅ I am 20 years old.  

❌ She said me the truth.  
✅ She told me the truth.  

❌ I didn’t went there.  
✅ I didn’t go there.  

❌ He is married with her.  
✅ He is married to her.  

👉 Watch out for these mistakes!
        `
    },
    {
        category: "Idioms_&_Phrases",
        title: "🦉 10 More Useful Idioms",
        content: `
1️⃣ Hit the books — study hard  
2️⃣ Let the cat out of the bag — reveal a secret  
3️⃣ The ball is in your court — it’s your decision  
4️⃣ Cut corners — do something badly to save time/money  
5️⃣ Get cold feet — become nervous  
6️⃣ Go the extra mile — do more than expected  
7️⃣ Kill two birds with one stone — solve two problems at once  
8️⃣ Miss the boat — miss an opportunity  
9️⃣ Sit on the fence — be undecided  
🔟 The best of both worlds — all the advantages

👉 Idioms make your English richer!
        `
    }
    // ...add more as needed...
];

const quotes = [
  "Every day is a chance to improve yourself ✨",
  "Bugungi kichik qadamlar ertangi katta natijalarga olib boradi 🚀",
  "Success is the sum of small efforts, repeated day in and day out 💪",
  "Hech narsa qilmaslikdan ko‘ra kichkina qadam ham yaxshiroq 👣",
  "Mistakes are proof that you are trying 🌱",
  "Harakat qilgan inson albatta natijaga erishadi 💡",
  "Learning never exhausts the mind 🧠",
  "O‘rganish hech qachon kech emas ⏳"
]

const facts = [
  "The word <b>set</b> has the most meanings in English.",
  "Did you know? The longest word in English is <b>pneumonoultramicroscopicsilicovolcanoconiosis</b> 🤯",
  "In Old English, 'girl' used to mean a young person of either sex 👶",
  "The dot over the letters 'i' and 'j' is called a <b>tittle</b>.",
  "The shortest complete sentence in English is 'Go.'",
  "The most commonly used letter in English is 'E'.",
  "The word 'queue' is just the letter 'Q' followed by four silent letters.",
  "The only English word that ends with 'mt' is 'dreamt'."
]

const challenges = [
  "Try to use the word <b>serendipity</b> in a sentence today 😎",
  "Write one sentence with the Present Perfect tense ✍️",
  "Learn and use 3 new words in conversation today 🗣️",
  "Translate your favorite proverb into English 🔑",
  "Write a short story using at least 5 new words 📖",
  "Record yourself speaking English for 1 minute 🎤",
  "Ask a friend a question in English today 🤝",
  "Describe your day in English before sleeping 🌙"
]

const polls = [
  {
    question: "Bugun ingliz tiliga necha daqiqa vaqt ajratasiz? ⏰",
    options: ["10 daqiqa", "30 daqiqa", "1 soat", "2+ soat"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Qaysi ko‘nikmani ko‘proq mashq qilmoqchisiz? 📚",
    options: ["Speaking 🗣", "Listening 🎧", "Reading 📖", "Writing ✍️"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Ingliz tilini ko‘proq qayerda ishlatasiz? 🌍",
    options: ["O‘qishda 🎓", "Ishda 💼", "Safarda ✈️", "Do‘stlar bilan suhbatda 🤝"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Til o‘rganishda sizni ko‘proq nima qiziqtiradi? 🎯",
    options: ["Imtihon topshirish (IELTS/TOEFL)", "Kasbiy rivojlanish", "Shaxsiy maqsad", "Sayohat va madaniyat"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun til o‘rganishni qanday boshlaysiz? 🚀",
    options: ["Yangi so‘zlarni yodlayman", "Grammatika mashq qilaman", "Podcast tinglayman", "Film/serial ko‘raman"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Qaysi vaqt siz uchun ingliz tilini o‘rganishga qulay? 🕒",
    options: ["Ertalab", "Kunduzi", "Kechqurun", "Har doim"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Ingliz tilida eng ko‘p qaysi sohani o‘rganmoqchisiz? 📖",
    options: ["Grammatika", "So‘z boyligi", "Talaffuz", "Yozish"],
    is_anonymous: true,
    type: "regular"
  }
]

const evening_polls = [
  {
    question: "Bugungi kuningiz qanday o'tdi? 🌙",
    options: ["Zo‘r o'tdi 😍", "Yaxshi 😊", "Charchadim 😓", "Oddiy kun edi 😐"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun ingliz tiliga qancha vaqt ajratdingiz? ⏰",
    options: ["0 daqiqa 😅", "30 daqiqa", "1 soat", "2+ soat 🔥"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun nechta yangi so‘z o‘rgandingiz? 📝",
    options: ["Hech qaysi 😅", "1-5 ta", "6-10 ta", "10+ so‘z 🔥"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun sizning kayfiyatingiz qanday edi? 🌸",
    options: ["A’lo 😍", "Yaxshi 🙂", "O‘rtacha 😐", "Yomon 😔"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun ingliz tilida gaplashishga harakat qildingizmi? 🗣️",
    options: ["Ha, ko‘p gaplashdim", "Biroz gaplashdim", "Gaplashmadim", "Eslamadim ham"],
    is_anonymous: true,
    type: "regular"
  },
  {
    question: "Bugun yangi grammatik qoidani o‘rgandingizmi? 📚",
    options: ["Ha", "Yo‘q", "Yarimta", "Eslay olmadim"],
    is_anonymous: true,
    type: "regular"
  }
]

const journey = {
  "journey_title": "Amazon Jungle Survival",
  "lives": 3,
  "steps": [
    {
      "scene": "Arrival at the Jungle",
      "narration": "You step out of the small plane and into the heart of the Amazon rainforest. The air is hot, humid, and filled with the sound of exotic birds.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "Welcome, traveler! Only the strong can survive here. Are you ready?",
          "options": [
            "Yes, I’m ready!",
            "No, I feel scared.",
            "Maybe after some food first."
          ],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "The Dense Forest",
      "narration": "As you move deeper, the forest becomes thicker and darker. Insects buzz loudly around you.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "The path splits ahead. One is narrow and risky but faster, the other is longer but safer. Which way?",
          "options": [
            "The narrow risky path.",
            "The long safe path.",
            "Forget paths, let’s cut through the forest."
          ],
          "correct_option": 1,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "The Swamp",
      "narration": "A swamp blocks your way. Each step sinks deeper into the muddy ground.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "This is dangerous. How do we cross?",
          "options": [
            "Gather branches to walk over it.",
            "Jump straight into the water.",
            "Turn back."
          ],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Jaguar Encounter",
      "narration": "From the shadows, a jaguar appears. Its golden eyes lock onto you.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "Stay calm! What do we do?",
          "options": [
            "Slowly back away.",
            "Scream loudly to scare it.",
            "Charge at the jaguar."
          ],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "The River Rapids",
      "narration": "You reach a wild river. The current is dangerously strong.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "We need to cross. What’s your choice?",
          "options": [
            "Cross the shaky rope bridge.",
            "Build a canoe and paddle across.",
            "Try to jump over the river."
          ],
          "correct_option": 1,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Night in the Jungle",
      "narration": "Darkness falls. Strange sounds echo from every direction, and glowing eyes flicker in the trees.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "We must rest, but also stay safe. What do we do?",
          "options": [
            "Climb a tree and sleep high up.",
            "Make a fire and camp on the ground.",
            "Keep walking through the night."
          ],
          "correct_option": 1,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "The Hidden Temple",
      "narration": "At dawn, you stumble upon an ancient stone temple hidden deep in the jungle.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "This temple may hold treasures… or traps. What’s your move?",
          "options": [
            "Enter carefully and explore.",
            "Stay outside, it’s too risky.",
            "Mark the location and return later."
          ],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    }
  ],
  "ending": "🏆 Congratulations! You’ve survived the Amazon Jungle journey. You faced danger, made wise choices, and proved yourself a true adventurer!"
}




module.exports = {
    quizzes, posts, quotes, facts, challenges, polls, evening_polls, journey
}
