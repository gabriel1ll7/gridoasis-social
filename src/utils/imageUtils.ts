export const getValidImageUrl = (url: string): string => {
  // Log the incoming URL for debugging
  console.log('Processing URL:', url);

  // If the URL is empty or undefined, return placeholder
  if (!url) {
    console.warn('Empty URL received');
    return '/placeholder.svg';
  }

  // If it's already a valid URL, return it
  if (url.startsWith('http')) {
    console.log('Valid URL found:', url);
    return url;
  }
  
  // If it's a relative path, prepend with /images/
  if (!url.startsWith('/')) {
    const fullPath = `/images/${url}`;
    console.log('Converting to full path:', fullPath);
    return fullPath;
  }
  
  return url;
};