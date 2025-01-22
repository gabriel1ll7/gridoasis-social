import { getValidImageUrl } from "@/utils/imageUtils";

interface ImageContentProps {
  content: string;
}

export const ImageContent = ({ content }: ImageContentProps) => {
  const imageUrl = getValidImageUrl(content);
  
  return (
    <div className="relative w-full aspect-square overflow-hidden">
      <img 
        src={imageUrl}
        alt="Post image" 
        className="w-full h-full object-cover transition-transform hover:scale-105"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevent infinite error loop
          console.error('Image failed to load:', {
            originalUrl: content,
            processedUrl: imageUrl
          });
          target.src = '/placeholder.svg'; // Fallback to placeholder
        }}
      />
    </div>
  );
};