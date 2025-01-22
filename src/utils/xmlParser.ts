import { Post } from "@/types/post";

export const parsePostsXml = (xmlText: string): Post[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const posts = xmlDoc.getElementsByTagName("post");
  
  return Array.from(posts).map(post => ({
    username: post.getElementsByTagName("username")[0]?.textContent || "",
    userImage: post.getElementsByTagName("userImage")[0]?.textContent || "",
    content: {
      type: post.getElementsByTagName("type")[0]?.textContent as any || "text",
      content: post.getElementsByTagName("content")[0]?.textContent || "",
      galleryImages: Array.from(post.getElementsByTagName("image")).map(img => img.textContent || "")
    },
    likes: parseInt(post.getElementsByTagName("likes")[0]?.textContent || "0"),
    comments: parseInt(post.getElementsByTagName("comments")[0]?.textContent || "0"),
    reactions: post.getElementsByTagName("reactions")[0]?.textContent?.split(",") || []
  }));
};