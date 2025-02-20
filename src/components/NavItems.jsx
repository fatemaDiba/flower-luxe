"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
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

  return navList;
};

export default NavItems;
