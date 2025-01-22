import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PostReactionsProps {
  reactions: string[];
  likes: number;
}

export const PostReactions = ({ reactions = [], likes }: PostReactionsProps) => {
  const [reactionCounts, setReactionCounts] = useState<Record<string, number>>(() => {
    const counts = reactions.reduce((acc, emoji) => {
      acc[emoji] = Math.floor(likes / reactions.length);
      return acc;
    }, {} as Record<string, number>);
    return counts;
  });

  const [userReactions, setUserReactions] = useState<Record<string, boolean>>(
    Object.fromEntries(reactions.map(emoji => [emoji, false]))
  );

  const handleReaction = (emoji: string) => {
    setReactionCounts(prev => ({
      ...prev,
      [emoji]: prev[emoji] + (userReactions[emoji] ? -1 : 1)
    }));
    setUserReactions(prev => ({
      ...prev,
      [emoji]: !prev[emoji]
    }));
  };

  // Sort reactions by count and take top 5
  const sortedReactions = [...reactions].sort((a, b) => reactionCounts[b] - reactionCounts[a]);
  const displayedReactions = sortedReactions.slice(0, 5);
  const remainingReactionsCount = sortedReactions.slice(5).length;

  return (
    <div className="flex items-center -space-x-3">
      {displayedReactions.map((emoji, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`relative group w-8 h-8 rounded-full flex items-center justify-center text-white/90 hover:bg-white/10 transition-all duration-200 ${
            userReactions[emoji] 
              ? "bg-white/20" 
              : ""
          }`}
          onClick={() => handleReaction(emoji)}
        >
          <span className="text-lg">{emoji}</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {reactionCounts[emoji]}
          </span>
        </Button>
      ))}
      {remainingReactionsCount > 0 && (
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-xs font-medium ring-1 ring-white/20 hover:bg-white/30"
        >
          +{remainingReactionsCount}
        </Button>
      )}
    </div>
  );
};