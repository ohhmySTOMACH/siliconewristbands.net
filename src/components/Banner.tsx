"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: any;
}

export default function Banner({ children }: Props) {
  const currentPath = usePathname();

  return (
    <>
      {currentPath === "/" ? (
        <div className="banner items-center justify-center px-2 sm:px-16">
          <div className="banner-inner">{children}</div>
        </div>
      ) : (
        <div className="banner items-center px-2 sm:px-16">
          <div className="banner-inner container">{children}</div>
        </div>
      )}
    </>
  );
}
