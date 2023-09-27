import type { Post } from '@/lib/types';
import Link from 'next/link';

export interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <li>
      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}
