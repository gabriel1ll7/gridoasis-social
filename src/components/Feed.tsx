/**
 * Feed Component
 * 
 * The main feed container that displays posts in a masonry layout.
 * Features:
 * - Multi-column layout that adapts to different screen sizes
 * - Profile card at the top
 * - Posts displayed in a masonry grid
 * - Uses XML data source for posts
 * 
 * Layout:
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
import { PostCard } from "./PostCard";
import { ProfileCard } from "./ProfileCard";
import mockPostsXml from "@/data/mockPosts.xml?raw";
import { parsePostsXml } from "@/utils/xmlParser";

export const Feed = () => {
  // Parse posts from XML data source
  const posts = parsePostsXml(mockPostsXml);

  return (
    <div className="container mx-auto px-4 pt-36 pb-12">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance] w-full max-w-6xl mx-auto">
        {/* Profile card is always first in the feed */}
        <div className="break-inside-avoid mb-5">
          <ProfileCard />
        </div>
        {/* Posts are rendered in a masonry layout */}
        {posts.map((post, index) => (
          <div key={index} className="break-inside-avoid mb-5">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};