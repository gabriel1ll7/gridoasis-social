import { Bell, User, Image, Video, MessageCircleReply, Home, Settings, LogOut, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto h-16">
        <div className="flex items-center h-full px-4 gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
            Social
          </div>
          
          <div className="flex-1 max-w-xl mx-auto">
            <div ref={expandedRef} className="relative">
              <div 
                className={`absolute inset-x-0 bg-muted/50 rounded-lg transition-all duration-300 ${
                  isExpanded ? 'h-[120px]' : 'h-[40px]'
                }`}
                onClick={() => !isExpanded && setIsExpanded(true)}
              >
                <div className="flex items-center gap-3 px-4 py-1.5 h-[40px]">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop" />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <span className="text-muted-foreground text-sm">Share your dreams...</span>
                </div>
                
                {isExpanded && (
                  <div className="flex flex-col gap-4 px-4 pt-2 animate-fade-in">
                    <textarea 
                      className="w-full bg-transparent border-none focus:outline-none resize-none text-foreground"
                      rows={2}
                      placeholder="What's on your mind?"
                      autoFocus
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-9 w-9 text-social-primary hover:text-social-primary/90 hover:bg-white/10"
                        >
                          <Image className="h-6 w-6" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-9 w-9 text-social-secondary hover:text-social-secondary/90 hover:bg-white/10"
                        >
                          <Video className="h-6 w-6" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-9 w-9 text-social-accent hover:text-social-accent/90 hover:bg-white/10"
                        >
                          <MessageCircleReply className="h-6 w-6" />
                        </Button>
                      </div>
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(false);
                        }}
                        className="bg-social-primary hover:bg-social-primary/90"
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative text-foreground">
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-social-accent text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative text-foreground">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-social-primary text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <span>My Personas</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 cursor-pointer text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};