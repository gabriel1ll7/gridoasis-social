import { Bell, User, Image, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
          Social
        </div>
        
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-4 py-2 cursor-pointer hover:bg-muted/70 transition-colors">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-sm flex-1">Share your dreams...</span>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-social-primary hover:text-social-primary/90 hover:bg-white/10"
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-social-secondary hover:text-social-secondary/90 hover:bg-white/10"
              >
                <Video className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-social-accent hover:text-social-accent/90 hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="relative text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-social-primary text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};