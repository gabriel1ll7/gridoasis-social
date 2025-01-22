import { TextContent } from "./content/TextContent";
import { ImageContent } from "./content/ImageContent";
import { GalleryContent } from "./content/GalleryContent";
import { VideoContent } from "./content/VideoContent";
import { YoutubeContent } from "./content/YoutubeContent";

type PostContent = {
  type: 'text' | 'image' | 'gallery' | 'video' | 'youtube';
  content: string;
  galleryImages?: string[];
};

interface PostContentProps {
  content: PostContent;
}

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