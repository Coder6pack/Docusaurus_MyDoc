import React from "react";
import AsideDetail from "../AsideDetail";

export default function PostDetail() {
  return (
    <div className="columns-6xl mx-32 pt-8 mb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <AsideDetail />
        </div>

        <div className="col-span-9 pl-5">
          <div className="font-bold text-3xl mb-6">All Topics</div>
        </div>
      </div>
    </div>
  );
}
