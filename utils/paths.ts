/**
 * Get the correct path for assets (images, etc.) that works with basePath
 */
export const getAssetPath = (path: string): string => {
  // For Next.js static export with basePath, paths should start with basePath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine basePath with path
  return `${basePath}${cleanPath}`;
};

