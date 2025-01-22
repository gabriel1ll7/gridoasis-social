import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "./post/PostHeader";
import { PostContent } from "./post/PostContent";
import { PostComments } from "./post/PostComments";
import { PostReactions } from "./post/PostReactions";
import { PostActions } from "./post/PostActions";

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

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <PostHeader username={username} userImage={userImage} />
      
      <div className="relative">
        <PostContent content={content} />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <PostReactions reactions={reactions} likes={likes} />
          <div className="ml-auto">
            <PostActions onCommentClick={() => setShowComments(!showComments)} />
          </div>
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