import React from "react";
import MainLayout from "../layouts/MainLayout";
import PostDetail from "../components/PostDetail";
import HeaderDetail from "../components/HeaderDetail";
import Footer from "../components/Footer";
export default function Detail() {
  return (
    <>
      <MainLayout>
        <HeaderDetail />
        <PostDetail />
        <Footer />
      </MainLayout>
    </>
  );
}
