interface YoutubeContentProps {
  videoId: string;
}

export const YoutubeContent = ({ videoId }: YoutubeContentProps) => {
  return (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};