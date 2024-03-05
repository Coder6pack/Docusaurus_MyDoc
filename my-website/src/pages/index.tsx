import React from "react";
import MainLayout from "../layouts/MainLayout";
import Link from "@docusaurus/Link";
import Svg from "../constant/Svg";

export default function index() {
  return (
    <div>
      <MainLayout>
        <div className="bg-cyan-400/60 text-center py-5 h-48 flex items-center justify-center">
          <div className="">
            <div className="uppercase text-4xl mb-6">
              welcome to my document 😊
            </div>
            <Link
              className="font-bold p-3 rounded-md uppercase text-lg bg-gray-100 border border-gray-400 hover:text-orange-500 duration-500 hover:no-underline"
              to="/docs/intro"
            >
              Let's learn my Doc
            </Link>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="basis-1/5 h-full">
            {Svg.svg1}
            <div className="text-center">
              <div className="my-4 font-bold text-lg">Easy to use</div>
              <div className="">
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
              </div>
            </div>
          </div>
          <div className="basis-1/5 h-full mx-10">
            {Svg.svg2}
            <div className="text-center">
              <div className="my-4 font-bold text-lg">
                Focus on What Matters
              </div>
              <div className="">
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
              </div>
            </div>
          </div>
          <div className="basis-1/5 h-full">
            {Svg.svg3}
            <div className="text-center">
              <div className="my-4 font-bold text-lg">Powered by React</div>
              <div className="">
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
