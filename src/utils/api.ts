import type { Post } from '../types/Post';
import type { Category } from '../types/Category';
import type { User } from '../types/User';
import { ENDPOINTS } from './config';

interface ApiResponse<T> {
  data: {
    data: T;
  };
}

async function fetchApi<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }
  const result: ApiResponse<T> = await response.json();
  return result.data.data;
}

// Posts
export async function getPosts(): Promise<Post[]> {
  return fetchApi<Post[]>(ENDPOINTS.posts);
}

export async function getPost(id: number): Promise<Post> {
  return fetchApi<Post>(`${ENDPOINTS.posts}/${id}`);
}

// Categories
export async function getCategories(): Promise<Category[]> {
  return fetchApi<Category[]>(ENDPOINTS.categories);
}

export async function getCategory(id: number): Promise<Category> {
  return fetchApi<Category>(`${ENDPOINTS.categories}/${id}`);
}

// Users
export async function getUsers(): Promise<User[]> {
  return fetchApi<User[]>(ENDPOINTS.users);
}

export async function getUser(id: number): Promise<User> {
  return fetchApi<User>(`${ENDPOINTS.users}/${id}`);
}