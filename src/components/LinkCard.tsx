// /components/EnhancedLinkCard.tsx

import React from "react";
import clsx from "clsx";

interface EnhancedLinkCardProps {
  /**
   * The main text or title displayed on the card.
   */
  title: string;
  /**
   * The URL that the card links to.
   */
  href: string;
  /**
   * Optional additional CSS classes to apply to the card's root element.
   */
  className?: string;
}

/**
 * A reusable SVG icon component for the link arrow.
 */
const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

/**
 * A card component that acts as a single, clickable link. It features a clean
 * design with responsive text and padding, and a subtle, interactive hover animation
 * on both the card and its icon.
 */
export const EnhancedLinkCard: React.FC<EnhancedLinkCardProps> = ({
  title,
  href,
  className,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        // Add `group` to enable `group-hover` variants on child elements
        "group",
        // Layout and Sizing
        "block flex items-center justify-between gap-4 p-4 sm:p-6",
        // Appearance
        "rounded-xl border bg-white shadow-md dark:border-neutral-800 dark:bg-neutral-900",
        // Transitions for all animations
        "transition-all duration-300 ease-in-out",
        // Interactive States
        "hover:border-blue-500/30 hover:bg-neutral-50 hover:shadow-lg dark:hover:border-blue-500/40 dark:hover:bg-neutral-800/50",
        "active:scale-[0.98]",
        // External classes
        className
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 sm:text-xl">
        {title}
      </h3>
      <ArrowIcon
        className={clsx(
          "h-6 w-6 flex-shrink-0 text-neutral-400 dark:text-neutral-500",
          // Transition for the icon's movement and color change
          "transition-all duration-300 ease-in-out",
          // Animate icon on parent (`group`) hover
          "group-hover:text-blue-500",
          "group-hover:translate-x-1 group-hover:-translate-y-1"
        )}
      />
    </a>
  );
};

export default EnhancedLinkCard;