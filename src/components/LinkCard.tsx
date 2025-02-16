import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const EnhancedLinkCard = ({
  title,
  href,
  description,
  color = "primary",
  isExternal = false,
  size = "md",
  variant = "default", // default, gradient, minimal
  className = "",
  icon: Icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternalLink = isExternal || href?.startsWith('http');
  
  // 尺寸相关样式
  const sizeClasses = {
    sm: "p-3 text-sm",
    md: "p-4 text-base",
    lg: "p-5 text-lg",
  }[size];

  // 变体相关样式
  const variantClasses = {
    default: `bg-white dark:bg-gray-800`,
    gradient: `bg-gradient-to-br from-${color}-50 to-${color}-100 dark:from-gray-800 dark:to-gray-900`,
    minimal: "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800",
  }[variant];

  // 图标大小
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }[size];

  return (
    <Link
      href={href}
      isExternal={isExternalLink}
      className="block w-full no-underline group/link"
      color="foreground"
    >
      <Card
        isPressable
        isHoverable
        className={`
          overflow-hidden
          transition-all duration-300
          hover:shadow-lg dark:hover:shadow-gray-800
          ${variantClasses}
          ${className}
          transform hover:-translate-y-1
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardBody className={`
          ${sizeClasses}
          flex items-start justify-between gap-4
          relative
          overflow-hidden
        `}>
          {/* 背景动画效果 */}
          <div className={`
            absolute inset-0 bg-gradient-to-r from-transparent
            via-${color}-100 to-transparent dark:via-${color}-900
            opacity-0 group-hover/link:opacity-10
            -translate-x-full group-hover/link:translate-x-full
            transition-all duration-1000
          `} />

          {/* 内容区域 */}
          <Link
      href={href}
      isExternal={isExternalLink}
      className="block w-full no-underline group/link"
      color="foreground"
    >
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-1">
              {Icon && (
                <Icon 
                  size={iconSize} 
                  className={`text-${color}-500 group-hover/link:text-${color}-600 
                    dark:group-hover/link:text-${color}-400 transition-colors duration-200`}
                />
              )}
              <h3 className={`
                font-semibold text-${color}
                group-hover/link:text-${color}-600 dark:group-hover/link:text-${color}-400
                transition-colors duration-200
              `}>
                {title}
              </h3>
            </div>
            {description && (
              <p className="
                text-gray-600 dark:text-gray-400 text-sm line-clamp-2
                group-hover/link:text-gray-900 dark:group-hover/link:text-gray-200
                transition-colors duration-200
              ">
                {description}
              </p>
            )}
          </div>
          </Link>
          {/* 图标区域 */}
          <div className={`
            flex-shrink-0 transform
            transition-all duration-300
            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
          `}>
            {isExternalLink ? (
              <ExternalLink 
                size={iconSize}
                className={`text-${color}-500 group-hover/link:text-${color}-600 
                  dark:group-hover/link:text-${color}-400`}
              />
            ) : (
              <ArrowRight 
                size={iconSize}
                className={`text-${color}-500 group-hover/link:text-${color}-600 
                  dark:group-hover/link:text-${color}-400`}
              />
            )}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default EnhancedLinkCard;
