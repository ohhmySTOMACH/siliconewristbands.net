import * as React from "react";

interface Props {
  children: any;
}

export default function Banner({ children }: Props) {
  return (
    <div className="banner px-2 sm:px-16">
      <div className="banner-inner">{children}</div>
    </div>
  );
}
