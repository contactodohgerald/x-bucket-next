import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Header = ({ children }: Props) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-gray-900 lg:px-24">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link href={"./"}>
                <Image
                  src="/used/Logo.svg"
                  alt="Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  style={{ width: 100, height: 24 }}
                  priority
                />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <Link href={"about"}>About</Link>
                </li>
                <li>
                  <Link href={"pricing"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"contact"}>Contact</Link>
                </li>
                <li>
                  <Link
                    href={'login'}
                    className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center rounded-full dark:hover:bg-blue-500 dark:bg-blue-700"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}

          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <Link href={"about"}>About</Link>
            </li>
            <li>
              <Link href={"pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"contact"}>Contact</Link>
            </li>
            <li>
              <a
                onClick={() => window.login.showModal()}
                className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center rounded-full dark:hover:bg-blue-500 dark:bg-blue-700"
              >
                Login
              </a>
            </li>
            <li>
              <a
                onClick={() => window.login.showModal()}
                className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center rounded-full dark:hover:bg-blue-500 dark:bg-blue-700"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
