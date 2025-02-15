import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableColumn, 
  TableRow, 
  TableCell 
} from "@heroui/table";
import { Image } from "@heroui/image";

// 增强版表格组件，带有更多动效和功能
const EnhancedTable = ({ 
  data, 
  columns,
  shadow = "sm",
  isStriped = true,
  isCompact = false,
  fullWidth = true,
  darkMode = false,
  animationLevel = "medium" // none, subtle, medium, high
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(darkMode ? 'dark' : 'light');

  // 监听暗黑模式变化
  useEffect(() => {
    setCurrentTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // 表格可见性动画
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 获取适当的动画类
  const getAnimationClasses = () => {
    switch (animationLevel) {
      case "none":
        return "";
      case "subtle":
        return "transition-all duration-200";
      case "high":
        return "transition-all duration-500 transform";
      case "medium":
      default:
        return "transition-all duration-300";
    }
  };

  // 行悬停动画
  const getRowHoverClasses = () => {
    if (animationLevel === "none") return "";
    
    let baseClasses = "transition-all";
    
    switch (animationLevel) {
      case "subtle":
        return `${baseClasses} duration-200 hover:bg-opacity-10 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-30`;
      case "high":
        return `${baseClasses} duration-300 hover:bg-opacity-15 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:bg-opacity-50 hover:shadow-md transform hover:-translate-y-1`;
      case "medium":
      default:
        return `${baseClasses} duration-200 hover:bg-opacity-10 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:bg-opacity-40`;
    }
  };

  // 处理单元格内容渲染
  const renderCellContent = (content, column, rowIndex) => {
    // 检查是否为图片
    if (column.type === "image" && content) {
      const imageAnimClass = animationLevel === "none" ? "" :
                            animationLevel === "subtle" ? "transition-transform duration-300 hover:scale-[1.02]" :
                            animationLevel === "high" ? "transition-all duration-500 hover:scale-110 hover:shadow-xl" :
                            "transition-transform duration-300 hover:scale-105";
                            
      return (
        <div className="relative overflow-hidden rounded-lg group">
          <Image
            src={content}
            alt={`Image in ${column.key}`}
            width={280}
            height={216}
            className={`w-full h-auto ${imageAnimClass}`}
            isZoomed={animationLevel !== "none"}
          />
          {animationLevel !== "none" && animationLevel !== "subtle" && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
          )}
        </div>
      );
    }
    
    // 文本内容支持换行
    if (typeof content === 'string' && content.includes('<br>')) {
      const textAnimClass = animationLevel === "none" ? "" :
                         animationLevel === "subtle" ? "transition-colors duration-200" :
                         animationLevel === "high" ? "transition-all duration-300" :
                         "transition-colors duration-200";
                         
      return (
        <div className={`${textAnimClass} ${hoveredRow === rowIndex ? 'text-black dark:text-white' : ''}`}>
          {content.split('<br>').map((text, i) => (
            <React.Fragment key={i}>
              {text}
              {i < content.split('<br>').length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      );
    }
    
    return content;
  };

  const tableClasses = {
    base: `custom-table-wrapper ${getAnimationClasses()} ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    table: "min-w-full",
    thead: `${animationLevel !== "none" ? "sticky top-0 z-10 backdrop-blur-sm bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90" : ""}`,
    tbody: "",
    tr: `group ${getRowHoverClasses()}`,
    th: `text-left py-3 px-4 font-semibold ${currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`,
    td: "py-3 px-4 align-top",
  };

  return (
    <div className={`w-full overflow-x-auto rounded-lg ${shadow === 'sm' ? 'shadow-sm' : shadow === 'md' ? 'shadow-md' : shadow === 'lg' ? 'shadow-lg' : ''} ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <Table
        shadow="none" // 我们自己处理阴影
        isStriped={isStriped}
        isCompact={isCompact}
        fullWidth={fullWidth}
        classNames={tableClasses}
        aria-label="Enhanced custom table with animations"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn 
              key={column.key} 
              align={column.align || "start"}
              className={`text-sm md:text-base ${animationLevel !== "none" ? "transition-colors duration-300" : ""}`}
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow 
              key={rowIndex}
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`border-b ${currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'} last:border-0`}
            >
              {columns.map((column) => (
                <TableCell 
                  key={`${rowIndex}-${column.key}`}
                  className={`${column.type === "image" ? "w-[280px] md:w-[280px] sm:w-full" : ""} text-sm md:text-base`}
                >
                  {renderCellContent(row[column.key], column, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnhancedTable;

