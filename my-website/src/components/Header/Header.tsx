import Link from "@docusaurus/Link";
import React from "react";

export default function Header() {
  return (
    <header className="container pt-6 mb-10">
      <div className="grid grid-cols-12">
        <div className="col-span-4 text-left">
          <Link to="/" className="flex items-center hover:no-underline">
            <img
              src="https://www.thanhnamnguyen.dev/img/logo/LyokoLogo-Face.png"
              alt="img"
              className="w-11 h-11 object-cover"
            />
            <div className="font-bold ml-1 text-lg">hoainhondocs.dev</div>
          </Link>
        </div>
        <div className="col-span-8">
          <ul className="flex items-center">
            <li className="text-lg font-medium pr-10 flex-shrink-0">
              <Link to="/docs/intro">Tutorial</Link>
            </li>
            <li className="text-lg font-medium pr-10 flex-shrink-0">
              <Link to="">Tools</Link>
            </li>
            <li className="text-lg font-medium pr-10 flex-shrink-0">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-lg font-medium pr-10 flex-shrink-0">
              <Link to="">About me</Link>
            </li>
            <li className="text-lg font-medium flex items-center pr-2">
              <svg
                viewBox="0 0 48 48"
                width="24"
                height="24"
                className="w-6 h-6"
                id="sun"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M0 38h38V0H0v38Z"></path>
                  </clipPath>
                </defs>
                <g
                  fill="#ffac33"
                  clip-path="url(#a)"
                  transform="matrix(1.25 0 0 -1.25 0 47.5)"
                >
                  <path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"></path>
                </g>
              </svg>
            </li>
            <li className="text-lg font-medium flex-grow-0">
              <div className="flex items-center border border-black p-2 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  name="search"
                  placeholder="Search here..."
                  className="text-gray-500 ml-2 outline-none"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
