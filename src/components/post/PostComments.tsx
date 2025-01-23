import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Reply } from "@/types/post";

interface PostCommentsProps {
  replies?: Reply[];
  onReplyClick: () => void;
}

export const PostComments = ({ replies = [], onReplyClick }: PostCommentsProps) => {
  const hasMoreReplies = replies.length > 1;
  const visibleReplies = replies.slice(0, 1);
  const remainingReplies = replies.length - 1;

  return (
    <div className="space-y-4">
      {visibleReplies.map((reply, index) => (
        <div key={index} className="flex items-start gap-3">
          <Avatar className="h-12 w-12">
            <img 
              src={reply.userImage}
              alt={reply.username} 
              className="object-cover" 
            />
          </Avatar>
          <div className="flex-1 bg-white/5 backdrop-blur-sm p-3 rounded-lg">
            <p className="font-medium text-sm bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
              {reply.username}
            </p>
            <p className="text-sm text-white/80">{reply.content}</p>
          </div>
        </div>
      ))}
      
      {hasMoreReplies && (
        <p className="text-sm text-social-primary font-medium cursor-pointer hover:text-social-secondary transition-colors">
          See more ({remainingReplies} {remainingReplies === 1 ? 'reply' : 'replies'})
        </p>
      )}
      
      {replies.length === 0 && (
        <p className="text-sm text-white/60 text-center">No comments yet</p>
      )}

      <Button
        variant="ghost"
        size="sm"
        className="w-full mt-2 text-muted-foreground hover:bg-white/10"
        onClick={onReplyClick}
      >
        Write a reply...
      </Button>
    </div>
  );
};