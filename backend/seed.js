const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Article = require('./models/Article');
const Category = require('./models/Category');

dotenv.config();

const articles = [
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "Tanjiro Kamado, a young boy whose family is killed by a demon, joins the Demon Slayer Corps.",
    image: "https://cdn.pixabay.com/photo/2023/07/22/09/04/anime-8142954_1280.jpg",
    category: "Action",
    author: "Koyoharu Gotouge"
  },
  {
    title: "Jujutsu Kaisen",
    description: "Yuji Itadori joins a secret organization of Jujutsu Sorcerers to kill a powerful Curse named Ryomen Sukuna.",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop",
    category: "Action",
    author: "Gege Akutami"
  },
  {
    title: "Attack on Titan",
    description: "In a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids.",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?w=800&auto=format&fit=crop",
    category: "Drama",
    author: "Hajime Isayama"
  },
  {
    title: "One Piece",
    description: "Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate King.",
    image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&auto=format&fit=crop",
    category: "Adventure",
    author: "Eiichiro Oda"
  },
  {
    title: "Naruto: Shippuden",
    description: "Naruto Uzumaki, an adolescent ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
    image: "https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=800&auto=format&fit=crop",
    category: "Adventure",
    author: "Masashi Kishimoto"
  },
  {
    title: "Spy x Family",
    description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own.",
    image: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=800&auto=format&fit=crop",
    category: "Comedy",
    author: "Tatsuya Endo"
  },
  {
    title: "The Rising of the Shield Hero",
    description: "Iwatani Naofumi, a Japanese youth, was summoned into a parallel world along with three other young men to become the world's Cardinal Heroes.",
    image: "https://images.unsplash.com/photo-1578632738980-23055509b373?w=800&auto=format&fit=crop",
    category: "Fantasy",
    author: "Aneko Yusagi"
  },
  {
    title: "My Hero Academia",
    description: "In a world where most of the human population has superpowers, Izuku Midoriya a boy born without superpowers.",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&auto=format&fit=crop",
    category: "Action",
    author: "Kohei Horikoshi"
  }
];

const categories = [
  { name: "Action" },
  { name: "Adventure" },
  { name: "Comedy" },
  { name: "Drama" },
  { name: "Fantasy" }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Article.deleteMany({});
    await Category.deleteMany({});
    await Article.insertMany(articles);
    await Category.insertMany(categories);
    console.log("Data Seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
