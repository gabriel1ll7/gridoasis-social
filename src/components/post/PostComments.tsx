import { Avatar } from "@/components/ui/avatar";
import type { Reply } from "@/types/post";

interface PostCommentsProps {
  replies?: Reply[];
}

export const PostComments = ({ replies = [] }: PostCommentsProps) => {
  return (
    <div className="space-y-4">
      {replies.map((reply, index) => (
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
      {replies.length === 0 && (
        <p className="text-sm text-white/60 text-center">No comments yet</p>
      )}
    </div>
  );
};