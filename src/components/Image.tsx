// ImageComponent.tsx
import React from 'react';
import { Image } from '@heroui/image';

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  loading?: 'eager' | 'lazy';
  fallbackSrc?: string;
  isBlurred?: boolean;
  isZoomed?: boolean;
  removeWrapper?: boolean;
  disableSkeleton?: boolean;
  classNames?: Partial<Record<'img' | 'wrapper' | 'zoomedWrapper' | 'blurredImg', string>>;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  radius = 'xl',
  shadow = 'none',
  loading = 'lazy',
  fallbackSrc,
  isBlurred = false,
  isZoomed = false,
  removeWrapper = false,
  disableSkeleton = false,
  classNames,
  onLoad,
  onError,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      shadow={shadow}
      loading={loading}
      fallbackSrc={fallbackSrc}
      isBlurred={isBlurred}
      isZoomed={isZoomed}
      removeWrapper={removeWrapper}
      disableSkeleton={disableSkeleton}
      classNames={{
        img: `transition-transform duration-300 hover:scale-105 ${classNames?.img || ''}`,
        wrapper: `shadow-${shadow} rounded-${radius} ${classNames?.wrapper || ''}`,
        zoomedWrapper: classNames?.zoomedWrapper || '',
        blurredImg: classNames?.blurredImg || '',
      }}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default ImageComponent;