const API_STORAGE_URL = 'https://sekolahhubbackend.indatechno.com/storage/posts/images';

export function getImageUrl(imageName: string): string {
  return `${API_STORAGE_URL}/${imageName}`;
}

export function getFallbackImageUrl(): string {
  return 'https://placehold.co/600x400?text=No+Image';
}