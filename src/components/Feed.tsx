import { useQuery } from "@tanstack/react-query";
import { PostCard } from "./PostCard";
import { ProfileCard } from "./ProfileCard";
import { parsePostsXml } from "@/utils/xmlParser";

export const Feed = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: parsePostsXml,
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] w-full max-w-6xl mx-auto">
        <div className="break-inside-avoid mb-6">
          <ProfileCard />
        </div>
        {posts.map((post, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};