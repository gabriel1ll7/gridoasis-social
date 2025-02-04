export type PostContentType = 'text' | 'image' | 'gallery' | 'video' | 'youtube';

export interface PostContent {
  type: PostContentType;
  content: string;
  galleryImages?: string[];
}

export interface Reply {
  username: string;
  userImage: string;
  content: string;
}

export interface Post {
  username: string;
  userImage: string;
  content: PostContent;
  likes: number;
  comments: number;
  reactions?: string[];
  replies?: Reply[];
}

// Props interfaces for components
export interface PostContentProps {
  content: PostContent;
}

export interface PostReactionsProps {
  reactions: string[];
  likes?: number;
}

export interface ReplyInputProps {
  onSubmit: (content: string) => void;
}