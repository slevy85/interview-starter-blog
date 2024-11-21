import CategoryFilter from "@/components/CategoryFilter";
import { PostDetails } from "@/components/PostDetails";

export default async function CategoryPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const categories = (await fetch("http://localhost:3000/db.json")
    .then((res) => res.json())
    .then((data) => data.categories)) as any[];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Islamic Blog</h1>
      <CategoryFilter categories={categories} />
      <PostDetails id={id} />
    </main>
  );
}
