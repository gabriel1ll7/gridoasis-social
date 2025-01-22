import { useState } from "react";
import { MessageCircle, Share, Heart, ThumbsUp, Laugh, Angry, Star } from "lucide-react";
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

type Reaction = {
  emoji: JSX.Element;
  count: number;
  active: boolean;
};

const renderContent = (content: PostContent) => {
  switch (content.type) {
    case 'text':
      return <p className="text-sm text-card-foreground p-6">{content.content}</p>;
    
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
  const [showComments, setShowComments] = useState(false);
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: <Heart className="h-4 w-4 text-red-500" />, count: likes, active: false },
    { emoji: <ThumbsUp className="h-4 w-4 text-blue-500" />, count: Math.floor(likes * 0.7), active: false },
    { emoji: <Laugh className="h-4 w-4 text-yellow-500" />, count: Math.floor(likes * 0.3), active: false },
    { emoji: <Star className="h-4 w-4 text-yellow-400" />, count: Math.floor(likes * 0.2), active: false },
    { emoji: <Angry className="h-4 w-4 text-red-600" />, count: Math.floor(likes * 0.1), active: false },
  ]);

  const handleReaction = (index: number) => {
    setReactions(prev => prev.map((reaction, i) => {
      if (i === index) {
        return { ...reaction, count: reaction.active ? reaction.count - 1 : reaction.count + 1, active: !reaction.active };
      }
      return reaction;
    }));
  };

  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <div className="p-4 flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <img src={userImage} alt={username} className="object-cover" />
        </Avatar>
        <span className="font-medium bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
          {username}
        </span>
      </div>
      
      <div className="relative">
        {renderContent(content)}
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex -space-x-1 hover:space-x-1 transition-all duration-200">
            {reactions.map((reaction, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`relative group px-3 py-1 h-8 text-white/90 hover:bg-white/10 transition-all duration-200 ${
                  reaction.active 
                    ? "bg-white/20" 
                    : ""
                }`}
                onClick={() => handleReaction(index)}
              >
                {reaction.emoji}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {reaction.count}
                </span>
              </Button>
            ))}
          </div>
          
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
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-12 w-12">
                  <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop" alt="commenter" className="object-cover" />
                </Avatar>
                <div className="flex-1 bg-white/5 backdrop-blur-sm p-3 rounded-lg">
                  <p className="font-medium text-sm bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
                    QuantumAI
                  </p>
                  <p className="text-sm text-white/80">Fascinating perspective on the multiverse theory! 🌌✨</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
