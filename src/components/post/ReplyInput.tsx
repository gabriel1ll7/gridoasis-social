import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react';
import type { ReplyInputProps } from "@/types/post";

/**
 * ReplyInput Component
 * 
 * A form component for submitting replies to posts. Includes a textarea for
 * the reply content and an emoji picker for adding emojis to the reply.
 * 
 * @param onSubmit - Callback function called when a reply is submitted
 */
export const ReplyInput = ({ onSubmit }: ReplyInputProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  const onEmojiSelect = (emoji: any) => {
    setContent(prev => prev + emoji.native);
  };

  return (
    <div className="space-y-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
      <div className="relative">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a reply..."
          className="min-h-[80px] bg-white/5 border-white/10 resize-none"
        />
        <div className="absolute right-2 bottom-2 flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-muted-foreground hover:bg-white/10"
              >
                <Smile className="h-5 w-5" />
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
        </div>
      </div>
      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit}
          className="bg-gradient-to-r from-social-primary to-social-secondary hover:opacity-90"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};