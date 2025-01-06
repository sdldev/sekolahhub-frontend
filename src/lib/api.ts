// API endpoints
const API_BASE_URL = 'https://sekolahhubbackend.indatechno.com/api';

async function fetchApi(endpoint: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(`API Error: ${endpoint}`, error);
    return null;
  }
}

export async function getPosts() {
  const data = await fetchApi('/posts');
  return data || [];
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  const post = posts.find(post => post.slug === slug);
  
  if (!post) return null;
  
  const data = await fetchApi(`/posts/${post.id}`);
  return data;
}

export async function getCategories() {
  const data = await fetchApi('/categories');
  return data || [];
}

export async function getCategory(id: string | number) {
  const data = await fetchApi(`/categories/${id}`);
  return data;
}