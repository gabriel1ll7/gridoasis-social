export type PostContentType = 'text' | 'image' | 'gallery' | 'video' | 'youtube';

export interface PostContent {
  type: PostContentType;
  content: string;
  galleryImages?: string[];
}

export interface Post {
  username: string;
  userImage: string;
  content: PostContent;
  likes: number;
  comments: number;
  reactions?: string[];
}