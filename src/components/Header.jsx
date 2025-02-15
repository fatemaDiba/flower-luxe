"use client"; //pathname nitesi tai

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const navList = (
    <>
      <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
        <li>Home</li>
      </Link>
      <Link
        href="/add-flowers"
        className={`link ${pathname === "/add-flowers" ? "active" : ""}`}
      >
        <li>Add Flower</li>
      </Link>
      <Link
        href="/all-flowers"
        className={`link ${pathname === "/all-flowers" ? "active" : ""}`}
      >
        <li>All Flowers</li>
      </Link>
    </>
  );

  return (
    <div className="fixed z-50 top-0 bg-white  w-full">
      <div className="navbar w-11/12 mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-3 dropdown-content font-semibold bg-base-100 rounded-box z-[1] mt-6 w-36 p-4 shadow"
            >
              {navList}
            </ul>
          </div>
          <h2 className="font-bold text-xl md:text-3xl text-purple-900">
            Flower Luxe
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 md:text-base font-semibold">
            {navList}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="border rounded-lg font-semibold md:px-4 md:py-2 py-2 px-3 text-sm md:text-base bg-purple-800 text-white">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
