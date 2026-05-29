import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata() {
  const posts = await getPosts(5);
  const numPosts = posts.length;

  return {
    title: `Browse all our ${numPosts} posts`,
    description: "Browse all our posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts(10);

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
