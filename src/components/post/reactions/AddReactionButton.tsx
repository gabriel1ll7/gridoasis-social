import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface AddReactionButtonProps {
  onEmojiSelect: (emoji: any) => void;
}

export const AddReactionButton = ({ onEmojiSelect }: AddReactionButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="h-5 w-5 p-0 ml-0.5 text-muted-foreground hover:bg-white/10"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-none" side="top">
        <Picker 
          data={data} 
          onEmojiSelect={onEmojiSelect}
          theme="dark"
        />
      </PopoverContent>
    </Popover>
  );
};