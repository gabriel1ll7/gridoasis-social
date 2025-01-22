export const getValidImageUrl = (url: string): string => {
  // Log the incoming URL for debugging
  console.log('Processing URL:', url);

  // If the URL is empty or undefined, return placeholder
  if (!url) {
    console.warn('Empty URL received');
    return '/placeholder.svg';
  }

  // Remove any whitespace, newlines, and tabs
  const cleanUrl = url.replace(/[\n\r\t\s]+/g, '').trim();
  
  // If it's already a valid URL, return it
  if (cleanUrl.startsWith('http')) {
    console.log('Valid URL found:', cleanUrl);
    return cleanUrl;
  }
  
  // If it's a relative path, prepend with /images/
  if (!cleanUrl.startsWith('/')) {
    const fullPath = `/images/${cleanUrl}`;
    console.log('Converting to full path:', fullPath);
    return fullPath;
  }
  
  return cleanUrl;
};