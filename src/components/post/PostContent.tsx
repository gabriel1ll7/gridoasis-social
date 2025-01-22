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
  switch (content.type) {
    case 'text':
      return <p className="text-sm text-card-foreground p-6">{content.content}</p>;
    
    case 'image':
      return (
        <img 
          src={content.content} 
          alt="Post content" 
          className="w-full h-auto object-cover"
        />
      );
    
    case 'gallery':
      const totalImages = content.galleryImages?.length || 0;
      const displayImages = content.galleryImages?.slice(0, 4) || [];
      const remainingImages = totalImages > 4 ? totalImages - 4 : 0;

      if (totalImages <= 1) {
        return (
          <img 
            src={displayImages[0]} 
            alt="Gallery image" 
            className="w-full h-auto object-cover"
          />
        );
      }

      return (
        <div className="grid grid-cols-2 gap-1 aspect-square">
          {displayImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative ${index === 3 && remainingImages > 0 ? 'cursor-pointer' : ''}`}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              {index === 3 && remainingImages > 0 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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