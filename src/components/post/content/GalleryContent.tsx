import { getValidImageUrl } from "@/utils/imageUtils";

interface GalleryContentProps {
  images: string[];
}

export const GalleryContent = ({ images }: GalleryContentProps) => {
  if (!images?.length) return null;
  
  const totalImages = images.length;
  const displayImages = images.slice(0, totalImages === 3 ? 2 : 4);
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
};