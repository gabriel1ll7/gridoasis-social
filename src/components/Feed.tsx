import { PostCard } from "./PostCard";

const MOCK_POSTS = [
  {
    username: "photography_lover",
    userImage: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "image" as const,
      content: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?&w=800&h=800&fit=crop",
    },
    likes: 234,
    comments: 12,
  },
  {
    username: "tech_enthusiast",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "gallery" as const,
      content: "",
      galleryImages: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?&w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?&w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?&w=800&h=800&fit=crop",
      ],
    },
    likes: 156,
    comments: 8,
  },
  {
    username: "creative_dev",
    userImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "text" as const,
      content: "Just finished working on an amazing new feature! 🚀 The power of creative coding never ceases to amaze me. What's your favorite part about being a developer? #coding #webdev #creativity",
    },
    likes: 342,
    comments: 15,
  },
  {
    username: "video_creator",
    userImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?&w=128&h=128&fit=crop&crop=face",
    content: {
      type: "youtube" as const,
      content: "dQw4w9WgXcQ",
    },
    likes: 892,
    comments: 45,
  },
];

export const Feed = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_POSTS.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};