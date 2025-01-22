import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type PostContent = {
  type: 'text' | 'image' | 'gallery' | 'video' | 'youtube';
  content: string;
  galleryImages?: string[];
};

interface PostContentProps {
  content: PostContent;
}

export const PostContent = ({ content }: PostContentProps) => {
  // Helper function to get a valid image URL
  const getValidImageUrl = (url: string) => {
    // If the URL is already a full URL, use it
    if (url.startsWith('http')) return url;
    // Otherwise, assume it's a local image and use the public directory
    return `/images/${url}`;
  };

  switch (content.type) {
    case 'text':
      return <p className="text-sm text-card-foreground px-6 py-4">{content.content}</p>;
    
    case 'image':
      return (
        <div className="aspect-square">
          <img 
            src={content.content}
            alt="Single post image" 
            className="w-full h-full object-cover"
          />
        </div>
      );
    
    case 'gallery':
      if (!content.galleryImages?.length) return null;
      
      const totalImages = content.galleryImages.length;
      const displayImages = content.galleryImages.slice(0, totalImages === 3 ? 2 : 4);
      const remainingImages = totalImages === 3 ? 1 : (totalImages > 4 ? totalImages - 4 : 0);

      if (totalImages === 1) {
        return (
          <div className="aspect-square">
            <img 
              src={getValidImageUrl(displayImages[0])}
              alt="Gallery image" 
              className="w-full h-full object-cover"
            />
          </div>
        );
      }

      return (
        <div className="grid grid-cols-2 gap-1 aspect-square">
          {displayImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative ${
                (totalImages === 3 && index === 1) || (totalImages > 3 && index === 3) 
                  ? 'cursor-pointer' 
                  : ''
              }`}
            >
              <img 
                src={getValidImageUrl(image)}
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {((totalImages === 3 && index === 1) || (totalImages > 3 && index === 3)) && remainingImages > 0 && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+{remainingImages}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    
    case 'video':
      return (
        <video 
          controls 
          className="w-full h-auto"
          src={content.content}
        />
      );
    
    case 'youtube':
      return (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${content.content}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    
    default:
      return null;
  }
};
