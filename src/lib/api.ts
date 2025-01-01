// API endpoints
const API_BASE_URL = 'https://sekolahhubbackend.indatechno.com/api';

export async function getPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`);
  const data = await response.json();
  return data.data;
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) return null;
  
  // Fetch detailed post data
  const response = await fetch(`${API_BASE_URL}/posts/${post.id}`);
  const data = await response.json();
  return data.data;
}

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  const data = await response.json();
  return data.data;
}

export async function getCategory(id: string | number) {
  const response = await fetch(`${API_BASE_URL}/categories/${id}`);
  const data = await response.json();
  return data.data;
}