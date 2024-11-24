"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  products: any;
}

interface ProductProps {
  product: any;
}

function ProductGrids({ product }: ProductProps) {
  console.log(product, "what here");

  // if no feature image, use the first image in images
  if (!product.featureImage) {
    product.featureImage = product.images[0];
  }

  return (
    <Link
      className="product-box"
      href={`products/${product.id}`}
      key={`product-${product.id}`}
    >
      <Image
        width={197}
        height={150}
        src={product?.featureImage?.viewUrl}
        alt=""
        priority
      />
      <div>{product.name}</div>
    </Link>
  );
}

export default function ProductTile({ products }: Props) {
  return (
    <div className="container px-4 sm:px-16">
      <h2 className="text-text-blue text-2xl font-semibold mt-4">
        Select a Wristband from the Choices Below
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {products &&
          products.map((product: any) => (
            <ProductGrids key={`product-${product.id}`} product={product} />
          ))}
      </div>
    </div>
  );
}
