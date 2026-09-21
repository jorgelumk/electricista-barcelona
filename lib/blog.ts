import { BLOG_POSTS_DATA, BlogPostData } from './blog-data';

export type BlogPost = BlogPostData;

export const BLOG_POSTS: BlogPost[] = BLOG_POSTS_DATA;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(relatedSlugs: string[]): BlogPost[] {
  return BLOG_POSTS.filter((p) => relatedSlugs.includes(p.slug));
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}
