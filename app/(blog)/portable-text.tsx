/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="mb-4 text-3xl font-bold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mt-4 mb-4 text-2xl font-semibold">{children}</h2>
      ),
      h5: ({ children }) => (
        <h5 className="mt-4 mb-4 text-base font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mt-3 mb-3 text-sm font-medium">{children}</h6>
      ),
    },

    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
