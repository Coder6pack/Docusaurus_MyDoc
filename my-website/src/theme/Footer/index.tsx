import React from "react";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import HeaderDetail from "@site/src/components/HeaderDetail";
import PostDetail from "@site/src/components/PostDetail";
import Footer from "@site/src/components/Footer";

type Props = {
  chidren: React.ReactNode;
};

export default function FooterWrapper({ chidren }: Props): JSX.Element {
  return (
    <MDXProvider components={MDXComponents}>
      <>
        <HeaderDetail />
        <PostDetail />
        <Footer />
        **Heloo**
        {chidren}
      </>
    </MDXProvider>
  );
}
