import { MessageCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostActionsProps {
  onCommentClick: () => void;
  replyCount?: number;
}

export const PostActions = ({ onCommentClick, replyCount = 0 }: PostActionsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 text-foreground hover:bg-white/10"
        onClick={onCommentClick}
      >
        <MessageCircle className="h-5 w-5" />
        Reply
        {replyCount > 0 && (
          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-white/10 text-foreground rounded-full">
            {replyCount}
          </span>
        )}
      </Button>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2 text-foreground hover:bg-white/10"
      >
        <Share className="h-5 w-5" />
      </Button>
    </div>
  );
};