import React from "react";
import AsideFilter from "../AsideFilter";
import PostItem from "../PostItem";
import { posts } from "@site/src/data/posts";

export default function PostList() {
  return (
    <div className="columns-6xl mx-32 pt-[50px]">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <AsideFilter />
        </div>

        <div className="col-span-9 pl-5">
          <div className="font-bold text-3xl mb-6">All Topics</div>
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
