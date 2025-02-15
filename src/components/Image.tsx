import { useState, useCallback } from "react";
import { Image } from "@heroui/image";

const EnhancedImage = ({
  src,
  alt,
  width,
  height,
  radius = "lg",
  shadow = "md",
  isBlurred = true,
  isZoomed = true,
  className = "",
  fallbackSrc = "/api/placeholder/400/300",
  caption,
  aspectRatio = "auto",
  lightbox = true,
  animation = "fade", // fade, scale, slide
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 处理图片加载完成
  const handleLoad = useCallback((e) => {
    setIsLoaded(true);
    setIsError(false);
  }, []);

  // 处理图片加载错误
  const handleError = useCallback(() => {
    setIsError(true);
    setIsLoaded(true);
  }, []);

  // 获取动画类名
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-300";
    switch (animation) {
      case "scale":
        return `${baseClasses} transform scale-95 opacity-0 ${isLoaded ? "scale-100 opacity-100" : ""}`;
      case "slide":
        return `${baseClasses} transform translate-y-4 opacity-0 ${isLoaded ? "translate-y-0 opacity-100" : ""}`;
      case "fade":
      default:
        return `${baseClasses} opacity-0 ${isLoaded ? "opacity-100" : ""}`;
    }
  };

  return (
    <div className="relative group">
      {/* 主图片容器 */}
      <div 
        className={`
          relative overflow-hidden
          ${shadow === "sm" ? "shadow-sm" : shadow === "md" ? "shadow-md" : shadow === "lg" ? "shadow-lg" : ""}
          ${radius === "none" ? "" : `rounded-${radius}`}
          ${className}
        `}
        style={{ aspectRatio }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 加载动画 */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        )}

        {/* 主图片 */}
        <Image
          src={isError ? fallbackSrc : src}
          alt={alt}
          width={width}
          height={height}
          isBlurred={isBlurred}
          isZoomed={isZoomed && isHovered}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            w-full h-full object-cover
            ${getAnimationClasses()}
            ${lightbox ? "cursor-zoom-in" : ""}
          `}
          onClick={() => lightbox && setIsLightboxOpen(true)}
        />

        {/* 悬停效果 */}
        <div className={`
          absolute inset-0 bg-black bg-opacity-0 
          transition-opacity duration-300
          group-hover:bg-opacity-10
          pointer-events-none
        `} />

        {/* 图片说明 */}
        {caption && (
          <div className={`
            absolute bottom-0 left-0 right-0
            bg-gradient-to-t from-black to-transparent
            p-4 text-white
            transform translate-y-full
            transition-transform duration-300
            group-hover:translate-y-0
          `}>
            <p className="text-sm">{caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              width={width * 1.5}
              height={height * 1.5}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedImage;
