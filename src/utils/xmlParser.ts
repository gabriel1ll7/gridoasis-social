import { Post } from "@/types/post";

const parsePostXml = (postElement: Element): Post => {
  const contentNode = postElement.getElementsByTagName("content")[0];
  const contentText = contentNode?.textContent?.trim() || "";
  const type = postElement.getElementsByTagName("type")[0]?.textContent as any || "text";
  
  const repliesNode = postElement.getElementsByTagName("replies")[0];
  const replies = repliesNode ? Array.from(repliesNode.getElementsByTagName("reply")).map(reply => ({
    username: reply.getElementsByTagName("username")[0]?.textContent?.trim() || "",
    userImage: reply.getElementsByTagName("userImage")[0]?.textContent?.trim() || "",
    content: reply.getElementsByTagName("content")[0]?.textContent?.trim() || ""
  })) : undefined;
  
  return {
    username: postElement.getElementsByTagName("username")[0]?.textContent?.trim() || "",
    userImage: postElement.getElementsByTagName("userImage")[0]?.textContent?.trim() || "",
    content: {
      type,
      content: type === "image" ? contentText.replace(/[\n\r\t\s]+/g, '').replace(/^image/, '') : contentText,
      galleryImages: Array.from(postElement.getElementsByTagName("image"))
        .map(img => (img.textContent?.trim() || "").replace(/^image/, ''))
        .filter(url => url !== "")
    },
    likes: parseInt(postElement.getElementsByTagName("likes")[0]?.textContent || "0"),
    comments: parseInt(postElement.getElementsByTagName("comments")[0]?.textContent || "0"),
    reactions: postElement.getElementsByTagName("reactions")[0]?.textContent?.split(",").map(r => r.trim()) || [],
    replies
  };
};

export const parsePostsXml = async (): Promise<Post[]> => {
  try {
    const parser = new DOMParser();
    const postFiles = ['tech-posts.xml', 'art-posts.xml', 'science-posts.xml'];
    
    const postsPromises = postFiles.map(async (filename) => {
      const response = await fetch(`/src/data/posts/${filename}`);
      const xmlText = await response.text();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const posts = xmlDoc.getElementsByTagName("post");
      return Array.from(posts).map(parsePostXml);
    });

    const allPosts = await Promise.all(postsPromises);
    return allPosts.flat();
  } catch (error) {
    console.error('Error parsing posts:', error);
    return [];
  }
};