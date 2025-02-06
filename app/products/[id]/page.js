import React from "react";

const SingleProduct = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <p>SingleProduct {id}</p>
    </div>
  );
};

export default SingleProduct;
