import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

const Card = ({
  title,
  subtitle,
  children,
  footer,
  shadow = "md",
  radius = "lg",
  variant = "default", // default, gradient, glass, minimal
  color = "primary",
  size = "md",
  className = "",
  isHoverable = true,
  isPressable = false,
  isBlurred = false,
  showAnimation = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // 尺寸相关样式
  const sizeClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-5"
  }[size];

  // 变体相关样式
  const variantClasses = {
    default: "bg-white dark:bg-gray-800",
    gradient: `bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-gray-800 dark:to-gray-900`,
    glass: "bg-white/70 dark:bg-gray-800/70 backdrop-blur-md",
    minimal: "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
  }[variant];

  // 动画相关类
  const animationClasses = showAnimation ? `
    transform transition-all duration-300 ease-in-out
    ${isHovered ? 'scale-[1.02] -translate-y-1' : 'scale-100 translate-y-0'}
  ` : '';

  return (
    <Card
      isHoverable={isHoverable}
      isPressable={isPressable}
      isBlurred={isBlurred}
      className={`
        overflow-hidden
        ${variantClasses}
        ${animationClasses}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 卡片头部 */}
      {title && (
        <CardHeader className={`
          ${sizeClasses}
          flex flex-col gap-1
          border-b border-gray-100 dark:border-gray-700
        `}>
          <h3 className={`
            font-semibold text-${color}-600 dark:text-${color}-400
            ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'}
          `}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {subtitle}
            </p>
          )}
        </CardHeader>
      )}

      {/* 卡片内容 */}
      <CardBody className={sizeClasses}>
        <div className="relative">
          {/* 动画背景效果 */}
          {showAnimation && isHovered && (
            <div className={`
              absolute inset-0 bg-gradient-to-r 
              from-transparent via-${color}-100/20 to-transparent
              dark:via-${color}-900/20
              -translate-x-full animate-shimmer
            `} />
          )}
          {children}
        </div>
      </CardBody>

      {/* 卡片底部 */}
      {footer && (
        <CardFooter className={`
          ${sizeClasses}
          border-t border-gray-100 dark:border-gray-700
          ${isBlurred ? 'backdrop-blur-md bg-white/50 dark:bg-black/50' : ''}
        `}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default Card;
