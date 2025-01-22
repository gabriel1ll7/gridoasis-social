import { useState } from "react";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const renderContent = (content: PostContent) => {
  switch (content.type) {
    case 'text':
      return <p className="text-sm text-card-foreground">{content.content}</p>;
    
    case 'image':
      return (
        <img 
          src={content.content} 
          alt="Post content" 
          className="w-full h-auto object-cover"
        />
      );
    
    case 'gallery':
      return (
        <Carousel className="w-full">
          <CarouselContent>
            {content.galleryImages?.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    
    case 'video':
      return (
        <video 
          controls 
          className="w-full h-auto"
          src={content.content}
        />
      );
    
    case 'youtube':
      return (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${content.content}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    
    default:
      return null;
  }
};

export const PostCard = ({ username, userImage, content, likes, comments }: PostCardProps) => {
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
      
      <div className="relative">
        {renderContent(content)}
      </div>
      
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