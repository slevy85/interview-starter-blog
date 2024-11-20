import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";

export default function PostCard({ post }: { post: any }) {
  const isFavorite = false;
  return (
    <div className="border p-4 rounded shadow">
      {isFavorite ? (
        <StarFilledIcon className="text-yellow-500" />
      ) : (
        <StarIcon className="text-gray-600" />
      )}
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-gray-700">{post.description}</p>
    </div>
  );
}
