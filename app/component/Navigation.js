"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();
  //   console.log(pathname);
  return (
    <div className="text-center py-5 bg-slate-100 mb-5">
      <Link
        href="/"
        className={
          pathname === "/" ? "font-bold text-blue-600" : "text-blue-400 "
        }
      >
        Home
      </Link>
      <Link
        href="/about"
        className={` ${
          pathname === "/about" ? "font-bold text-blue-600" : "text-blue-400 "
        } text-blue-400 ml-4 mt-4 mb-4 p-2`}
      >
        About
      </Link>
      <Link
        href="/products"
        className={` ${
          pathname === "/products"
            ? "font-bold text-blue-600"
            : "text-blue-400 "
        } text-blue-400 ml-4 mt-4 mb-4 p-2`}
      >
        Products
      </Link>
      <Link
        href="/register"
        className={` ${
          pathname === "/products"
            ? "font-bold text-blue-600"
            : "text-blue-400 "
        } text-blue-400 ml-4 mt-4 mb-4 p-2`}
      >
        Register
      </Link>
    </div>
  );
};

export default Navigation;
