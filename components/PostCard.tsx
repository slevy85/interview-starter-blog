"use client";

import { useFavorite } from "@/lib/hooks/use-favorite";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useCallback } from "react";

export default function PostCard({ post }: { post: any }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorite();

  const onClickFavorite = useCallback(() => {
    isFavorite ? removeFavorite() : addFavorite();
  }, [isFavorite]);

  return (
    <div className="border p-4 rounded shadow">
      <button onClick={onClickFavorite}>
        {isFavorite ? (
          <StarFilledIcon height={24} width={24} className="text-yellow-500" />
        ) : (
          <StarIcon height={24} width={24} className="text-gray-600" />
        )}
      </button>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </h2>
        <p>{new Date(post.createdAt).toDateString()}</p>

        <div className="text-gray-700">{post.description}</div>
      </div>
    </div>
  );
}
