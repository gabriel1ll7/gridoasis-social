import { TextContent } from "./content/TextContent";
import { ImageContent } from "./content/ImageContent";
import { GalleryContent } from "./content/GalleryContent";
import { VideoContent } from "./content/VideoContent";
import { YoutubeContent } from "./content/YoutubeContent";
import type { PostContentProps } from "@/types/post";

/**
 * PostContent Component
 * 
 * A wrapper component that renders different types of content (text, image, gallery,
 * video, youtube) based on the content type provided. Acts as a switch to determine
 * which content component to render.
 * 
 * @param content - Object containing the type and actual content to display
 */
export const PostContent = ({ content }: PostContentProps) => {
  switch (content.type) {
    case 'text':
      return <TextContent content={content.content} />;
    
    case 'image':
      return <ImageContent content={content.content} />;
    
    case 'gallery':
      return content.galleryImages ? <GalleryContent images={content.galleryImages} /> : null;
    
    case 'video':
      return <VideoContent content={content.content} />;
    
    case 'youtube':
      return <YoutubeContent videoId={content.content} />;
    
    default:
      return null;
  }
};