import { PostCard } from "./PostCard";
import { ProfileCard } from "./ProfileCard";
import { MOCK_POSTS } from "@/data/mockPosts";

export const Feed = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] w-full max-w-6xl mx-auto">
        <div className="break-inside-avoid mb-6">
          <ProfileCard />
        </div>
        {MOCK_POSTS.map((post, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};