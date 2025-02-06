import Link from "next/link";
import React from "react";

const AllProduct = () => {
  return (
    <div>
      <p className="mb-3">Display all product</p>
      <Link
        href="products/iphone"
        className="p-2 bg-blue-200 text-gray-700 rounded-md m-2"
      >
        Iphone
      </Link>
      <Link
        href="products/samsung"
        className="p-2 bg-blue-200 text-gray-700 rounded-md m-2"
      >
        Samsung
      </Link>
      <Link
        href="products/apple"
        className="p-2 bg-blue-200 text-gray-700 rounded-md m-2"
      >
        Apple
      </Link>
    </div>
  );
};

export default AllProduct;
