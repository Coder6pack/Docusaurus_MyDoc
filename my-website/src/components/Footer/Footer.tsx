import Link from "@docusaurus/Link";
import React from "react";

const listName = {
  document: ["Logic math", "Frontend", "Mobile", "Database"],
  share: ["Roadmap Frontend", "English Docs", "Cheatsheet", "Handbook", "Blog"],
  contact: ["Facebook", "instagram", "Github", "LinkedIn", "Email"],
};

interface Props {
  list: string[];
}
export default function Footer() {
  const RenderListFooter = ({ list }: Props) => {
    return list.map((val) => (
      <li className="mt-5">
        <Link
          to=""
          className="hover:text-orange-400 duration-500
   hover:no-underline cursor-pointer text-lg"
        >
          {val}
        </Link>
      </li>
    ));
  };
  return (
    <footer>
      <div className=" mt-10 bg-gray-400 py-6">
        <div className="flex justify-center">
          <ul>
            <li className="mb-5 uppercase text-xl font-bold">Document</li>
            <RenderListFooter list={listName.document} />
          </ul>
          <ul className="mx-60">
            <li className="mb-5 uppercase text-xl font-bold">Share</li>
            <RenderListFooter list={listName.share} />
          </ul>
          <ul>
            <li className="mb-5 uppercase text-xl font-bold">Contact</li>
            <RenderListFooter list={listName.contact} />
          </ul>
        </div>
        <div className="text-center text-xl">
          <div className="mt-2">
            Thiết kế và phát triển bởi{" "}
            <span className="text-orange-500 font-bold">HNCode</span>
          </div>
          <div className="mt-2">Cập nhật lần cuối: 08:18:40 27/2/2024</div>
          <div className="mt-2">Copyright © 2024 | All rights reserved</div>
          <div className="mt-2">hoainhondocs.dev</div>
        </div>
      </div>
    </footer>
  );
}
