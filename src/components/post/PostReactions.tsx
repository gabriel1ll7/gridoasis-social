import { useState } from "react";
import { EmojiButton } from "./reactions/EmojiButton";
import { RemainingReactionsButton } from "./reactions/RemainingReactionsButton";
import { AddReactionButton } from "./reactions/AddReactionButton";
import type { PostReactionsProps } from "@/types/post";

/**
 * PostReactions Component
 * 
 * Handles the display and interaction with post reactions (emojis).
 * Shows exactly 4 emojis with a counter for additional ones.
 * Allows adding new emoji reactions through an emoji picker.
 * 
 * @param reactions - Array of emoji reactions available for the post
 * @param likes - Number of likes on the post
 */
export const PostReactions = ({ reactions: initialReactions }: PostReactionsProps) => {
  const [reactions, setReactions] = useState(initialReactions);
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

  const handleAddEmoji = (emoji: any) => {
    if (!reactions.includes(emoji.native)) {
      setReactions(prev => [...prev, emoji.native]);
      setReactionCounts(prev => ({
        ...prev,
        [emoji.native]: 1,
      }));
      setUserReactions(prev => ({
        ...prev,
        [emoji.native]: true,
      }));
    }
  };

  // Always show exactly 4 emojis, pad with default emojis if needed
  const defaultEmojis = ["👍", "❤️", "😊", "🎉"];
  const displayedReactions = reactions.length >= 4 
    ? reactions.slice(0, 4) 
    : [...reactions, ...defaultEmojis.slice(reactions.length)].slice(0, 4);
  
  const remainingReactions = reactions.slice(4);
  const remainingReactionsCount = remainingReactions.length;
  const totalRemainingCount = remainingReactions.reduce((sum, emoji) => sum + (reactionCounts[emoji] || 0), 0);

  return (
    <div className="flex items-center gap-[2px]">
      {displayedReactions.map((emoji, index) => (
        <EmojiButton
          key={index}
          emoji={emoji}
          count={reactionCounts[emoji] || 0}
          isSelected={userReactions[emoji]}
          onClick={() => handleReaction(emoji)}
        />
      ))}
      
      <RemainingReactionsButton 
        count={remainingReactionsCount}
        totalCount={totalRemainingCount}
      />
      
      <AddReactionButton onEmojiSelect={handleAddEmoji} />
    </div>
  );
};