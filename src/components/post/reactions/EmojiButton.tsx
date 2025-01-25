import { useState } from "react";

interface EmojiButtonProps {
  emoji: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
}

export const EmojiButton = ({ emoji, count, isSelected, onClick }: EmojiButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative group hover:scale-150 transition-transform duration-200 ${
        isSelected ? "scale-110" : ""
      }`}
    >
      <span className="text-lg">{emoji}</span>
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {count}
      </span>
    </button>
  );
};