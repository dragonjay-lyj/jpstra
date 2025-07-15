// /components/TestimonyCard.tsx

import React, { useState, useEffect } from "react";
import clsx from "clsx";

// --- TYPE DEFINITIONS ---
export interface TestimonyData {
  id: number;
  handleName: string;
  age: string;
  gender: string;
  occupation: string;
  residence: string;
  title: string;
  bodyHtml: string;
  operatorComment: string;
}

interface TestimonyCardProps {
  data: TestimonyData;
  className?: string;
}

// --- MAIN COMPONENT ---
export const TestimonyCard: React.FC<TestimonyCardProps> = ({ data, className }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return null;
  }

  const metaItems = [
    { label: "网名", value: data.handleName },
    { label: "年龄", value: data.age },
    { label: "性別", value: data.gender },
    { label: "职业", value: data.occupation },
  ];

  return (
    <article
      className={clsx(
        "w-full max-w-4xl overflow-hidden rounded-2xl border bg-white shadow-lg transition-all duration-500 ease-in-out dark:border-neutral-800 dark:bg-neutral-900",
        isMounted ? "opacity-100 translate-y-0" : " translate-y-5",
        className
      )}
    >
      {/* Card Header */}
      <header className="border-b p-4 dark:border-neutral-800 sm:p-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-2xl">
            {data.title}
          </h2>
          <span className="ml-4 flex-shrink-0 text-sm font-medium text-neutral-500">
            証言 {data.id}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        {/* Meta Info Grid */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-b pb-4 dark:border-neutral-800 md:grid-cols-4">
          {metaItems.map((item, index) => (
            <div
              key={item.label}
              className="transform-gpu transition-all duration-500"
              style={{ transitionDelay: `${100 + index * 50}ms` }}
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                {item.label}
              </dt>
              <dd className="mt-1 text-base text-neutral-800 dark:text-neutral-200">{item.value}</dd>
            </div>
          ))}
        </dl>

        {/* Testimony Body */}
        <div
          className={clsx(
            "prose prose-neutral mt-6 max-w-none dark:prose-invert",
            // Prose styles for p, blockquote, etc.
            "prose-p:leading-relaxed prose-blockquote:border-blue-500 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400"
          )}
          // This is safe as long as the HTML source is trusted (e.g., from a CMS).
          dangerouslySetInnerHTML={{ __html: data.bodyHtml }}
        />
      </div>

      {/* Operator Comment Footer */}
      {data.operatorComment && (
        <footer className="border-t bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-white/[0.03] sm:p-6">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-300">运营者回复</h4>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{data.operatorComment}</p>
        </footer>
      )}
    </article>
  );
};

export default TestimonyCard;