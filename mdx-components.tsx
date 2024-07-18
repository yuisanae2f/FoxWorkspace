import { Button } from "@/components/ui/button";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mb-2 titlesX h2-style">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl mb-2 h2-style">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl md:text-2xl h3-style">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg md:text-xl h4-style">{children}</h4>,
    img: (props) => (
      <div className="max-w-full mb-4">
        <Image
          {...(props as ImageProps)}
          layout="responsive"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1024px"
          width={700}
          height={400}
          alt={props.alt || ""}
        />
      </div>
    ),
    ul: ({ children }) => <ul className="mb-4 list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-disc list-inside">{children}</ol>,
    a: ({ children }) => (
      <a className="mb-4" style={{ marginBottom: "1rem" }}>
        {children}
      </a>
    ),
    li: ({ children }) => (
      <li className="mb-2" style={{ marginBottom: "0.5rem" }}>
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-gray-100 border-l-4 border-gray-300 p-2 pl-4 rounded mb-8 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 custom-style">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-200 p-1 px-2 rounded dark:bg-gray-700 dark:text-gray-100 custom-style">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-2 rounded overflow-x-auto dark:bg-gray-800 dark:text-gray-100 custom-style">
        {children}
      </pre>
    ),
    ...components,
  };
}
