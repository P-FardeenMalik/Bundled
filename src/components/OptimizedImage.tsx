import React from 'react';
import NextImage, { ImageProps } from 'next/image';

// Create a clean interface that excludes problematic props
interface OptimizedImageProps extends Omit<ImageProps, 'fetchPriority'> {
  fetchPriority?: string; // Add fetchPriority as an optional property
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = (props) => {
  // Create a clean props object with only the props we want to pass
  const { fetchPriority, ...filteredProps } = props; // Explicitly filter out fetchPriority

  const imageProps: any = {
    src: filteredProps.src,
    alt: filteredProps.alt,
    className: filteredProps.className,
    style: filteredProps.style,
    sizes: filteredProps.sizes,
    quality: filteredProps.quality,
    placeholder: filteredProps.placeholder,
    blurDataURL: filteredProps.blurDataURL,
    unoptimized: filteredProps.unoptimized,
    onLoad: filteredProps.onLoad,
    onError: filteredProps.onError,
    loading: filteredProps.loading,
  };

  // Add width/height or fill
  if (filteredProps.fill) {
    imageProps.fill = true;
  } else {
    imageProps.width = filteredProps.width;
    imageProps.height = filteredProps.height;
  }

  // Add priority if specified
  if (filteredProps.priority) {
    imageProps.priority = true;
  }

  return <NextImage {...imageProps} />;
};

export default OptimizedImage;
