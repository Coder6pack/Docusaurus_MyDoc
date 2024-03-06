import React from "react";
import MainLayout from "../layouts/MainLayout";
import Link from "@docusaurus/Link";
import Svg from "../constant/Svg";
import PostList from "../components/PostList";

export default function index() {
  return (
    <div>
      <MainLayout>
        <PostList />
      </MainLayout>
    </div>
  );
}
