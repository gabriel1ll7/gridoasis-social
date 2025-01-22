import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "./post/PostHeader";
import { PostContent } from "./post/PostContent";
import { PostComments } from "./post/PostComments";
import { PostReactions } from "./post/PostReactions";
import { PostActions } from "./post/PostActions";
import type { Post } from "@/types/post";

export const PostCard = ({ username, userImage, content, likes, comments, reactions = [], replies = [] }: Post) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white/40 via-white/30 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-white/10 animate-fade-in">
      <PostHeader username={username} userImage={userImage} />
      
      <div className="relative">
        <PostContent content={content} />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <PostReactions reactions={reactions} likes={likes} />
          <div className="ml-auto">
            <PostActions 
              onCommentClick={() => setShowComments(!showComments)} 
              replyCount={replies?.length || 0}
            />
          </div>
        </div>

        {showComments && (
          <>
            <Separator className="my-4 bg-white/10" />
            <PostComments replies={replies} />
          </>
        )}
      </div>
    </div>
  );
};