import React from "react";

function Post({ post, id }) {
  return (
    <div className="flex flex-col md:flex-row px-3 py-5 my-3 bg-white">
      <img className="w-full md:w-56" src={post.owner.avatar_url} alt="img" />

      <div className="flex flex-col space-y-3 px-3 py-3 md:py-0">
        <h3 className="font-bold text-xl">{post.name}</h3>
        <p className="text-gray-600">{post.description}</p>
        <div className="flex space-x-3 items-center text-sm">
          <span className="px-1 border rounded-md py-1 text-sm">
            Stars: {post.stargazers_count}
          </span>
          <span className="px-1 border rounded-md py-1 text-sm">
            Issues: {post.open_issues}
          </span>
          <em className="text-gray-500">
            Submitted 30 days ago by {post.owner.login}
          </em>
        </div>
      </div>
    </div>
  );
}

export default Post;
