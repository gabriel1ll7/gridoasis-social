export const getValidImageUrl = (url: string) => {
  const cleanUrl = url.trim();
  if (cleanUrl.startsWith('http')) return cleanUrl;
  return `/images/${cleanUrl}`;
};