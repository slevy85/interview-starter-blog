"use client";

import { useEffect, useState } from "react";

export const PostDetails = (props: { id: string }) => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/posts/${props.id}`)
      .then((r) => r.json())
      .then((p) => setPost(p));
  }, [props.id]);

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">{post?.title}</h2>

      <div className="flex justify-center container mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post?.body }} />
      </div>
    </>
  );
};
