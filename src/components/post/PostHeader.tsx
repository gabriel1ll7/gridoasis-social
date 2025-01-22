import { Avatar } from "@/components/ui/avatar";

interface PostHeaderProps {
  username: string;
  userImage: string;
}

export const PostHeader = ({ username, userImage }: PostHeaderProps) => {
  return (
    <div className="p-4 flex items-center gap-3">
      <Avatar className="h-12 w-12">
        <img src={userImage} alt={username} className="object-cover" />
      </Avatar>
      <span className="font-medium bg-gradient-to-r from-social-primary to-social-secondary bg-clip-text text-transparent">
        {username}
      </span>
    </div>
  );
};