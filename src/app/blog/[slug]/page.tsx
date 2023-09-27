import { PostBody } from './components/post-body';
import { getPost, getPosts } from '@/lib/get-posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  /*
   * The params to pre-render the page with.
   * Without this, the page will be rendered at runtime
   */
  return posts.map((post) => ({ slug: post.slug }));
}

export interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return <PostBody>{post.body}</PostBody>;
}
