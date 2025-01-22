import { useState } from "react";

interface PostReactionsProps {
  reactions: string[];
  likes: number;
}

export const PostReactions = ({ reactions }: PostReactionsProps) => {
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>({});
  const [reactionCounts, setReactionCounts] = useState<Record<string, number>>(
    reactions.reduce((counts, emoji) => ({
      ...counts,
      [emoji]: Math.floor(Math.random() * 50) + 1,
    }), {})
  );

  const handleReaction = (emoji: string) => {
    setUserReactions(prev => {
      const newReactions = { ...prev };
      newReactions[emoji] = !prev[emoji];
      return newReactions;
    });

    setReactionCounts(prev => ({
      ...prev,
      [emoji]: prev[emoji] + (userReactions[emoji] ? -1 : 1),
    }));
  };

  const displayedReactions = reactions.slice(0, 3);
  const remainingReactions = reactions.slice(3);
  const remainingReactionsCount = remainingReactions.length;
  const totalRemainingCount = remainingReactions.reduce((sum, emoji) => sum + reactionCounts[emoji], 0);

  return (
    <div className="flex items-center gap-0.5">
      {displayedReactions.map((emoji, index) => (
        <button
          key={index}
          onClick={() => handleReaction(emoji)}
          className={`relative group p-1 hover:scale-125 transition-transform duration-200 ${
            userReactions[emoji] ? "scale-110" : ""
          }`}
        >
          <span className="text-lg">{emoji}</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {reactionCounts[emoji]}
          </span>
        </button>
      ))}
      {remainingReactionsCount > 0 && (
        <button
          className="relative group p-1 text-xs font-medium text-purple-400 hover:scale-110 transition-transform duration-200"
        >
          <span>+{remainingReactionsCount}</span>
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {totalRemainingCount} reactions
          </span>
        </button>
      )}
    </div>
  );
};