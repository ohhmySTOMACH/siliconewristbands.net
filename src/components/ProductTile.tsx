"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: any;
}

export default function ProductTile({ product }: Props) {
  console.log(product, "what here");

  // if no feature image, use the first image in images
  if (!product.featureImage) {
    product.featureImage = product.images[0];
  }

  return (
    <Link
      className="product-box"
      href={`order/${product.id}`}
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
