import { getValidImageUrl } from "@/utils/imageUtils";

interface ImageContentProps {
  content: string;
}

export const ImageContent = ({ content }: ImageContentProps) => {
  const imageUrl = getValidImageUrl(content);
  console.log('Processing image:', {
    originalContent: content,
    cleanedUrl: imageUrl
  });
  
  return (
    <div className="w-full aspect-square">
      <img 
        src={imageUrl}
        alt="Post image" 
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Image failed to load:', {
            originalContent: content,
            cleanedUrl: imageUrl,
            error: e
          });
        }}
      />
    </div>
  );
};