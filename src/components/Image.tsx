'use client';
import { IKImage } from 'imagekitio-next';
import React from 'react';
import { StaticImageData } from 'next/image';

type ImageType = {
  path: string | StaticImageData;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  priority?: boolean;
  transformProps?: boolean;
  sizes?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  style?: React.CSSProperties;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image({
  path,
  width,
  height,
  alt,
  className,
  transformProps,
  priority,
  sizes,
  fetchPriority,
  style,
}: ImageType) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={typeof path === 'string' ? path : path.src}
      {...(transformProps
        ? {
            transformation: [
              {
                width: `${width}`,
                height: `${height}`,
              },
            ],
          }
        : { width, height })}
      lqip={{ active: true, quality: 100 }} 
      width={width}
      height={height}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      fetchPriority={fetchPriority}
      style={style}
    />
  );
}
