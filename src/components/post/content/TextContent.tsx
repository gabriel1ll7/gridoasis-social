interface TextContentProps {
  content: string;
}

export const TextContent = ({ content }: TextContentProps) => {
  return <p className="text-sm text-card-foreground px-6 py-4">{content}</p>;
};