import { useState, useMemo } from "react";

interface PostReactionsProps {
  reactions: string[];
  likes: number;
}

export const PostReactions = ({ reactions }: PostReactionsProps) => {
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>({});
  
  const { displayedReactions, reactionCounts, remainingReactionsCount, totalRemainingCount } = useMemo(() => {
    const counts = reactions.reduce((counts, emoji) => ({
      ...counts,
      [emoji]: Math.floor(Math.random() * 50) + 1,
    }), {} as Record<string, number>);

    const defaultEmojis = ["👍", "❤️", "😊", "🎉", "👏"];
    const displayed = reactions.length >= 5 
      ? reactions.slice(0, 5) 
      : [...reactions, ...defaultEmojis.slice(reactions.length)].slice(0, 5);
    
    const remaining = reactions.slice(5);
    const remainingCount = remaining.length;
    const totalRemaining = remaining.reduce((sum, emoji) => sum + (counts[emoji] || 0), 0);

    return {
      displayedReactions: displayed,
      reactionCounts: counts,
      remainingReactionsCount: remainingCount,
      totalRemainingCount: totalRemaining
    };
  }, [reactions]);

  const handleReaction = (emoji: string) => {
    setUserReactions(prev => ({
      ...prev,
      [emoji]: !prev[emoji]
    }));
  };

  return (
    <div className="flex items-center gap-[2px]">
      {displayedReactions.map((emoji, index) => (
        <button
          key={index}
          onClick={() => handleReaction(emoji)}
          className={`relative group hover:scale-150 transition-transform duration-200 ${
            userReactions[emoji] ? "scale-110" : ""
          }`}
        >
          <span className="text-lg">{emoji}</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {reactionCounts[emoji] || 0}
          </span>
        </button>
      ))}
      {remainingReactionsCount > 0 && (
        <button className="relative group text-xs font-medium text-purple-400 hover:scale-110 transition-transform duration-200 ml-1">
          <span>+{remainingReactionsCount}</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {totalRemainingCount} reactions
          </span>
        </button>
      )}
    </div>
  );
};