// /components/EnhancedCard.tsx

import React, { useState, useEffect } from "react";
import clsx from "clsx";

/**
 * Defines the props for the EnhancedCard component.
 */
interface EnhancedCardProps {
  /**
   * The title displayed in the card's header.
   */
  title: string;
  /**
   * The main content of the card.
   */
  children: React.ReactNode;
  /**
   * Optional content to be displayed in the card's footer.
   * The footer is only rendered if this prop is provided.
   */
  footerContent?: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the card's root element.
   */
  className?: string;
}

/**
 * A modern, animated, and responsive card component built with TailwindCSS.
 * It features a subtle entrance animation, hover and active states, and a clean design.
 */
export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  title,
  children,
  footerContent,
  className,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the initial render to trigger the entrance animation.
    setIsMounted(true);
  }, []);

  return (
    <div
      className={clsx(
        // Base Styles
        "w-full overflow-hidden rounded-xl border bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900",
        
        // Transitions for all animations
        "transition-all duration-300 ease-in-out",
        
        // Entrance Animation (controlled by isMounted state)
        {
          "opacity-0 translate-y-4": !isMounted,
          "opacity-100 translate-y-0": isMounted,
        },
        
        // Interactive States
        "hover:shadow-xl hover:-translate-y-1 active:scale-[0.99]",
        
        // External classes
        className
      )}
    >
      {/* Card Header */}
      <div className="border-b border-neutral-200 p-4 dark:border-neutral-800 sm:p-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 sm:text-xl">
          {title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-4 text-neutral-600 dark:text-neutral-300 sm:p-6">
        {children}
      </div>

      {/* Card Footer (Conditionally Rendered) */}
      {footerContent && (
        <div className="border-t border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-white/[0.03]">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default EnhancedCard;