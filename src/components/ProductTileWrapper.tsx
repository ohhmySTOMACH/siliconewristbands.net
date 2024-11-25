"use client";
import ProductTile from "@/components/ProductTile";

function ErrorFallback() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <h2 className="text-red-800 font-semibold">Temporarily Unavailable</h2>
        <p className="text-red-600">
          We&#39;re experiencing technical difficulties. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default function ProductTileWrapper({ products }: { products: any[] }) {
  if (!Array.isArray(products)) {
    console.error("Invalid products data:", products);
    return <ErrorFallback />;
  }

  return <ProductTile products={products} />;
}
