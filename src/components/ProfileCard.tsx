import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const ProfileCard = () => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10 animate-fade-in">
      <div className="relative h-32">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-social-primary/20 to-social-secondary/20 rounded-t-lg"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50"></div>
        </div>
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <Avatar className="h-24 w-24 border-4 border-background">
            <img src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?&w=128&h=128&fit=crop" alt="Profile" className="object-cover" />
          </Avatar>
        </div>
      </div>
      
      <div className="pt-16 pb-6 px-4 text-center">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
          CyberneticDreamer
        </h2>
        <p className="text-muted-foreground text-sm mt-1">@cyberdreamer</p>
        <p className="text-sm text-white/80 mt-3 mb-4">
          ✨ Exploring the intersection of dreams and technology ✨
        </p>
        
        <Separator className="my-4 bg-white/10" />
        
        <div className="flex justify-center gap-12 mb-6">
          <div>
            <p className="text-xl font-semibold text-white">42</p>
            <p className="text-sm text-muted-foreground">Posts</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">1.2k</p>
            <p className="text-sm text-muted-foreground">Reactions</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 transition-colors"
        >
          My Profile
        </Button>
      </div>
    </div>
  );
};