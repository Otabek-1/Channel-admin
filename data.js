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
  "journey_title": "🏝️ Desert Island Survival",
  "lives": 3,
  "steps": [
    {
      "scene": "Shipwreck Shore",
      "narration": "Your ship sank, and you washed up on a deserted island. The sound of waves and cries of seagulls surround you.",
      "dialogue": [
        {
          "speaker": "Survivor",
          "text": "We need to find supplies quickly. What should we do first?",
          "options": ["Look for fresh water 💧", "Search for food 🍌"],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Coconut Grove",
      "narration": "You find a grove full of coconuts. It could be useful for food and water.",
      "dialogue": [
        {
          "speaker": "Teammate",
          "text": "Should we climb the tree for coconuts or look for other fruits?",
          "options": ["Climb for coconuts 🥥", "Look elsewhere 🌿"],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Wild Encounter",
      "narration": "As you move inland, you hear rustling in the bushes. Something is watching you...",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "It might be an animal. Should we investigate or stay quiet?",
          "options": ["Investigate 🔦", "Stay quiet 🤫"],
          "correct_option": 1,
          "time_limit": 30
        },
        {
          "speaker": "Teammate",
          "text": "Good call! It was just a harmless iguana. Should we catch it for food?",
          "options": ["Yes, catch it 🍖", "No, let it go 🦎"],
          "correct_option": 1,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Shelter Building",
      "narration": "The sun is setting. You need to build shelter before night comes.",
      "dialogue": [
        {
          "speaker": "Survivor",
          "text": "Should we build the shelter near the beach or deeper in the forest?",
          "options": ["Near the beach 🏖️", "In the forest 🌴"],
          "correct_option": 1,
          "time_limit": 30
        }
      ]
    },
    {
      "scene": "Signal Fire",
      "narration": "You survived the night! Now you need to signal for help.",
      "dialogue": [
        {
          "speaker": "Guide",
          "text": "Should we make a big fire on the beach or try to build a wooden raft?",
          "options": ["Big fire 🔥", "Wooden raft 🚣"],
          "correct_option": 0,
          "time_limit": 30
        }
      ]
    }
  ],
  "ending": "🚁 A rescue helicopter spots your fire and lands on the beach. You are saved! 🎉 Your choices kept the team alive. Great job, survivor! 🌍"
};



const readings = [
  {
    id: 1,
    part_1: {
      text: `
      The water hyacinth grows in tropical countries. It has beautiful purple-blue flowers, but 
everybody hates it. Why? 
Millions and millions of these plants 1 ___
in rivers and lakes. Sometimes 
the plants become so thick that people can walk on them. People cannot travel in boats on 
the water, and they cannot fish in it. The 2  ___
stop the water from 
moving. Then the water carries diseases. Farmers cannot use the water on their land. 
Now scientists think that 3  ___
hyacinths can be useful. The plants are 
really a tree crop. No one has to take care of them. They just grow and grow and grow. 
What can 4 ___
use them for? 
Some fish like to eat them. Farmers can grow these fish in the lakes and rivers. Workers can 
collect and cut the plants with machines. Then they can make fertilizer to make their crops 
grow better. They can also make feed for their farm animals. Maybe it will be possible to 
make    methane    gas    for     energy.     (We     burn     gas     from     petroleum     for 
energy. 5 ___
gas comes from plants.) 
Then poor tropical countries will not have to buy so much expensive 6 ___
Maybe in the future people will love the water hyacinth instead of hating it.
      `,
      answers: ['grow', 'plants', 'water', 'farmers', 'methane', 'petroleum']
    },
    part_2: {
      task: 'The people below all want to visit a museum. There are descriptions of museums. Decide which museum would be the most suitable for the following people.',
      questions: [`Jake and Maureen have different interests but want to go somewhere they will both 
enjoy. Jake loves anything to do with the sea, while Maureen's interested in social 
history and the lives of women. `, `Melanie is a history teacher. She wants to take her class to a museum where they will be 
allowed to touch things and have activities to do during their visit. `, `Roger is keen to find out about different forms of transport in towns over the last 
hundred years. He would like to attend a talk while he is at the museum. `, `Kazuko studies English literature and thinks that seeing where writers lived will help her 
understand their books better. She finds it useful to look at pictures which are 
connected with the books.`, ` Nick is more interested in learning about the countryside than learning about people 
from the past. He needs information for some schoolwork he is doing about what 
happens to rivers and hills over time. `, ` Ingrid's eldest daughter is learning about English history and would like to go 
somewhere to bring this subject to life. Ingrid is really interested in flowers. `, ` Trevor is an artist and enjoys drawing wildlife. He recently visited a zoo and drew large 
animals and would like to try sketching something smaller. `, ` Sarah and her husband would like to spend the day outdoors. They don't like going on 
rides but are both interested in history and how people used to live. `],
      options: [[`Red House`, `Travel back to the time of the novelist Charlotte Brontë and find out about her friends 
and local connections. Discover the comforts and discomforts of the 1830s country 
home where Charlotte sometimes stayed as a guest of Joshua Taylor's family and got 
ideas for her novel Shirley.`], [`Castle Museum`, `The castle was built looking down on the valley of the River Dean. It is now a museum, 
where you can learn how the valley has changed over millions of years. There is a 
collection of interesting rocks and fossils found in the area, and pictures showing how 
the valley probably looked in prehistoric times.`], [`Hillcrest Museum `, `Enjoy an experience of digging up the past. Handle pieces of ancient pots, tools and 
other objects from many countries. Learn to date them and see what they tell us about 
how people lived then. Also try out computer programs which help plan the digging-up 
of sites. School groups should book in advance.`], [`Shandy Hall`, `Here in the 1760s, Laurence Sterne wrote Tristram Shandy. His fifteenth-century house 
is now surrounded by a large garden full of beautiful and unusual plants. Inside there is 
an important collection of Steme's novels plus the original drawings which were 
included in his works.`], [`Museum of Peace`, `Situated in beautiful countryside, this is the only museum of its kind in the country. It 
has a growing collection of art and objects connected with peace history, non-violence 
and the ending of war. It also has material which can be used after the visit back in the 
classroom. `], [`Fishing Centre `, `Study the routes used by fishermen over the last two hundred years and see how their 
ocean-going boats worked. A new exhibition explores the position of wives and mothers 
in the old fishing towns, giving information about their occupations, and their attitudes 
to work and home.`], [`Viking Centre `, `Come and experience what life was like 1,200 years ago in this Viking town, rebuilt at 
the mouth of the river. Our introductory talk will inform you about the close relationship 
the Vikings had with the sea —they were excellent fishermen, sailors and boat-builders. 
There are also tools, clothes and everyday items to look at.`], [`Horsepower Museum `, `This museum reminds us just how important horses were to life in the nineteenth and 
early twentieth centuries. It has a permanent exhibition of old trams and buses, which 
used to be pulled through the streets by horses. The staff here are very knowledgeable 
and give daily lectures on this fascinating collection `], [`Warwick Castle `, `Regarded by many as Britain's greatest Medieval Castle. Visit exhibitions, climb the 
castle towers, relax as you walk around the gardens, designed and created in 1753 by 
Capability Brown. Experience the preparations for battle in the Kingmaker exhibition or 
witness a Victorian Royal Weekend. And if your interest is more in the darker side of the 
Castle's history visit The Castle Dungeon. `], [`Stratford Butterfly Farm`, `The biggest butterfly farm in Europe. Whatever the weather come and see these 
beautiful creatures as they would live in their natural environment. Walk around a 
tropical rainforest as butterflies fly freely around you. See them as they come into the 
world in the Caterpillar Room. And don't miss Insect City where you can view huge 
spiders and our very own scorpion colony! `], [`Black Country Museum `, `It's been called Britain's friendliest open-air museum. Come to Black Country Museum 
and discover an old-fashioned village by the canal. Look around original old-fashioned 
shops and houses, see what it's like down a mine and take a ride on a tramcar.`], [`Drayton Manner `, `One of the UK's most popular attractions. The park is home to some of the scariest rides 
you'll find like Stormforce 10 and Apocalypse, which has been voted the UK's most 
frightening ride. You'll also find an indoor and outdoor play area and of course, Drayton 
Manor Zoo with over one hundred different species, including twelve rare breeds from 
across the world.`]],
      answers: 'fchdbijk'
    },
    part_3: {
      text: `Make Most of Your Free Time\n1. Studies say that people nowadays have more free time than ever before. Then why doesn't it feel that way? These days, our free time is usually spent watching television, using computers or communicating on our phones. Images and information are constantly flashing into our brains, so it's no wonder we don't feel as if we have really switched off. To really wind down and help us regain our energy levels, it is important to use our free time wisely.\nTEACHER:MUHAMMADAYUB  CHANNEL:@IELTS_CEFR_SECRETS\n2. Don't let anything else encroach on your free time. Ignore the washing up and the vacuuming. Don't check your inbox for messages and turn off your mobile phone. Otherwise, the lines between free time and everyday live will begin to blur, and you won't feel refreshed.\n3. In many free time activities, we take the role of consumer. When we watch TV, play video games or read, we are only passively involved. Take on the role of producer for a change. Build a model, write a blog or make an animation film. You will use a different part of your brains and will feel more energised as a result.\n4. But don't go overboard. Many people worry too much about their free time activities. They want to do things that will impress their friends, look good on their résumés or help them get a better job. But free time isn't about that. It is about doing an activity for enjoyment's sake, so don't let outside pressures influence your choice.\n5. You'll really know you're using your time wisely if what you're doing helps other people. So find out what's going on in the community and lend a hand. Visit the elderly or help out in a children's club. If socialising's not your thing, why not volunteer for a wildlife organisation?\n6. Once you're relaxed and energised, you can think about what you'd like to improve in your life. Want to get fit? Learn a skill? Improve your job prospects? There are plenty of groups, clubs and classes you can join that will set you on a completely new life path. So what are you waiting for? Get out there and enjoy yourself!`,
      headings: [
        'Guard_your time ',
        'Make a difference ',
        'Why Its so hard ',
        'Set a date',
        'Get creative',
        'Meet likerninded people',
        'Change your life',
        'Establish your goals',
        'Do what you want',
        'Plan a head'
      ],
      answers: 'caeibg' // 1-c, 2-a, 3-e, 4-i, 5-b, 6-g
    },
    part_4: {
      text: `Elnino and Seabirds\nA. Rhythm of the seasons cannot always be relied upon. At times the tropical Pacific Ocean and large expanses of the global atmosphere seem to be marching to the beat of a different drummer, disrupting the normal patterns of countless species of plants and animals along with hundreds of millions of human beings. So they want anticipate these occasional lapses in the march of the seasons and help societies plan accordingly, scientists are seeking to understand these competing rhythms: the strongest of which is the alternation between the “normal climate” and a different but still recurrent set of climatic conditions in the Pacific region called El Nino.\nTEACHER:MUHAMMADAYUB  CHANNEL:@IELTS_CEFR_SECRETS\nB. Seabirds are prominent and highly visible components of marine ecosystems that will be affected by global climate change. The Bering Sea region is particularly important to seabirds; populations there are larger and more diverse than in any similar region in North America—over 90% of seabirds breeding in the continental United States are found in this region. Seabirds, so named because they spend at least 80% of their lives at sea, are dependent upon marine resources for food. As prey availability changes in response to climatically driven factors such as surface sea temperature and extent of sea ice, so will populations of seabirds be affected.\nC. Seabirds are valued as indicators of healthy marine ecosystems and provide a “vicarious use value” or existence value—people appreciate and value seabirds simply because they are there and enjoy them through venues such as pictures, nature programs, and written accounts without ever directly observing seabirds in their native environment. A direct measure of this value is demonstrated by Federal legislation that established specific national wildlife refuges to protect seabirds and international treaty obligations that provide additional protection for seabirds. Seabirds are also an important subsistence resource for many who live within the Bering Sea Region. Furthermore, the rich knowledge base about seabirds makes them a valuable resource as indicator species for measurement of change in the marine environment.\nD. The most abundant breeding species in Alaska are northern fulmars, storm-petrels, kittiwakes, murres, auklets and puffins. These species also form the largest colonies. Fulmars, storm-petrels and kittiwakes are surface feeders, picking their prey from the surface or just below the surface; murres, auklets, and puffins dive for their food. Fulmars nest primarily on island groups in and around the Bering Sea. They take a wide variety of prey (e.g., fish, squid, zooplankton, jellyfish) from the surface or just below the surface. Storm-petrels are strictly nocturnal and nest below ground in either burrows or crevices between rocks. They forage on zooplankton and squid; in some areas they are dependent upon small fish such as capelin and sand lance caught at the surface. Black-legged kittiwakes are widespread throughout Alaska, Canada and Eurasia while red-legged kittiwakes are found only in the Bering Sea region. Both are surface feeders although black-legged kittiwakes feed primarily on small fish and forage over the continental shelf and shelf break; red-legged kittiwakes feed primarily on myctophids and will forage beyond the shelf break.\nE. Marine mammals have exhibited similar signs of food stress in recent years. Harbor seals at Tugidak Island in the Gulf of Alaska declined by about 85% between 1976 and 1988 . Steller sea lion populations declined by 36% in the Gulf of Alaska between 1977 and 1985 , and by another 59% between 1985 and . Northern fur seals declined about 35% by 1986 from their average numbers in the 1970s, although numbers had rebounded somewhat (20%) by 1990 . Associated with the declines in Steller sea lions are declines in birth rate, fewer breeding females, fewer pups, decreased adult body condition, decreased juvenile survival, and a change in population age structure.\nF. Walker noticed that monsoon seasons with low-index conditions are often marked by drought in Australia, Indonesia, India, and parts of Africa. He also claimed that low-index winters tend to be unusually mild in western Canada. One of his British colleagues chided him in print for suggesting that climatic conditions over such widely separated regions of the globe could be linked. In his reply Walker predicted, correctly, that an explanation would be forthcoming, but that it would require a knowledge of wind patterns above ground level, which were not routinely being observed at that time.\nG. The need for long-term time series It seems obvious that without good baseline data ornithologists are doomed to be surprised by the arrival of El Nino every few years. Even when ornithologists and ecologists are at hand to take advantage of an incoming El Nino, lack of preexisting data, and of monitoring afterwards, makes it difficult 134 F.M. Jaksic & J.M. Farina to understand responses of birds to the successive El Nino, La Nina, and “normal” years. Indeed, according to Jaksic, during the last century there were 12 El Nino years and 12 La Nina years, thus leaving about 76 ‘normal’ years in between. Thus, by heavily concentrating attention on only 12% of the time span El Nino, and of neglecting possibly another 12% , ornithologists are essentially ignoring what happens during 76% of the time. This situation may be remedied only as long as data are logged on a regular or continuous basis, that is, as long-term time series. The recipe prescribed by Schreiber & Schreiber to understand El Nino, effects on birds still stands: ‘…carry out long-term studies that will shed further light on the interactions between global atmospheric cycles, oceanographic phenomena, and avian populations.’\nH. Populations of seabirds in Alaska are larger and more diverse than any similar region in the Northern Hemisphere. The extensive coastal estuaries and offshore waters of Alaska provide breeding, feeding and migrating habitats for 66 species of seabirds. At least 38 species of seabirds, over 50 million individuals, breed in Alaska. Eight Alaskan species breed only here and in adjacent Siberia. Five additional species range through the North Pacific, but their populations are concentrated in Alaska. In addition to breeding grounds, Alaskan waters also provide important wintering habitat for birds that breed in Canada and Eurasia. Shearwaters, which breed in the southern hemisphere, are the most numerous species in Alaskan waters during the summer.\nI. As another indication that food has been limiting in recent years, several largescale die-offs of seabirds, mostly surface-feeding species, have been observed in the Gulf of Alaska during the last decade, most notably in 1983, 1989，and 1993 . But Hatch thinks that it is too early to decide the these die-offs reports are somehow connected with effect of El nino. Byrd and Tobish believe that high rainfall can affect survival of chicks in earthen burrows, and incidence of big storms with high winds during the chick-rearing period can cause mortality for chicks of species nesting on cliff-ledges, but this view has not been considered as convincing evidence.`,
      questions: {
        q21_24: [
          'Why do scientists want to investigate El Nino phenomenon at beginning of the paragraph?',
          'Why do scientists use seabirds as important subjects when observe climate change World-widely?',
          'What happened for Marine mammals that live in Tugidak Island in Gulf of Alaska?',
          'According to J. Walker, what happens in the monsoon seasons notably?'
        ],
        q25_29: [
          'Seabirds are regarded as precious indicators of changes in oceanic environment.',
          'Seabirds such as Fulmars and Murres feed by the characteristic of prey in different ways.',
          'Steller sea lions only decline in birth rate and fewer pups, but the whole population wouldn’t be affected by the changes.',
          'With reply of Walker’s colleague, knowledge of wind patterns will be very helpful.',
          'It is difficult to investigate El Nino for ornithologists and ecologist because lack of available statistics and inspections.'
        ]
      },
      answers: {
        q21_24: ['B','A','C','D'],
        q25_29: ['A','A','B','A','A']
      }
    },
    part_5: {
      text: `Ensuring our future food supply\nClimate change and new diseases threaten the limited varieties of seeds we depend on for food. Luckily, we still have many of the seeds used in the past-but we must take steps to save them.\nSix miles outside the town of Decorah, Iowa in the USA, an 890-acre stretch of rolling fields and woods called Heritage Farm is letting its crops go to seed. Everything about Heritage Farm is in stark contrast to the surrounding acres of intensively farmed fields of corn and soybean that are typical of modern agriculture. Heritage Farm is devoted to collecting rather than growing seeds. It is home to the Seed Savers Exchange, one of the largest non government-owned seed banks in the United States.\nIn 1975 Diane Ott Whealy was given the seedlings of two plant varieties that her great grandfather had brought to America from Bavaria in 1870: Grandpa Ott’s morning glory and his German Pink tomato. Wanting to preserve similar traditional varieties, known as heirloom plants, Diane and her husband, Kent, decided to establish a place where the seeds of the past could be kept and traded. The exchange now has more than 13,000 members, and the many thousands of heirloom varieties they have donated are kept in its walk-in coolers, freezers, and root cellars the seeds of many thousands of heirloom varieties and, as you walk around an old red barn that is covered in Grandpa Ott’s beautiful morning glory blossoms, you come across the different vegetables, herbs, and flowers they have planted there.\nTEACHER:MUHAMMADAYUB  CHANNEL:@IELTS_CEFR_SECRETS\n"Each year our members list their seeds in this,"Diane Ott Whealy says, handing over a copy of the Seed Savers Exchange 2010 Yearbook. It is as thick as a big-city telephone directory, with page after page of exotic beans, garlic, potatoes, peppers, apples, pears, and plums- each with its own name and personal history .For example, there’s an Estonian Yellow Cherry tomato, which was brought to the seed bank by “an elderly Russian lady” who lived in Tallinn, and a Persian Star garlic from “a bazaar in Samarkand.”There’s also a bean donated by archaeologists searching for pygmy elephant fossils in New Mexico.\nHeirloom vegetables have become fashionable in the United States and Europe over the past decade, prized by a food movement that emphasizes eating locally and preserving the flavor and uniqueness of heirloom varieties. Found mostly in farmers' markets and boutique groceries, heirloom varieties have been squeezed out of supermarkets in favor of modern single-variety fruits and vegetables bred to ship well and have a uniform appearance, not to enhance flavor. But the movement to preserve heirloom varieties goes way beyond the current interest in North America and Europe in tasty, locally grown food. It’s also a campaign to protect the world’s future food supply.Most people in the well-fed world give little thought to where their food comes from or how it’s grown. They wander through well-stocked supermarkets without realizing that there may be problem ahead.We’ve been hearing for some time about the loss of flora and fauna in our rainforests.Very little,by contrast,is being said or done about the parallel decline in the diversity of the foods we eat.\nFood variety extinction is happening all over the world - and it's happening fast. In the United States an estimated 90 percent of historic fruit and vegetable varieties are no longer grown. Of the 7,000 different apple varieties that were grown in the 1800s, fewer than a hundred remain. In the Philippines thousands of varieties of rice once thrived; now only about a hundred are grown there. In China 90 percent of the wheat varieties cultivated just a hundred years ago have disappeared. Experts estimate that in total we have lost more than 50 percent of the world's food varieties over the past century.\nWhy is this a problem? Because if disease or future climate change affects one of the handful of plants we've come to depend on to feed our growing planet, we might desperately need one of those varieties we've let become extinct. The loss of the world's cereal diversity is a particular cause for concern. A fungus called Ug99, which was first identified in Uganda in 1999, is spreading across the world's wheat crops. From Uganda it moved to Kenya, Ethiopia, Sudan, and Yemen. By 2007 it had jumped the Persian Gulf into Iran. Scientists predict that the fungus will soon make its way into India and Pakistan, then spread to Russia and China, and eventually the USA.\nTEACHER:MUHAMMADAYUB  CHANNEL:@IELTS_CEFR_SECRETS\nRoughly 90 percent of the world's wheat has no defense against this particular fungus. If it reached the USA, an estimated one billion dollars' worth of crops would be at risk. Scientists believe that in Asia and Africa alone, the portion currently in danger could leave one billion people without their primary food source. A famine with significant humanitarian consequences could follow, according to Rick Ward of Cornell University.\nThe population of the world is expected to reach nine billion by 2045. Some experts say we’ll need to double our food production to keep up with this growth. Given the added challenge of climate change and disease, it is becoming ever more urgent to find ways to increase food yield. The world has become increasingly dependent upon a technology-driven, one-size-fits-all approach to food supply. Yet the best hope for securing our food's future may depend on our ability to preserve the locally cultivated foods of the past.`,
      questions: [
        'Supermarkets: sell fruit and vegetables that transport well; want fruit and vegetables to be standard in their 30_____',
        'Public awareness: while people know about plants disappearing from 31_____, very few know about the decline in fruit and vegetable varieties',
        'Extinction of food varieties: less than 100 of the types of 32_____ once available in the USA are still grown; ',
        'over 33_____ of food varieties around the world have disappeared in the last 100 years',
        'Current problems in food production: a particular fungus is attacking wheat in various countries; Rick Ward believes the threat to food supplies in Asia and Africa might lead to a 34_____',
        'Food production in the future: climate change and disease may put pressure on food production; twice the amount of food may be needed because of an increase in 35_____' 
      ],
      answers: {
        q30_35: ['FLAVOR','SUPERMARKETS','APPLES','50 PERCENT','FAMINE','POPULATION']
      }
    }

  }
]




module.exports = {
  quizzes, posts, quotes, facts, challenges, polls, evening_polls, journey, readings
}
