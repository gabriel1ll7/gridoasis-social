/**
 * Header Component
 * 
 * A fixed position header that contains:
 * - Brand logo/text
 * - Post creation input with media buttons
 * - Navigation icons (messages, notifications)
 * - User profile dropdown
 * 
 * The header uses a glass-morphism effect with backdrop blur
 * and includes interactive elements with hover states.
 */
import { Bell, User, Image, Video, MessageCircleReply, Home, Settings, LogOut, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-32 flex items-center justify-between">
        {/* Brand logo/text with gradient effect */}
        <div className="text-2xl font-bold bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
          Social
        </div>
        
        {/* Post creation input with media buttons */}
        <div className="flex-1 max-w-lg mx-4">
          <div className="flex items-center gap-3 bg-muted/50 rounded-full px-6 py-4 cursor-pointer hover:bg-muted/70 transition-colors">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-base flex-1">Share your dreams...</span>
            <div className="flex items-center gap-2">
              {/* Media upload buttons with hover effects */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 text-social-primary hover:text-social-primary/90 hover:bg-white/10"
              >
                <Image className="h-11 w-11" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 text-social-secondary hover:text-social-secondary/90 hover:bg-white/10"
              >
                <Video className="h-11 w-11" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 text-social-accent hover:text-social-accent/90 hover:bg-white/10"
              >
                <MessageCircleReply className="h-11 w-11" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation icons and user menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Message notification with counter */}
          <Button variant="ghost" size="icon" className="relative text-foreground h-14 w-14">
            <MessageCircle className="h-12 w-12" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-social-accent text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </Button>
          {/* Bell notification with counter */}
          <Button variant="ghost" size="icon" className="relative text-foreground h-14 w-14">
            <Bell className="h-12 w-12" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-social-primary text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Button>
          {/* User profile dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground h-14 w-14">
                <User className="h-12 w-12" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Home className="h-8 w-8" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <User className="h-8 w-8" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <span>My Personas</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Settings className="h-8 w-8" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive">
                <LogOut className="h-8 w-8" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};