/**
 * PostCard Component
 * 
 * A card component that displays a social media post with:
 * - User information header
 * - Post content (text, image, gallery, etc.)
 * - Reactions and emoji interactions
 * - Comments section with reply functionality
 * 
 * Features:
 * - Expandable comments section
 * - Reply input with emoji picker
 * - Real-time reaction updates
 * - Glass morphism design
 */
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { PostHeader } from "./post/PostHeader";
import { PostContent } from "./post/PostContent";
import { PostComments } from "./post/PostComments";
import { PostReactions } from "./post/PostReactions";
import { PostActions } from "./post/PostActions";
import { ReplyInput } from "./post/ReplyInput";
import type { Post, Reply } from "@/types/post";

export const PostCard = ({ username, userImage, content, likes, comments, reactions = [], replies = [] }: Post) => {
  // State for managing comments visibility and replies
  const [showComments, setShowComments] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [localReplies, setLocalReplies] = useState<Reply[]>(replies);

  // Handler for adding new replies
  const handleReply = (content: string) => {
    const newReply: Reply = {
      username: "You",
      userImage: "https://github.com/shadcn.png",
      content
    };
    setLocalReplies([...localReplies, newReply]);
    setShowReplyInput(false);
  };

  return (
    <div className="space-y-2 animate-fade-in">
      {/* Main post card with glass morphism effect */}
      <div className="bg-gradient-to-br from-white/40 via-white/30 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-white/10">
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
                replyCount={localReplies?.length || 0}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comments section - conditionally rendered */}
      {showComments && (
        <div className="bg-gradient-to-br from-white/40 via-white/30 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 dark:border-white/10">
          <div className="p-4">
            {showReplyInput ? (
              <ReplyInput onSubmit={handleReply} />
            ) : (
              <PostComments 
                replies={localReplies} 
                onReplyClick={() => setShowReplyInput(true)} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};