import { useState } from "react";
import { MessageCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "./post/PostHeader";
import { PostContent } from "./post/PostContent";
import { PostComments } from "./post/PostComments";

type PostContent = {
  type: 'text' | 'image' | 'gallery' | 'video' | 'youtube';
  content: string;
  galleryImages?: string[];
};

interface PostCardProps {
  username: string;
  userImage: string;
  content: PostContent;
  likes: number;
  comments: number;
  reactions?: string[];
}

export const PostCard = ({ username, userImage, content, likes, comments, reactions = [] }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const [reactionCounts, setReactionCounts] = useState<Record<string, number>>(
    Object.fromEntries(reactions.map(emoji => [emoji, Math.floor(likes / reactions.length)]))
  );
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>(
    Object.fromEntries(reactions.map(emoji => [emoji, false]))
  );

  const handleReaction = (emoji: string) => {
    setReactionCounts(prev => ({
      ...prev,
      [emoji]: prev[emoji] + (userReactions[emoji] ? -1 : 1)
    }));
    setUserReactions(prev => ({
      ...prev,
      [emoji]: !prev[emoji]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <PostHeader username={username} userImage={userImage} />
      
      <div className="relative">
        <PostContent content={content} />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex -space-x-1 hover:space-x-1 transition-all duration-200">
            {reactions.map((emoji, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`relative group px-3 py-1 h-8 text-white/90 hover:bg-white/10 transition-all duration-200 ${
                  userReactions[emoji] 
                    ? "bg-white/20" 
                    : ""
                }`}
                onClick={() => handleReaction(emoji)}
              >
                <span className="text-lg">{emoji}</span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {reactionCounts[emoji]}
                </span>
              </Button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 ml-auto text-white/90 hover:bg-white/10"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="h-5 w-5" />
            Reply
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 text-white/90 hover:bg-white/10"
          >
            <Share className="h-5 w-5" />
          </Button>
        </div>

        {showComments && (
          <>
            <Separator className="my-4 bg-white/10" />
            <PostComments />
          </>
        )}
      </div>
    </div>
  );
};