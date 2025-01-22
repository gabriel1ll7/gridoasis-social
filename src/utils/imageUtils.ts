export const getValidImageUrl = (url: string): string => {
  // Remove any whitespace, newlines, and tabs
  const cleanUrl = url.replace(/[\n\r\t\s]+/g, '').trim();
  
  // If it's already a valid URL, return it
  if (cleanUrl.startsWith('http')) {
    return cleanUrl;
  }
  
  // If it's a relative path, prepend with /images/
  if (!cleanUrl.startsWith('/')) {
    return `/images/${cleanUrl}`;
  }
  
  return cleanUrl;
};