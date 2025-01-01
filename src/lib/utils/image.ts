const API_STORAGE_URL = `${import.meta.env.PUBLIC_API_URL}/storage/posts/images`;  

export function getImageUrl(imageName: string): string {
  return `${API_STORAGE_URL}/${imageName}`;
}
export function getFallbackImageUrl(): string {  
  return '/images/600x400.svg'; // Path relative untuk file SVG  
}  