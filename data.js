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
          {
            question: 'Why do scientists want to investigate El Nino phenomenon at beginning of the paragraph?',
            options: [
              "A. To learn patterns of creatures that live in marine environment.",
              "B. Assist us to map out because it disturbs normal cycle of for wildlife and human.",
              "C. It has profound theory for both the academic side and practical side.",
              "D. Tropical Pacific Ocean is where El Nino affects most."
            ]
          },
          {
            question: 'Why do scientists use seabirds as important subjects when observe climate change World-widely?',
            options: [
              "A. Seabirds affected by prey changes according to the temperature and ice.",
              "B. Its size is large enough to be observed.",
              "C. El Nino affects seabirds more than other sea creatures.",
              "D. North America is situated in the area where El Nino affects most."
            ]
          },
          {
            question: 'What happened for Marine mammals that live in Tugidak Island in Gulf of Alaska?',
            options: [
              "A. Number of seals declined about 85% from the mid of 20th century.",
              "B. Number of Steller sea lion declined while Number seals grew.",
              "C. Birth rate and breeding females declined on the Tugidak Island.",
              "D. The situation of mammals on the island is not that worse than we expected."
            ]
          },
          {
            question: 'According to J. Walker, what happens in the monsoon seasons notably?',
            options: [
              "A. Flood and drought seriously damage almost everywhere of the planet.",
              "B. Walker’s prediction would soon come true.",
              "C. Drought only affects some parts of Africa.",
              "D. Drought will affect somewhere of the earth such as Australia and Indonesia"
            ]
          }
        ],
        q25_29: [
          {
            question: "Seabirds are regarded as precious indicators of changes in oceanic environment.",
            options: ["A) True", "B) False", "C) Not Given"]
          },
          {
            question: "Seabirds such as Fulmars and Murres feed by the characteristic of prey in different ways.",
            options: ["A) True", "B) False", "C) Not Given"]
          },
          {
            question: "Steller sea lions only decline in birth rate and fewer pups, but the whole population wouldn’t be affected by the changes.",
            options: ["A) True", "B) False", "C) Not Given"]
          },
          {
            question: "With reply of Walker’s colleague, knowledge of wind patterns will be very helpful.",
            options: ["A) True", "B) False", "C) Not Given"]
          },
          {
            question: "It is difficult to investigate El Nino for ornithologists and ecologist because lack of available statistics and inspections.",
            options: ["A) True", "B) False", "C) Not Given"]
          }
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
  },
  {
    id: 2,
    part_1: {
      text: `Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh 
leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian 
countries. Tea is also rarely made from the 1 ___ of Camellia taliensis. After 
water, it is the most widely consumed 2 ___ in the world. There are many 
different types of 3 ___; some have a cooling, slightly bitter, and astringent flavor. 
Tea has a stimulating effect in humans primarily due to its caffeine content.
It was popularised as a recreational 4 ___ during the Chinese Tang dynasty, and 
tea drinking subsequently spread to other East Asian countries. In 1567, Russian people 
came in contact with 5 ___ when the Cossack Atamans Petrov and Yalyshev 
visited 6 ___.`,
      answers: ['leaves', 'beverage', 'tea', 'drink', 'tea', 'china']
    },
    part_2: {
      task: `The people below all want to join a sports class. On the next page there are descriptions of eight classes. 
Decide which class would be the most suitable for the following people. For 1-5 write the correct letter A-H.`,
      questions: [
        `Chloe enjoys team sports but doesn't want to play in competitions. She needs a morning 
class. She doesn't have much money and can't afford to buy expensive equipment.`,
        `Mike isn't very fit. He would like to get fitter, but he finds exercise boring. He's looking 
for an evening class that is different every week. He'd also like to see how he is improving 
over time.`,
        `Sofia loves sport but is recovering from a serious injury. She wants to train in the 
afternoon with someone who understands her injury and can give her advice on exercises 
she can do at home.`,
        `Jack is very fit and is planning a challenging 200 km run. He wants to train at least twice a 
week and would like some personal training too. He wants to train indoors and outdoors`,
        `Tara takes sport seriously. She plays hockey ad tennis and wants to improve her skills and 
take part in competitions. She isn't free from Monday to Friday.`
      ],
      options: [
        ['Sport for life', `Weekly sessions in seven different sports, including squash, tennis and basketball. Do 
your favourite sport or try new ones each week. Classes take place on Thursdays 3-4 
p.m. and Sundays 2-3.30 p.m. in Green Park and in the Park Gym. We don't believe in 
winners and losers, just in having fun!`],
        ['Top training', `Our club offers individual training sessions in the gym, with a personal trainer. The 
class is ideal for people who enjoy training alone and are keen to improve their 
fitness, or people who have particular difficulties with their fitness. Classes: every 
morning 9-11 a.m.`],
        ['Active plus!', `This is a great class for people who enjoy playing sport with others in an informal 
way. Choose from a range of sports, including 5-a- side football and hockey. Classes 
are on Saturdays from 9-11 a.m. We provide balls, hockey sticks, etc. and a monthly 
report on how your fitness is improving.`],
        ['Water-cise!', `Have fun and get fit at your local sports centre! Classes every Tuesday and Thursday 
from 6-8 p.m. No two classes are the same! We organize regular competitions and 
also offer individual fitness checks every month, plus the chance to gain progress 
certificates.`],
        ['Fitness for all', `If you're looking for a gentle, low-cost exercise class, Fitness for all offers exercises to 
improve your strength and confidence slowly. Our trainers are qualified to help with 
individual problems and can give you extra ideas to try outside the class. No 
equipment necessary. Classes: every Tuesday from 2 to 4 p.m.`],
        ['Sport for all', `This class is for people who want to take up a sport such as football or tennis for the 
first time. It's a great way to get fit in the fresh air. Classes start with training 
exercises, followed by a game or small tournament. Classes: every Tuesday and 
Thursday, 6–8 p.m. All equipment provided.`],
        ['Rising stars', `We believe sports are for winners! We offer training from professional sports 
coaches to help you become a more successful player. Choose from a range of team 
and racket sports. Players are encouraged to join local and national leagues. Classes: 
every Saturday and Sunday, or book an individual lesson with one of our trainers.`],
        ['Go for it!', `This is a class for people who want to push themselves so they can compete against 
other people or themselves! Training takes place every Tuesday, Thursday and 
Saturday. Classes involve a one-hour run in the park, followed by weight training in 
the gym. Individual coaching and advice on improving fitness at home are also 
available.`]
      ],
      answers: "cdehg"
    },
    part_3: {
      text: `A. This book will provide a detailed examination of the Little Ice Age and other climatic 
shifts, but, before I embark on that, let me provide a historical context. We tend to 
think of climate - as opposed to weather - as something unchanging, yet humanity 
has been at the mercy of climate change for its entire existence, with at least eight 
glacial episodes in the past 730,000 years. Our ancestors adapted to the universal but 
irregular global warming since the end of the last great Ice Age, around 10,000 years 
ago, with dazzling opportunism. They developed strategies for surviving harsh 
drought cycles, decades of heavy rainfall or unaccustomed cold; adopted agriculture 
and stock-raising, which revolutionised human life; and founded the world's first pre - industrial civilisations in Egypt, Mesopotamia and the Americas. But the price of 
sudden climate change, in famine, disease and suffering, was often high.
B. The Little Ice Age lasted from roughly 1300 until the middle of the nineteenth 
century. Only two centuries ago, Europe experienced a cycle of bitterly cold winters; 
mountain glaciers in the Swiss Alps were the lowest in recorded memory, and pack 
ice surrounded Iceland for much of the year. The climatic events of the Little Ice Age 
did more than help shape the modern world. They are the deeply important context 
for the current unprecedented global warming. The Little Ice Age was far from a deep 
freeze, however; rather an irregular seesaw of rapid climatic shifts, few lasting more 
than a quarter-century, driven by complex and still little understood interactions 
between the atmosphere and the ocean. The seesaw brought cycles of intensely cold 
winters and easterly winds, then switched abruptly to years of heavy spring and early 
summer rains, mild winters, and frequent Atlantic storms, or to periods of droughts, 
light northeasterly winds, and summer heat waves.
C. Reconstructing the climate changes of the past is extremely difficult, because 
systematic weather observations began only a few centuries ago, in Europe and 
North America. Records from India and tropical Africa are even more recent. For the 
time before records began, we have only 'proxy records' reconstructed largely from 
tree rings and ice cores, supplemented by a few incomplete written accounts. We 
now have hundreds of tree-ring records from throughout the northern hemisphere, 
and many from south of the equator, too, amplified with a growing body of 
temperature data from ice cores drilled in Antarctica, Greenland, the Peruvian Andes, 
and other locations. We are close to a knowledge of annual summer and winter 
temperature variations over much of the northern hemisphere going back 600 years.
D. This book is a narrative history of climatic shifts during the past ten centuries, and 
some of the ways in which people in Europe adapted to them. Part One describes the 
Medieval Warm Period, roughly 900 to 1200. During these three centuries, Norse 
voyagers from Northern Europe explored northern seas, settled Greenland, and 
visited North America. It was not a time of uniform warmth, for then, as always since 
the Great Ice Age, there were constant shifts in rainfall and temperature. Mean 
European temperatures were about the same as today, perhaps slightly cooler.
E. It is known that the Little Ice Age cooling began in Greenland and the Arctic in about 
1200. As the Arctic ice pack spread southward, Norse voyages to the west were 
rerouted into the open Atlantic, then ended altogether. Storminess increased in the 
North Atlantic and North Sea. Colder, much wetter weather descended on Europe 
between 1315 and 1319, when thousands perished in a continent-wide famine. By 
1400, the weather had become decidedly more unpredictable and stormier, with 
sudden shifts and lower temperatures that culminated in the cold decades of the late 
sixteenth century. Fish were a vital commodity in growing towns and cities, where 
food supplies were a constant concern. Dried cod and herring were already the 
staples of the European fish trade, but changes in water temperatures forced fishing 
fleets to work further offshore. The Basques, Dutch, and English developed the first 
offshore fishing boats adapted to a colder and stormier Atlantic. A gradual 
agricultural revolution in northern Europe stemmed from concerns over food 
supplies at a time of rising populations. The revolution involved intensive commercial 
farming and the growing of animal fodder on land not previously used for crops. The 
increased productivity from farmland made some countries self-sufficient in grain 
and livestock and offered effective protection against famine.
F. Global temperatures began to rise slowly after 1850, with the beginning of the 
Modern Warm Period. There was a vast migration from Europe by land-hungry 
farmers and others, to which the famine caused by the Irish potato blight 
contributed, to North America, Australia, New Zealand, and southern Africa. Millions 
of hectares of forest and woodland fell before the newcomers' axes between 1850 
and 1890, as intensive European farming methods expanded across the world. The 
unprecedented land clearance released vast quantities of carbon dioxide into the 
atmosphere, triggering for the first time humanly caused global warming. 
Temperatures climbed more rapidly in the twentieth century as the use of fossil fuels 
proliferated and greenhouse gas levels continued to soar. The rise has been even 
steeper since the early 1980s. The Little Ice Age has given way to a new climatic 
regime, marked by prolonged and steady warming. At the same time, extreme 
weather events like Category 5 hurricanes are becoming more frequent.`,
      headings: [
        'Predicting climatic changes', 'The relevance of the Little Ice Age today', 'How cities contribute to climate change', 'Human impact on the climate', 'How past climatic conditions can be determined', 'The Medieval Warm Period', 'How agriculture was affected by climate', 'The Modern Warm Period', 'Historical context for climate change'
      ],
      answers: "hbegid"
    },
    part_4: {
      text: `As typically English' as tea at five, "The Changing of the Guard" or inclement weather, 
cricket is a sport that might take a lifetime to understand, never mind appreciate. Matches 
might last anything up to five days, with nothing appearing to happen for hours on end and 
then when it does you will probably either be looking the other way or be fast asleep. 
Never mind that its rules are so complex that you probably need a PhD to comprehend 
them fully. Many Americans might decide it's not really worth the bother.
The precise origins of cricket are highly debatable and there are many theories as to how it 
started. It might have been invented by shepherds or played in churchyards as far back as 
the thirteenth century, although some accounts suggest that it might pre-date this by as 
much as two hundred years. The first source which British historians consider completely 
reliable describes Prince Edward playing something which resembled cricket in 1300, 
although even this account fails to firmly establish the sport's origins. The rules of the 
modern game were not completely developed until the nineteenth century. The first 
organised internationals took place in 1861, with England and Australia commencing what 
soon developed into a fierce, ongoing competitive rivalry. As the rules and regulations of 
the game were being formally established, other countries joined the growing international 
playing community
To attempt to explain the rules of cricket comprehensively in an article of this length would 
be impossible. It could be argued that the basic principles of the game are similar to those 
of baseball, although the game play and rules are very different. Cricket is an outdoor, fairweather sport played mainly in countries belonging to the British Commonwealth, such as 
England, Australia, the West Indies, India, Pakistan and South Africa. The balance of power 
in international cricket tends to swing between these competing nations. At present 
Australia predominate having been virtually unbeatable for the last decade or so and teams 
always face a tough match against them.
Although it might appear to be a sedate, sleepy pastime, cricket has always demanded 
fierce concentration and immense courage. Since becoming fully professional in the 1970's 
standards and training facilities have improved immensely across the game. Cricket is now 
as competitive and technical as any global sport, and who knows, perhaps its popularity 
might yet spread to new, previously unexplored territories.`,
      questions: {
        q21_27: [
          {
            question: 'In the first paragraph the author suggests that.',
            options: [
              'A. cricket is only played in good weather.',
              'B. people understand cricket quickly.',
              'C. people enjoy cricket before understanding it.',
              'D. some foreigners might not take the trouble to understand the game.'
            ]
          },
          {
            question: 'Concerning the start of cricket...',
            options: [
              'A. there is little dispute.',
              'B. it was first played by shepherds in churchyards.',
              'C. it was already in existence by 1300.',
              'D. Prince Edward established the rules.'
            ]
          },
          {
            question: 'England and Australia...',
            options: [
              'A. were the first nations to play official matches.',
              'B. organised world tournaments.',
              'C. finalised the official rules of cricket.',
              'D. played each other annually.'
            ]
          },
          {
            question: "The writer doesn't explain all of the rules of cricket because...",
            options: [
              "A. there isn't enough space in the article.",
              'B. they are in a constant state of change.',
              'C. they are so similar to baseball.',
              "D. he doesn't understand them himself."
            ]
          },
          {
            question: 'The writer says that the current Australian cricket team...',
            options: [
              'A. have better facilities than other teams.',
              'B. are the best team in the world at the moment.',
              'C. are losing their dominant position in the sport.',
              "D. are a team other teams don't like to play."
            ]
          },
          {
            question: 'The process of professionalism...',
            options: [
              'A. has made the sport more popular.',
              'B. has made cricket more difficult to understand.',
              'C. has raised the standard of the sport.',
              'D. has required its participants to be braver.'
            ]
          },
          {
            question: 'Whom is the text aimed at?',
            options: [
              'A. Amateur cricketers.',
              'B. Cricket fans.',
              'C. Newcomers to cricket.',
              "D. People who don't like cricket."
            ]
          }
        ]
      },
      answers: {
        q21_27: ['D', 'C', 'A', 'A', 'B', 'C', 'C']
      }
    },
    part_5:{
      text: `As a result of this technical difficulty, the invention of the lithographic process had little 
impact on posters until the 1860s, when Jules Cheret came up with his 'three-stone 
lithographic process'. This gave artists the opportunity to experiment with a wide spectrum 
of colours. Although the process was difficult, the result was remarkable, with nuances of 
colour impossible in other media even to this day. The ability to mix words and images in 
such an attractive and economical format finally made the lithographic poster a powerful 
innovation. Starting in the 1870s, posters became the main vehicle for advertising prior to 
the magazine era and the dominant means of mass communication in the rapidly growing 
cities of Europe and America. Yet in the streets of Paris, Milan and Berlin, these artistic 
prints were so popular that they were stolen off walls almost as soon as they were hung. 
Cheret, later known as the father of the modern poster', organised the first exhibition of 
posters in 1884 and two years later published the first book on poster art. He quickly took 
advantage of the public interest by arranging for artists to create posters, at a reduced size, 
that were suitable for in-home display. Thanks to Cheret. the poster slowly took hold in 
other countries in the 1890s and came to celebrate each society's unique cultural 
institutions: the cafe in France, the opera and fashion in Italy, festivals in Spain, literature in 
Holland and trade fairs in Germany. The first poster shows were held in Great Britain and 
Italy in 1894, Germany in 1896 and Russia in 1897. The most important poster show ever, 
to many observers, was held in Reims, France, in 1896 and featured an unbelievable 1,690 
posters arranged by country.`,
      questions: [
        `1860s - ivention of 'three-stone lithographic process' combination of both 1............. on coloured posters`,
        `1870s - posters used for advertising and 2............. in Europe`,
        `1884-86 - Cheret's poster 3.............. and book on poster art`,
        `1890s - posters represent 4................ around the world`,
      ],
      answers: {
        q30_35: ['WORDS AND IMAGES','MASS COMMUNICATION','EXHIBITION','UNIQUE CULTURAL INSTITUTIONS']
      }
    }
  }
]




module.exports = {
  quizzes, posts, quotes, facts, challenges, polls, evening_polls, journey, readings
}
