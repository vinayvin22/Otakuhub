const mongoose = require('mongoose');
const Article = require('./models/Article');

mongoose.connect('mongodb://127.0.0.1:27017/otakuhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ connection error:'));
db.once('open', async () => {
  console.log('✅ Connected to MongoDB');

  try {
    await Article.deleteMany();
    console.log('✅ Old articles removed');

    const articles = [
      {
        title: 'Naruto',
        description: 'A young ninja with a sealed demon fox within him strives to become the leader of his village, the Hokage, and gain recognition from his peers.',
        episodes: 220,
        rating: 8.2,
        category: 'Action',
        image: 'https://m.media-amazon.com/images/I/810Xo+d8xlL._UF1000,1000_QL80_.jpg',
      },
      {
        title: 'Bleach',
        description: 'Ichigo Kurosaki, a teenager who can see ghosts, gains the powers of a Soul Reaper and takes on the duty of shepherding souls to the afterlife and protecting the living from monstrous Hollows.',
        episodes: 366,
        rating: 8.0,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
      },
      {
        title: 'Death Note',
        description: 'A brilliant but bored high school student, Light Yagami, discovers a supernatural notebook that allows him to kill anyone whose name he writes in it. He begins a crusade to rid the world of criminals, attracting the attention of a mysterious detective known as L.',
        episodes: 37,
        rating: 9.0,
        category: 'Thriller',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
      },
      {
        title: 'One Piece',
        description: 'Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit, sets sail with his diverse crew to find the ultimate treasure, the One Piece, and become the King of the Pirates.',
        episodes: 1100, // Updated to reflect ongoing series as of this date
        rating: 9.1,
        category: 'Adventure',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/76/OnePiece62Cover.png',
      },
      {
        title: 'Attack on Titan',
        description: 'Humanity lives within cities surrounded by enormous walls to protect themselves from gigantic humanoid creatures called Titans. Eren Yeager vows to exterminate the Titans after they breach his hometown and cause personal tragedy.',
        episodes: 94, // Including final parts
        rating: 9.0,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Attack_on_Titan_cover.jpg',
      },
      {
        title: 'Fullmetal Alchemist: Brotherhood',
        description: 'Two young alchemist brothers, Edward and Alphonse Elric, search for the fabled Philosopher’s Stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.',
        episodes: 64,
        rating: 9.1,
        category: 'Adventure',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Fullmetal_Alchemist_Brotherhood_DVD1.jpg',
      },
      {
        title: 'Dragon Ball Z',
        description: 'Goku and his powerful allies defend Earth from an assortment of increasingly stronger alien villains and intergalactic threats, often pushing their limits to achieve new transformations.',
        episodes: 291,
        rating: 8.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Dragon_Ball_Z_DVD1.jpg',
      },
      {
        title: 'My Hero Academia',
        description: 'In a world where superpowers (Quirks) are common, Izuku Midoriya, born without a Quirk, dreams of becoming a hero. He gains the power of the world\'s greatest hero, All Might, and enrolls in a prestigious hero academy.',
        episodes: 138, // Up to current season
        rating: 8.4,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/My_Hero_Academia_Volume_1.png',
      },
      {
        title: 'Demon Slayer: Kimetsu no Yaiba',
        description: 'After his family is brutally murdered and his younger sister Nezuko is turned into a demon, Tanjiro Kamado embarks on a perilous journey to become a Demon Slayer and find a cure for his sister.',
        episodes: 55, // Including movie and latest season
        rating: 8.8,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Demon_Slayer_Key_Visual.png/330px-Demon_Slayer_Key_Visual.png',
      },
      {
        title: 'Jujutsu Kaisen',
        description: 'Yuji Itadori swallows a cursed object to save a friend and becomes a vessel for a powerful curse, Sukuna. He then joins a secret organization of Jujutsu Sorcerers to fight curses and eventually consume all of Sukuna\'s fingers.',
        episodes: 47, // Including movie and Season 2
        rating: 8.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jujutsu_Kaisen_manga_volume_1.jpg/220px-Jujutsu_Kaisen_manga_volume_1.jpg',
      },
      {
        title: 'Spy × Family',
        description: 'A spy named Twilight must build a fake family to infiltrate an elite school and prevent war. He unknowingly adopts a telepathic girl and marries a deadly assassin, creating a family full of secrets.',
        episodes: 37, // Up to current season
        rating: 8.5,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Spy_x_Family_Volume_1.jpg/220px-Spy_x_Family_Volume_1.jpg',
      },
      {
        title: 'Chainsaw Man',
        description: 'Denji, a desperate young man with a chainsaw demon living inside him, becomes a Devil Hunter for the Public Safety Devil Hunters. He fights various devils while grappling with his new life and complex relationships.',
        episodes: 12,
        rating: 8.6,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Chainsaw_Man_Vol._1.jpg/220px-Chainsaw_Man_Vol._1.jpg',
      },
      {
        title: 'Gintama',
        description: 'In an Edo-period Japan conquered by aliens, Gintoki Sakata and his eccentric friends take on odd jobs to make ends meet, often getting involved in hilarious and heartwarming adventures.',
        episodes: 367,
        rating: 9.0,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Gintama_volume_1_cover.jpg/220px-Gintama_volume_1_cover.jpg',
      },
      {
        title: 'Code Geass: Lelouch of the Rebellion',
        description: 'In an alternate timeline, Japan is conquered by the Holy Britannian Empire. A exiled prince, Lelouch Lamperouge, gains a powerful ability called Geass and leads a rebellion against Britannia as the masked vigilante Zero.',
        episodes: 50,
        rating: 8.8,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Code_Geass_R1_DVD_Vol1.jpg/220px-Code_Geass_R1_DVD_Vol1.jpg',
      },
      {
        title: 'Steins;Gate',
        description: 'A group of eccentric students discovers a way to send messages to the past, leading to unforeseen consequences and a desperate struggle to alter their grim future.',
        episodes: 24,
        rating: 9.1,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Steins%3BGate_Volume_1.jpg/220px-Steins%3BGate_Volume_1.jpg',
      },
      {
        title: 'Cowboy Bebop',
        description: 'A ragtag crew of bounty hunters travels the solar system in search of their next score, encountering a mix of dangerous criminals, existential crises, and their own complicated pasts.',
        episodes: 26,
        rating: 8.9,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Cowboy_Bebop_Key_Visual.jpg/220px-Cowboy_Bebop_Key_Visual.jpg',
      },
      {
        title: 'Your Lie in April',
        description: 'A prodigious but traumatized piano player loses his ability to hear music after his mother\'s death. His life begins to change when he meets a spirited violinist who helps him rediscover his passion.',
        episodes: 22,
        rating: 8.6,
        category: 'Romance',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Your_Lie_in_April_Volume_1.jpg/220px-Your_Lie_in_April_Volume_1.jpg',
      },
      {
        title: 'Violet Evergarden',
        description: 'A former child soldier, emotionally scarred by war, becomes an "Auto Memory Doll," writing letters for others to understand human emotions and her past commander\'s last words.',
        episodes: 13,
        rating: 8.8,
        category: 'Drama',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Violet_Evergarden_Key_Visual.png/330px-Violet_Evergarden_Key_Visual.png',
      },
      {
        title: 'Mushoku Tensei: Jobless Reincarnation',
        description: 'A 34-year-old NEET is reincarnated into a fantasy world as Rudeus Greyrat. Retaining his memories, he decides to live his new life to the fullest, mastering magic and facing challenges.',
        episodes: 23, // Split cour, so this is total for S1
        rating: 8.7,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Mushoku_Tensei_Light_Novel_Volume_1.jpg/220px-Mushoku_Tensei_Light_Novel_Volume_1.jpg',
      },
      {
        title: 'Re:Zero - Starting Life in Another World',
        description: 'Subaru Natsuki, an ordinary high school student, is suddenly summoned to a fantasy world. He gains the ability to return by death, which allows him to restart from a save point after dying.',
        episodes: 50, // Including both seasons
        rating: 8.3,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Re_Zero_anime_key_visual.png/330px-Re_Zero_anime_key_visual.png',
      },
      {
        title: 'Haikyuu!!',
        description: 'Shoyo Hinata, a short but determined middle schooler, dreams of becoming a great volleyball player after being inspired by "Little Giant." He joins his high school team and develops powerful teamwork with his rivals.',
        episodes: 85, // Main seasons
        rating: 8.8,
        category: 'Sports',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Haikyuu_key_visual.jpg/330px-Haikyuu_key_visual.jpg',
      },
      {
        title: 'One-Punch Man',
        description: 'Saitama, a hero who can defeat any enemy with a single punch, struggles with the boredom of overwhelming power and the lack of recognition for his heroic deeds.',
        episodes: 24, // Two seasons
        rating: 8.5,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/One-Punch_Man_volume_1_cover.jpg/220px-One-Punch_Man_volume_1_cover.jpg',
      },
      {
        title: 'Tokyo Ghoul',
        description: 'Kaneki Ken, a timid college student, is transformed into a half-ghoul after a deadly encounter. He struggles to adapt to his new existence, caught between the human and ghoul worlds.',
        episodes: 48, // All seasons
        rating: 7.7,
        category: 'Dark Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Tokyo_Ghoul_Volume_1.jpg/220px-Tokyo_Ghoul_Volume_1.jpg',
      },
      {
        title: 'Sword Art Online',
        description: 'Thousands of players get trapped in a virtual reality MMORPG. To escape, they must clear all 100 floors of the floating castle Aincrad, but death in the game means death in the real world.',
        episodes: 97, // Multiple arcs/seasons
        rating: 7.2,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Sword_Art_Online_Vol_1_Cover.jpg/220px-Sword_Art_Online_Vol_1_Cover.jpg',
      },
      {
        title: 'Hunter x Hunter (2011)',
        description: 'Gon Freecss leaves his home to become a Hunter and find his father. He makes new friends, faces dangerous challenges, and uncovers the dark truths of the Hunter world.',
        episodes: 148,
        rating: 9.0,
        category: 'Adventure',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Hunter_x_Hunter_volume_1_cover.jpg/220px-Hunter_x_Hunter_volume_1_cover.jpg',
      },
      {
        title: 'Mob Psycho 100',
        description: 'Shigeo "Mob" Kageyama, a powerful psychic, wants to live a normal life and suppress his emotions, which, if unleashed, could cause catastrophic psychic explosions.',
        episodes: 37, // 3 seasons
        rating: 8.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Mob_Psycho_100_Volume_1.jpg/220px-Mob_Psycho_100_Volume_1.jpg',
      },
      {
        title: 'Fairy Tail',
        description: 'Lucy Heartfilia, a celestial wizard, joins the chaotic but loving Fairy Tail guild and embarks on countless adventures with her fire wizard friend Natsu Dragneel and their companions.',
        episodes: 328,
        rating: 7.8,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Fairy_Tail_volume_1.jpeg/220px-Fairy_Tail_volume_1.jpeg',
      },
      {
        title: 'Erased (Boku dake ga Inai Machi)',
        description: 'Satoru Fujinuma possesses an ability called "Revival," sending him back in time just before life-threatening incidents. One day, he\'s sent 18 years into the past to prevent a series of murders.',
        episodes: 12,
        rating: 8.3,
        category: 'Mystery',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Boku_dake_ga_Inai_Machi_cover_art.jpg/220px-Boku_dake_ga_Inai_Machi_cover_art.jpg',
      },
      {
        title: 'Dr. Stone',
        description: 'After a mysterious light turns all of humanity to stone, science genius Senku Ishigami awakens thousands of years later and embarks on a mission to rebuild civilization using the power of science.',
        episodes: 45, // 3 seasons + specials
        rating: 8.3,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dr._Stone_Volume_1.jpg/220px-Dr._Stone_Volume_1.jpg',
      },
      {
        title: 'Konosuba: God\'s Blessing on This Wonderful World!',
        description: 'Kazuma Satou, a shut-in gamer, dies an absurd death and is reincarnated into a fantasy world with a useless goddess, a magic-obsessed explosion maniac, and an unkillable crusader.',
        episodes: 20, // 2 seasons + movie
        rating: 8.1,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/KonoSuba_Season_1_key_visual.jpg/330px-KonoSuba_Season_1_key_visual.jpg',
      },
      {
        title: 'Rising of the Shield Hero',
        description: 'Naofumi Iwatani is summoned to another world as one of four heroes. Betrayed and scorned, he must rise above his reputation as the "Shield Hero" to protect the world from waves of catastrophe.',
        episodes: 38, // 3 seasons
        rating: 7.9,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg/220px-The_Rising_of_the_Shield_Hero_light_novel_vol_1.jpg',
      },
      {
        title: 'Assassination Classroom',
        description: 'The students of Class 3-E are given a seemingly impossible task: assassinate their powerful alien teacher, Koro-sensei, before he destroys the Earth.',
        episodes: 47, // 2 seasons
        rating: 8.1,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Assassination_Classroom_manga_volume_1_cover.jpg/220px-Assassination_Classroom_manga_volume_1_cover.jpg',
      },
      {
        title: 'No Game No Life',
        description: 'Two hikikomori step-siblings, Sora and Shiro, who are undefeated gamers, are summoned to a fantasy world where all conflicts are decided by games.',
        episodes: 12,
        rating: 8.0,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/No_Game_No_Life_anime_key_visual.jpg/330px-No_Game_No_Life_anime_key_visual.jpg',
      },
      {
        title: 'Toradora!',
        description: 'A romantic comedy about Ryuuji Takasu, a kind boy with intimidating eyes, and Taiga Aisaka, a small but fierce girl, who team up to help each other get closer to their respective crushes.',
        episodes: 25,
        rating: 8.2,
        category: 'Romance',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Toradora_vol_1.png/220px-Toradora_vol_1.png',
      },
      {
        title: 'Mob Psycho 100',
        description: 'Shigeo "Mob" Kageyama, a powerful psychic, wants to live a normal life and suppress his emotions, which, if unleashed, could cause catastrophic psychic explosions.',
        episodes: 37, // 3 seasons
        rating: 8.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Mob_Psycho_100_Volume_1.jpg/220px-Mob_Psycho_100_Volume_1.jpg',
      },
      {
        title: 'Overlord',
        description: 'A normal player in a popular VRMMORPG finds himself trapped in the game as his character, the powerful lich Ainz Ooal Gown, when the servers shut down. He decides to conquer the world.',
        episodes: 52, // 4 seasons
        rating: 7.9,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Overlord_light_novel_volume_1.jpg/220px-Overlord_light_novel_volume_1.jpg',
      },
      {
        title: 'Re:ZERO -Starting Life in Another World-',
        description: 'Subaru Natsuki, an ordinary high school student, is suddenly summoned to a fantasy world. He gains the ability to return by death, which allows him to restart from a save point after dying.',
        episodes: 50, // Including both seasons
        rating: 8.3,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Re_Zero_anime_key_visual.png/330px-Re_Zero_anime_key_visual.png',
      },
      {
        title: 'Tengen Toppa Gurren Lagann',
        description: 'In a dystopian future where humans live underground, Simon and Kamina discover a mysterious robot and fight to reach the surface, leading a rebellion against oppressive forces.',
        episodes: 27,
        rating: 8.7,
        category: 'Mecha',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Tengen_Toppa_Gurren_Lagann_Key_Visual.jpg/330px-Tengen_Toppa_Gurren_Lagann_Key_Visual.jpg',
      },
      {
        title: 'Ergo Proxy',
        description: 'In a post-apocalyptic domed city, a female inspector investigates a series of murders involving rogue androids and uncovers a conspiracy surrounding humanoid beings called "Proxies."',
        episodes: 23,
        rating: 7.9,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Ergo_Proxy_Volume_1_Cover.jpg/220px-Ergo_Proxy_Volume_1_Cover.jpg',
      },
      {
        title: 'Vinland Saga',
        description: 'Thorfinn, a young Viking warrior, seeks revenge against the mercenary leader Askeladd, who murdered his father. He joins Askeladd\'s crew to challenge him to a duel, becoming embroiled in battles and political intrigue.',
        episodes: 48, // 2 seasons
        rating: 8.8,
        category: 'Historical',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Vinland_Saga_Volume_1.jpg/220px-Vinland_Saga_Volume_1.jpg',
      },
      {
        title: 'Psycho-Pass',
        description: 'In a futuristic Japan where a system called the Sibyl System can measure a person\'s criminal intent, Akane Tsunemori joins the Public Safety Bureau as an Inspector, grappling with the morality of enforcing justice.',
        episodes: 33, // 3 seasons + movie
        rating: 8.2,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Psycho-Pass_Volume_1.jpg/220px-Psycho-Pass_Volume_1.jpg',
      },
      {
        title: 'Demon Slayer: Kimetsu no Yaiba',
        description: 'After his family is brutally murdered and his younger sister Nezuko is turned into a demon, Tanjiro Kamado embarks on a perilous journey to become a Demon Slayer and find a cure for his sister.',
        episodes: 55, // Including movie and latest season
        rating: 8.8,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Demon_Slayer_Key_Visual.png/330px-Demon_Slayer_Key_Visual.png',
      },
      {
        title: 'Black Clover',
        description: 'Asta, a young orphan born without magic in a world where everyone has it, aims to become the Wizard King. He acquires a mysterious five-leaf clover grimoire and a unique anti-magic ability.',
        episodes: 170,
        rating: 7.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Black_Clover_Volume_1.jpg/220px-Black_Clover_Volume_1.jpg',
      },
      {
        title: 'Bungo Stray Dogs',
        description: 'Atsushi Nakajima, after being kicked out of his orphanage, encounters the eccentric members of the Armed Detective Agency, a group of individuals with supernatural abilities who solve crimes and handle dangerous cases.',
        episodes: 61, // Multiple seasons
        rating: 7.9,
        category: 'Mystery',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Bungo_Stray_Dogs_Volume_1.jpg/220px-Bungo_Stray_Dogs_Volume_1.jpg',
      },
      {
        title: 'Parasyte: The Maxim',
        description: 'Shinichi Izumi, a high school student, finds his right hand taken over by a sentient alien parasite named Migi. They form an uneasy alliance to survive against other hostile parasites.',
        episodes: 24,
        rating: 8.4,
        category: 'Horror',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Parasyte_The_Maxim_Volume_1_Cover.jpg/220px-Parasyte_The_Maxim_Volume_1_Cover.jpg',
      },
      {
        title: 'Dr. Stone',
        description: 'After a mysterious light turns all of humanity to stone, science genius Senku Ishigami awakens thousands of years later and embarks on a mission to rebuild civilization using the power of science.',
        episodes: 45, // 3 seasons + specials
        rating: 8.3,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dr._Stone_Volume_1.jpg/220px-Dr._Stone_Volume_1.jpg',
      },
      {
        title: 'Konosuba: God\'s Blessing on This Wonderful World!',
        description: 'Kazuma Satou, a shut-in gamer, dies an absurd death and is reincarnated into a fantasy world with a useless goddess, a magic-obsessed explosion maniac, and an unkillable crusader.',
        episodes: 20, // 2 seasons + movie
        rating: 8.1,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/KonoSuba_Season_1_key_visual.jpg/330px-KonoSuba_Season_1_key_visual.jpg',
      },
      {
        title: 'The Seven Deadly Sins',
        description: 'Elizabeth Liones, the third princess of Britannia, searches for the Seven Deadly Sins, a group of powerful knights disbanded after being framed for treason, to reclaim her kingdom from the Holy Knights.',
        episodes: 100, // Multiple seasons + movies
        rating: 7.6,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/The_Seven_Deadly_Sins_volume_1.jpg/220px-The_Seven_Deadly_Sins_volume_1.jpg',
      },
      {
        title: 'Fire Force',
        description: 'In a world where spontaneous human combustion turns people into fiery demons called Infernals, Shinra Kusakabe, a pyrokinetic, joins a special fire brigade to save lives and uncover the truth behind his family\'s death.',
        episodes: 48, // 2 seasons
        rating: 7.6,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Fire_Force_Volume_1.jpg/220px-Fire_Force_Volume_1.jpg',
      },
      {
        title: 'Assassination Classroom',
        description: 'The students of Class 3-E are given a seemingly impossible task: assassinate their powerful alien teacher, Koro-sensei, before he destroys the Earth.',
        episodes: 47, // 2 seasons
        rating: 8.1,
        category: 'Comedy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Assassination_Classroom_manga_volume_1_cover.jpg/220px-Assassination_Classroom_manga_volume_1_cover.jpg',
      },
      {
        title: 'That Time I Got Reincarnated as a Slime',
        description: 'A 37-year-old corporate worker is stabbed and reincarnated as a slime monster in a fantasy world. He quickly gains immense powers and builds a new nation for monsters.',
        episodes: 48, // 2 seasons + movie + OVAs
        rating: 8.2,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1.jpg/220px-That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1.jpg',
      },
      {
        title: 'JoJo\'s Bizarre Adventure',
        description: 'The story of the Joestar family, a lineage of individuals with supernatural abilities, as they battle various supernatural threats across generations and different settings.',
        episodes: 190, // All parts animated so far
        rating: 8.5,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/JoJo_no_Kimyo_na_Boken_Vol_1.jpg/220px-JoJo_no_Kimyo_na_Boken_Vol_1.jpg',
      },
      {
        title: 'Vinland Saga',
        description: 'Thorfinn, a young Viking warrior, seeks revenge against the mercenary leader Askeladd, who murdered his father. He joins Askeladd\'s crew to challenge him to a duel, becoming embroiled in battles and political intrigue.',
        episodes: 48, // 2 seasons
        rating: 8.8,
        category: 'Historical',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Vinland_Saga_Volume_1.jpg/220px-Vinland_Saga_Volume_1.jpg',
      },
      {
        title: 'Mushoku Tensei: Jobless Reincarnation',
        description: 'A 34-year-old NEET is reincarnated into a fantasy world as Rudeus Greyrat. Retaining his memories, he decides to live his new life to the fullest, mastering magic and facing challenges.',
        episodes: 23, // Split cour, so this is total for S1
        rating: 8.7,
        category: 'Fantasy',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Mushoku_Tensei_Light_Novel_Volume_1.jpg/220px-Mushoku_Tensei_Light_Novel_Volume_1.jpg',
      },
      {
        title: 'Food Wars! Shokugeki no Soma',
        description: 'Soma Yukihira aims to surpass his father as a chef and enrolls in Totsuki Culinary Academy, an elite cooking school where intense food competitions decide students\' fates.',
        episodes: 86, // 5 seasons
        rating: 8.1,
        category: 'Slice of Life',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Food_Wars_Volume_1.jpg/220px-Food_Wars_Volume_1.jpg',
      },
      {
        title: 'Dr. Stone',
        description: 'After a mysterious light turns all of humanity to stone, science genius Senku Ishigami awakens thousands of years later and embarks on a mission to rebuild civilization using the power of science.',
        episodes: 45, // 3 seasons + specials
        rating: 8.3,
        category: 'Sci-Fi',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dr._Stone_Volume_1.jpg/220px-Dr._Stone_Volume_1.jpg',
      },
      {
        title: 'Jujutsu Kaisen',
        description: 'Yuji Itadori swallows a cursed object to save a friend and becomes a vessel for a powerful curse, Sukuna. He then joins a secret organization of Jujutsu Sorcerers to fight curses and eventually consume all of Sukuna\'s fingers.',
        episodes: 47, // Including movie and Season 2
        rating: 8.7,
        category: 'Action',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Jujutsu_Kaisen_manga_volume_1.jpg/220px-Jujutsu_Kaisen_manga_volume_1.jpg',
      },
    ];

    await Article.insertMany(articles);
    console.log(`✅ Successfully added ${articles.length} articles`);
  } catch (error) {
    console.error('❌ Error during database operations:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔗 Disconnected from MongoDB');
  }
});