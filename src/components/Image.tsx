// /components/EnhancedImage.tsx

import React, { useState, useEffect } from "react";
import clsx from "clsx";

type LoadingStatus = "loading" | "loaded" | "error";

interface EnhancedImageProps {
  /**
   * The primary source URL for the image.
   */
  src: string;
  /**
   * The alternative text for the image, crucial for accessibility.
   */
  alt: string;
  /**
   * An optional fallback image source to use if the primary `src` fails to load.
   */
  fallbackSrc?: string;
  /**
   * The CSS aspect-ratio property for the image container (e.g., '16/9', '4/3', '1/1').
   * Defaults to '16/9'.
   */
  aspectRatio?: string;
  /**
   * Optional additional CSS classes to apply to the image wrapper element.
   */
  className?: string;
}

/**
 * An SVG icon displayed when the image fails to load.
 */
const ImageIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

/**
 * A responsive, animated image component with loading skeleton, fade-in effect,
 * hover zoom, and fallback support.
 */
export const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  fallbackSrc,
  aspectRatio = "16/9",
  className,
}) => {
  const [status, setStatus] = useState<LoadingStatus>("loading");
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  useEffect(() => {
    setStatus("loading");
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setStatus("loaded");
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      // If there's a fallback and we aren't already trying it, switch to it.
      setCurrentSrc(fallbackSrc);
    } else {
      // If no fallback or fallback also failed, set status to error.
      setStatus("error");
    }
  };

  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-lg bg-neutral-200 shadow-md dark:bg-neutral-800",
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Skeleton Loader */}
      {status === "loading" && (
        <div className="absolute inset-0 animate-pulse bg-neutral-300 dark:bg-neutral-700" />
      )}

      {/* Error State Icon */}
      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
          <ImageIcon className="h-12 w-12 text-neutral-400 dark:text-neutral-600" />
        </div>
      )}

      {/* The actual image */}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={clsx(
          "absolute inset-0 h-full w-full object-cover",
          // Smooth transition for opacity and transform
          "transition-all duration-500 ease-in-out",
          // Hover effect: zoom in
          "group-hover:scale-105",
          // Fade-in effect on load
        )}
      />
    </div>
  );
};

export default EnhancedImage;