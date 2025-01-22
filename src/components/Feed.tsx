import { PostCard } from "./PostCard";

const MOCK_POSTS = [
  {
    username: "photography_lover",
    userImage: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&fit=crop&crop=face",
    postImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?&w=800&h=800&fit=crop",
    content: "Just got my hands on this amazing setup! 🚀",
    likes: 234,
    comments: 12,
  },
  {
    username: "tech_enthusiast",
    userImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=128&h=128&fit=crop&crop=face",
    postImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?&w=800&h=800&fit=crop",
    content: "Working on something exciting! 💻",
    likes: 156,
    comments: 8,
  },
  {
    username: "creative_dev",
    userImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?&w=128&h=128&fit=crop&crop=face",
    postImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?&w=800&h=800&fit=crop",
    content: "Code, coffee, and good vibes ☕️",
    likes: 342,
    comments: 15,
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