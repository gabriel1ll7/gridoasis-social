interface VideoContentProps {
  content: string;
}

export const VideoContent = ({ content }: VideoContentProps) => {
  return (
    <video 
      controls 
      className="w-full h-auto"
      src={content}
    />
  );
};