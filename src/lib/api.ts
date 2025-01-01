// API endpoints
const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

export async function getPosts() {
  const response = await fetch(`${API_BASE_URL}/api/posts`);
  const data = await response.json();
  return data.data;
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) return null;
  
  // Fetch detailed post data
  const response = await fetch(`${API_BASE_URL}/api/posts/${post.id}`);
  const data = await response.json();
  return data.data;
}

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/api/categories`);
  const data = await response.json();
  return data.data;
}

export async function getCategory(id: string | number) {
  const response = await fetch(`${API_BASE_URL}/api/categories/${id}`);
  const data = await response.json();
  return data.data;
}