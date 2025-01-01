const API_STORAGE_URL = `${import.meta.env.PUBLIC_API_URL}/storage/posts/images`;  

export function getImageUrl(imageName: string): string {
  return `${API_STORAGE_URL}/${imageName}`;
}

export function getFallbackImageUrl(): string {
  return 'https://placehold.co/600x400?text=No+Image';
}