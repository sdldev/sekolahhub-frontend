import type { Category } from './Category';
import type { User } from './User';

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  slug: string;
  user_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  user?: User;
  category?: Category;
}