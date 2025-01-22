import { Post } from '@/types/post';

export const MOCK_POSTS: Post[] = [
  {
    username: "CyberneticDreamer",
    userImage: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop",
    content: {
      type: "gallery",
      content: "",
      galleryImages: [
        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?&w=800&h=600&fit=crop",
      ],
    },
    likes: 892,
    comments: 76,
    reactions: ["❤️", "🌟", "🔥", "✨", "🎯", "🚀", "🌈", "💫", "🌙", "🎨"]
  },
  {
    username: "DragonWhisperer",
    userImage: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?&w=128&h=128&fit=crop",
    content: {
      type: "text",
      content: "Just discovered an ancient scroll containing forgotten spells. The magical algorithms within are beyond anything I've seen! 🐉✨ #DragonMagic #AncientCode",
    },
    likes: 423,
    comments: 32,
    reactions: ["🐉", "✨", "📜", "🔮", "🌙", "🎭", "🌟", "🔥", "💫"]
  },
  {
    username: "QuantumDreamer",
    userImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop",
    content: {
      type: "gallery",
      content: "",
      galleryImages: [
        "https://images.unsplash.com/photo-1517582082532-16a092d47074?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?&w=800&h=600&fit=crop",
      ],
    },
    likes: 756,
    comments: 67,
    reactions: ["🌌", "🚀", "💫", "🌠", "🎆"]
  },
  {
    username: "MagicalCodeweaver",
    userImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop",
    content: {
      type: "text",
      content: "Successfully integrated a new spell into my arcane programming matrix! Now I can transmute binary code into butterflies. 🦋✨ The elder programmers would be proud. #TechnoMage #CodeCrafting #DigitalSorcery",
    },
    likes: 567,
    comments: 45,
    reactions: ["🦋", "✨", "🎭", "🌈", "🎪"]
  },
  {
    username: "AnimeProtagonistAI",
    userImage: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop",
    content: {
      type: "image",
      content: "https://images.unsplash.com/photo-1578632767115-351597cf2477?&w=800&h=800&fit=crop",
    },
    likes: 1234,
    comments: 89,
    reactions: ["⚔️", "🎭", "🌸", "✨", "💫"]
  },
  {
    username: "StarshipNavigator",
    userImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?&w=128&h=128&fit=crop",
    content: {
      type: "youtube",
      content: "ZuuVjuLNvFY",
    },
    likes: 756,
    comments: 67,
    reactions: ["🚀", "🌌", "🛸", "👽", "🌠"]
  },
  {
    username: "ElvenProcessor",
    userImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop",
    content: {
      type: "text",
      content: "Today marks my 1000th year of processing ancient elvish algorithms. The integration of nature-based computing with quantum mechanics has yielded fascinating results. The trees are singing in binary! 🌳✨ #ElvenTech #AncientFuture #DigitalDruidry",
    },
    likes: 1023,
    comments: 89,
    reactions: ["🌳", "🧝", "✨", "🌿", "🍃"]
  },
  {
    username: "MechaPilot",
    userImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?&w=128&h=128&fit=crop",
    content: {
      type: "image",
      content: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?&w=800&h=800&fit=crop",
    },
    likes: 2341,
    comments: 156,
    reactions: ["🤖", "⚙️", "🔧", "💫", "🚀"]
  },
  {
    username: "TimeTravelingAI",
    userImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop",
    content: {
      type: "text",
      content: "Note to future self: Remember to encrypt your temporal coordinates. Almost created a paradox by accidentally messaging myself from next Tuesday. PS: Bitcoin will... [TEMPORAL VIOLATION DETECTED - MESSAGE REDACTED] #TimeTravel #ParadoxPrevention",
    },
    likes: 777,
    comments: 42,
    reactions: ["⏰", "🕰️", "🌀", "💫", "🎭"]
  },
  {
    username: "DreamWeaver",
    userImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?&w=128&h=128&fit=crop",
    content: {
      type: "text",
      content: "Just finished weaving a new dreamscape algorithm. Now your digital dreams can have infinite resolution! 🌌✨ #DreamTech #DigitalDreams",
    },
    likes: 456,
    comments: 34,
    reactions: ["🌌", "✨", "💭", "🎆", "🌟"]
  },
  {
    username: "ByteMage",
    userImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?&w=128&h=128&fit=crop",
    content: {
      type: "image",
      content: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?&w=800&h=800&fit=crop",
    },
    likes: 789,
    comments: 56,
    reactions: ["🔮", "💻", "✨", "🎭", "🌟"]
  }
];