import { useState } from "react";
import { Heart, ThumbsUp, Laugh, Star, Angry } from "lucide-react";
import { Button } from "@/components/ui/button";

type Reaction = {
  emoji: JSX.Element;
  count: number;
  active: boolean;
};

interface PostReactionsProps {
  initialLikes: number;
}

export const PostReactions = ({ initialLikes }: PostReactionsProps) => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { emoji: <Heart className="h-4 w-4 text-red-500" />, count: initialLikes, active: false },
    { emoji: <ThumbsUp className="h-4 w-4 text-blue-500" />, count: Math.floor(initialLikes * 0.7), active: false },
    { emoji: <Laugh className="h-4 w-4 text-yellow-500" />, count: Math.floor(initialLikes * 0.3), active: false },
    { emoji: <Star className="h-4 w-4 text-yellow-400" />, count: Math.floor(initialLikes * 0.2), active: false },
    { emoji: <Angry className="h-4 w-4 text-red-600" />, count: Math.floor(initialLikes * 0.1), active: false },
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
  );
};