import { PostCard } from "./PostCard";
import { ProfileCard } from "./ProfileCard";
import mockPostsXml from "@/data/mockPosts.xml?raw";
import { parsePostsXml } from "@/utils/xmlParser";

export const Feed = () => {
  const posts = parsePostsXml(mockPostsXml);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl mx-auto">
        <div className="w-full">
          <ProfileCard />
        </div>
        {posts.map((post, index) => (
          <div key={index} className="w-full">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};