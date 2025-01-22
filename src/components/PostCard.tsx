import { useState } from "react";
import { MessageCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "./post/PostHeader";
import { PostContent } from "./post/PostContent";
import { PostReactions } from "./post/PostReactions";
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
}

export const PostCard = ({ username, userImage, content, likes, comments }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <PostHeader username={username} userImage={userImage} />
      
      <div className="relative">
        <PostContent content={content} />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <PostReactions initialLikes={likes} />
          
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