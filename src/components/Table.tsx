// /components/EnhancedTable.tsx

import React, { useState, useEffect } from "react";
import clsx from "clsx";

/**
 * Defines the structure for a single column in the table.
 * @template T The type of the data item for a row.
 */
export interface ColumnDef<T> {
  /**
   * The key from the data object to display in this column.
   */
  key: keyof T;
  /**
   * The header label for this column.
   */
  label: string;
  /**
   * An optional custom render function for the cell content.
   * @param item The entire data object for the current row.
   * @returns A React node to be rendered in the cell.
   */
  render?: (item: T) => React.ReactNode;
}

/**
 * Props for the EnhancedTable component.
 * @template T The type of the data item, must include an 'id'.
 */
interface EnhancedTableProps<T> {
  /**
   * An array of data objects to display in the table.
   */
  data: T[];
  /**
   * An array of column definitions that configure the table's structure.
   */
  columns: ColumnDef<T>[];
  /**
   * If true, applies alternating background colors to rows for better readability.
   * @default false
   */
  isStriped?: boolean;
  /**
   * Optional additional CSS classes to apply to the `<table>` element.
   */
  className?: string;
}

/**
 * A modern, responsive, and animated table component.
 * It displays as a standard table on desktop and transforms into a list of cards on mobile.
 * Features staggered entrance animations and clean hover states.
 */
export const EnhancedTable = <T extends { id: string | number }>({
  data,
  columns,
  isStriped = false,
  className,
}: EnhancedTableProps<T>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mount with a slight delay to ensure CSS transitions are applied.
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className={clsx("w-full min-w-[640px] border-collapse text-left", className)}>
        <thead className="hidden md:table-header-group">
          <tr className="border-b border-neutral-200 dark:border-neutral-800">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="sticky top-0 z-10 bg-white/80 p-4 text-sm font-semibold text-neutral-800 backdrop-blur-sm dark:bg-neutral-900/80 dark:text-neutral-200"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((item, rowIndex) => (
            <tr
              key={item.id}
              className={clsx(
                "group transform-gpu transition-all duration-300 ease-in-out",
                // Responsive layout: card on mobile, row on desktop
                "block rounded-lg border p-4 shadow-sm dark:border-neutral-800 md:table-row md:border-b md:p-0 md:shadow-none",
                // Add margin between cards on mobile
                "mb-4 md:mb-0",
                // Striped rows styling
                isStriped && (rowIndex % 2 === 0 ? "bg-white dark:bg-neutral-900" : "bg-neutral-50 dark:bg-neutral-800/50"),
                // Hover state
                "hover:!bg-blue-50 hover:shadow-md dark:hover:!bg-blue-500/10",
                // Entrance animation
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${rowIndex * 50}ms` }}
            >
              {columns.map((column) => (
                <td
                  key={`${item.id}-${String(column.key)}`}
                  className="block p-2 text-right text-sm text-neutral-700 dark:text-neutral-300 md:table-cell md:p-4 md:text-left"
                >
                  {/* Mobile-only label */}
                  <span className="mr-2 font-medium text-neutral-500 md:hidden">{column.label}:</span>
                  {/* Cell content */}
                  {column.render ? column.render(item) : (item[column.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnhancedTable;