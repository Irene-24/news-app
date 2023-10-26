"use client";

import Image, { ImageProps } from "next/image";
import { SyntheticEvent, useState } from "react";

const fallback = "/images/fallback.svg";
const blurDataUrl = "/images/blurImg.jpg";

export interface FallbackImageProps extends ImageProps {
  fallbackSrc?: string;
  src: string;
  placeholder?: "blur" | "empty";
}

const ImageWithFallback = ({
  alt = "",
  src = "",
  fallbackSrc = fallback,
  blurDataURL = blurDataUrl,
  placeholder = "blur",
  ...props
}: FallbackImageProps) => {
  const [onErrorSrc, setOnErrorSrc] = useState<string | undefined>(undefined);

  const handleOnError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (e?.currentTarget?.src !== fallbackSrc) {
      console.warn(`Image with src = ["${src}"],  could not load`);
      setOnErrorSrc(fallbackSrc);
    }
  };

  return (
    <Image
      onError={(e) => handleOnError(e)}
      onLoadingComplete={(result) => {
        if (!result || result.naturalWidth * result.naturalHeight === 0) {
          setOnErrorSrc(fallbackSrc);
        }
      }}
      alt={alt}
      src={
        onErrorSrc
          ? onErrorSrc
          : src?.startsWith("/images")
          ? src
          : `/api/img-proxy?url=${encodeURIComponent(src)}`
      }
      fill
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
};

export default ImageWithFallback;
