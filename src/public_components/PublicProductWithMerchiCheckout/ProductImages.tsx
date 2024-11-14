import { useState } from "react";
import { productFeatureImageUrl, productNotFoundUrl } from "../utilities";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

interface ProductImageThumbnailsProps {
  activeImgSrc: string;
  images?: any[];
  showPreview: (imageUrl: string) => void;
  flexRow?: boolean;
}

function ProductImageThumbnails(props: ProductImageThumbnailsProps) {
  const { activeImgSrc, images, showPreview, flexRow } = props;
  const maxImages = 7;
  const cappedImages = images ? images.slice(0, maxImages) : [];
  return (
    <div className={`flex flex-row space-x-5`}>
      {cappedImages.map((image: any, index: number) => (
        <div
          className={`w-20 rounded-md cursor-pointer ${
            activeImgSrc === image.viewUrl
              ? "border-2 border-highlight"
              : "border-[0.5px] border-text-gray-500"
          }`}
          key={index}
          onClick={() => showPreview(image.viewUrl)}
        >
          <Image
            className="w-full h-full object-contain rounded-md"
            src={image.viewUrl}
            alt={`${image.name}-thumbnail`}
            width={80}
            height={80}
          />
        </div>
      ))}
    </div>
  );
}

interface Props {
  product: any;
}

export default function ProductImages({ product }: Props) {
  const [previewImgSrc, setPreviewImgSrc] = useState(
    productFeatureImageUrl(product, productNotFoundUrl)
  );

  return (
    <div className="flex flex-col sm:flex-row md:flex-col gap-x-4 h-[400px] sm:h-[500px] items-center">
      <div className="flex flex-grow w-5/6 justify-center items-center">
        <Zoom>
          <div className="max-w-[350px] max-h-[300px] ">
            <img
              className="w-full h-full max-w-[350px] max-h-[300px] object-contain"
              src={previewImgSrc ? previewImgSrc : productNotFoundUrl}
              alt="product images"
            />
          </div>
        </Zoom>
      </div>
      <div className="flex flex-row pr-4 h-20">
        <ProductImageThumbnails
          activeImgSrc={previewImgSrc}
          images={product.images}
          showPreview={setPreviewImgSrc}
        />
      </div>
    </div>
  );
}
