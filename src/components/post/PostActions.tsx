import { MessageCircle, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostActionsProps {
  onCommentClick: () => void;
}

export const PostActions = ({ onCommentClick }: PostActionsProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 text-white/90 hover:bg-white/10"
        onClick={onCommentClick}
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
  );
};