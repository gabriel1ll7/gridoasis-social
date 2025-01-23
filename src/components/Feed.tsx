import { PostCard } from "./PostCard";
import { ProfileCard } from "./ProfileCard";
import mockPostsXml from "@/data/mockPosts.xml?raw";
import { parsePostsXml } from "@/utils/xmlParser";

export const Feed = () => {
  const posts = parsePostsXml(mockPostsXml);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] w-full max-w-6xl mx-auto">
        <div className="break-inside-avoid mb-6">
          <ProfileCard />
        </div>
        {posts.map((post, index) => (
          <div key={index} className="break-inside-avoid mb-24">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};