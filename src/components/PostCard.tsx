import { useState } from "react";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface PostCardProps {
  username: string;
  userImage: string;
  postImage: string;
  content: string;
  likes: number;
  comments: number;
}

export const PostCard = ({ username, userImage, postImage, content, likes, comments }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md animate-fade-in">
      <div className="p-4 flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <img src={userImage} alt={username} className="object-cover" />
        </Avatar>
        <span className="font-medium">{username}</span>
      </div>
      
      <img src={postImage} alt="Post content" className="w-full aspect-square object-cover" />
      
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-2 ${isLiked ? "text-social-primary" : ""}`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
            {likesCount}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-5 w-5" />
            {comments}
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2">
            <Share className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm text-card-foreground">{content}</p>

        {showComments && (
          <>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&fit=crop&crop=face" alt="commenter" className="object-cover" />
                </Avatar>
                <div className="flex-1 bg-muted p-3 rounded-lg">
                  <p className="font-medium text-sm">Alice</p>
                  <p className="text-sm">Amazing shot! 📸✨</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};