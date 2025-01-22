import { Post } from "@/types/post";

export const parsePostsXml = (xmlText: string): Post[] => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "text/xml");
  const posts = xmlDoc.getElementsByTagName("post");
  
  return Array.from(posts).map(post => {
    // Get the content node and clean its text content
    const contentNode = post.getElementsByTagName("content")[0];
    const contentText = contentNode?.textContent?.trim() || "";
    
    // Get content type
    const type = post.getElementsByTagName("type")[0]?.textContent as any || "text";
    
    // Handle different content types
    let content = contentText;
    if (type === "image") {
      // Clean the image URL by removing newlines and extra spaces
      content = contentText.replace(/[\n\r\t\s]+/g, '');
    }
    
    return {
      username: post.getElementsByTagName("username")[0]?.textContent?.trim() || "",
      userImage: post.getElementsByTagName("userImage")[0]?.textContent?.trim() || "",
      content: {
        type,
        content,
        galleryImages: Array.from(post.getElementsByTagName("image"))
          .map(img => img.textContent?.trim() || "")
          .filter(url => url !== "")
      },
      likes: parseInt(post.getElementsByTagName("likes")[0]?.textContent || "0"),
      comments: parseInt(post.getElementsByTagName("comments")[0]?.textContent || "0"),
      reactions: post.getElementsByTagName("reactions")[0]?.textContent?.split(",").map(r => r.trim()) || []
    };
  });
};