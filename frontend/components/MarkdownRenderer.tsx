'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownRendererProps {
  markdown: string;
}

export default function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <div className="markdown-content prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-[var(--accent)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          img: ({ node, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              {...props}
              className="rounded-lg border border-[var(--border)] max-w-full h-auto"
              alt={props.alt || ''}
            />
          ),
          code: ({ node, className, children, ...props }) => {
            const inline = !className;
            return inline ? (
              <code
                className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-[var(--accent)]"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={`${className} block`} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ node, ...props }) => (
            <pre
              className="bg-gray-900 p-4 rounded-lg overflow-x-auto border border-[var(--border)]"
              {...props}
            />
          ),
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2 my-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 my-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-[var(--accent)] pl-4 italic my-4 text-gray-400"
              {...props}
            />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-[var(--border)]" {...props} />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th className="border border-[var(--border)] px-4 py-2 bg-gray-800" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-[var(--border)] px-4 py-2" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>

      <style jsx global>{`
        .markdown-content {
          color: var(--foreground);
        }

        .markdown-content p {
          margin: 1rem 0;
          line-height: 1.7;
        }

        .markdown-content hr {
          border-color: var(--border);
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
}
