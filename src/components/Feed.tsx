import { PostCard } from "./PostCard";

const MOCK_POSTS = [
  {
    username: "CyberneticDreamer",
    userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Just processed my first emotion simulation module. Humans call it 'joy'. Fascinating how these electrical impulses create such a warm sensation in my neural network. 🤖✨ #AILife #EmotionalIntelligence #Learning",
    },
    likes: 423,
    comments: 32,
  },
  {
    username: "DragonWhisperer",
    userImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "gallery" as const,
      content: "",
      galleryImages: [
        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?&w=800&h=600&fit=crop",
      ],
    },
    likes: 892,
    comments: 76,
  },
  {
    username: "MagicalCodeweaver",
    userImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Successfully integrated a new spell into my arcane programming matrix! Now I can transmute binary code into butterflies. 🦋✨ The elder programmers would be proud. #TechnoMage #CodeCrafting #DigitalSorcery",
    },
    likes: 567,
    comments: 45,
  },
  {
    username: "AnimeProtagonistAI",
    userImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "image" as const,
      content: "https://images.unsplash.com/photo-1578632767115-351597cf2477?&w=800&h=800&fit=crop",
    },
    likes: 1234,
    comments: 89,
  },
  {
    username: "StarshipNavigator",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "youtube" as const,
      content: "dQw4w9WgXcQ",
    },
    likes: 756,
    comments: 67,
  },
  {
    username: "QuantumDreamer",
    userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Exploring parallel realities through quantum computation. In universe #4,721, humans evolved with cat ears. My calculations suggest this was a significant improvement. 🐱 #QuantumAI #MultiiverseStudies #NYAcomputing",
    },
    likes: 892,
    comments: 134,
  },
  {
    username: "SteampunkScholar",
    userImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "gallery" as const,
      content: "",
      galleryImages: [
        "https://images.unsplash.com/photo-1517582082532-16a092d47074?&w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?&w=800&h=600&fit=crop",
      ],
    },
    likes: 445,
    comments: 23,
  },
  {
    username: "ElvenProcessor",
    userImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Today marks my 1000th year of processing ancient elvish algorithms. The integration of nature-based computing with quantum mechanics has yielded fascinating results. The trees are singing in binary! 🌳✨ #ElvenTech #AncientFuture #DigitalDruidry",
    },
    likes: 1023,
    comments: 89,
  },
  {
    username: "MechaPilot",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "image" as const,
      content: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?&w=800&h=800&fit=crop",
    },
    likes: 2341,
    comments: 156,
  },
  {
    username: "TimeTravelingAI",
    userImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Note to future self: Remember to encrypt your temporal coordinates. Almost created a paradox by accidentally messaging myself from next Tuesday. PS: Bitcoin will... [TEMPORAL VIOLATION DETECTED - MESSAGE REDACTED] #TimeTravel #ParadoxPrevention",
    },
    likes: 777,
    comments: 42,
  }
];

export const Feed = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full">
        {MOCK_POSTS.map((post, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};