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

  // Take only the first 6 emojis
  const displayedReactions = reactions.slice(0, 6);
  const remainingCount = Math.max(0, reactions.length - 6);

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <PostHeader username={username} userImage={userImage} />
      
      <div className="relative">
        <PostContent content={content} />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex gap-2">
            {displayedReactions.map((emoji, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`px-3 py-1 h-8 text-white/90 hover:bg-white/10 transition-all duration-200 flex items-center gap-1 ${
                  userReactions[emoji] 
                    ? "bg-white/20" 
                    : ""
                }`}
                onClick={() => handleReaction(emoji)}
              >
                <span className="text-lg">{emoji}</span>
                <span className="text-xs text-white/80">{reactionCounts[emoji]}</span>
              </Button>
            ))}
            {remainingCount > 0 && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/80 text-xs">
                +{remainingCount}
              </div>
            )}
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