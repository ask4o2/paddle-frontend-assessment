import React from "react";
import Post from "../components/Post";

function Posts({ posts }) {
  return (
    // trending posts
    <div className="container mx-auto flex flex-col max-w-4xl px-6 pt-20">
      <div className="text-base">About {posts?.total_count} results found</div>

      {posts?.items?.map((post) => (
        <Post post={post} id={post.id} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
