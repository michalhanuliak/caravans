import { default as NextImage } from "next/image";
import { ImageProps } from "next/image";
import { useState } from "react";
import ImageNotFound from "../../../assets/image-not-found.png";

export function Image({ src, ...props }: ImageProps) {
  const [image, setImage] = useState(src);
  return (
    <NextImage
      src={image}
      {...props}
      onError={() => {
        setImage(ImageNotFound);
      }}
    />
  );
}
