interface Post {
  slug: string;
  id: number;  
  title: string;
  author: string;
  category: string;
  image: string;
  content: string;
  imagecaption: string;
  created_at: string;

}

interface Category {
  id: string | number;
  title: string;
  slug: string;

}

const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/api/posts`);
  const data = await response.json();
  return data.data;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts: Post[] = await getPosts();
  const post: Post | undefined = posts.find((post: Post) => post.slug === slug);
  
  if (!post) return null;
  
  // Fetch detailed post data
  const response = await fetch(`${API_BASE_URL}/api/posts/${post.id}`);
  const data = await response.json();
  return data.data;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_BASE_URL}/api/categories`);
  const data = await response.json();
  return data.data;
}

export async function getCategory(id: string | number): Promise<Category> {
  const response = await fetch(`${API_BASE_URL}/api/categories/${id}`);
  const data = await response.json();
  return data.data;
}