import { Nav } from '@/components/Nav';
import { PostList } from '@/components/PostList';
import getPosts from '@/lib/get-posts';

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y">
        <Nav />
        <div className="mx-auto p-6">
          <article className="prose prose-slate prose-sky dark:prose-invert">
            <h2>My Posts</h2>
            <PostList posts={posts} />
          </article>
        </div>
      </div>
    </div>
  );
}
