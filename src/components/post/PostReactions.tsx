import { useState } from "react";

/**
 * PostReactions Component
 * 
 * Handles the display and interaction with post reactions (emojis).
 * Manages local state for user reactions and reaction counts.
 * Shows tooltips with reaction counts on hover.
 * 
 * @param reactions - Array of emoji reactions available for the post
 * @param likes - Number of likes on the post
 */
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

  // Always show exactly 5 emojis, pad with default emojis if needed
  const defaultEmojis = ["👍", "❤️", "😊", "🎉", "👏"];
  const displayedReactions = reactions.length >= 5 
    ? reactions.slice(0, 5) 
    : [...reactions, ...defaultEmojis.slice(reactions.length)].slice(0, 5);
  
  const remainingReactions = reactions.slice(5);
  const remainingReactionsCount = remainingReactions.length;
  const totalRemainingCount = remainingReactions.reduce((sum, emoji) => sum + (reactionCounts[emoji] || 0), 0);

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
        <button
          className="relative group text-xs font-medium text-purple-400 hover:scale-110 transition-transform duration-200 ml-1"
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
