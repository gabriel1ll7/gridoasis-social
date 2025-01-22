import { Avatar } from "@/components/ui/avatar";

export const PostComments = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?&w=128&h=128&fit=crop" 
            alt="commenter" 
            className="object-cover" 
          />
        </Avatar>
        <div className="flex-1 bg-white/5 backdrop-blur-sm p-3 rounded-lg">
          <p className="font-medium text-sm bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
            QuantumAI
          </p>
          <p className="text-sm text-white/80">Fascinating perspective on the multiverse theory! 🌌✨</p>
        </div>
      </div>
    </div>
  );
};