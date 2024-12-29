const API_BASE_URL = import.meta.env.PUBLIC_API_URL;

export const ENDPOINTS = {
  posts: `${API_BASE_URL}/posts`,
  categories: `${API_BASE_URL}/categories`,
  users: `${API_BASE_URL}/users`,
} as const;