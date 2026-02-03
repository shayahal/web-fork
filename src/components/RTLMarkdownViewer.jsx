
// src/components/RTLMarkdownViewer.jsx
import React, { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';

const RTLMarkdownViewer = ({ content, metadata }) => {
  const [direction, setDirection] = useState(metadata.direction || 'auto');
  
  // Custom components for MDX
  const components = {
    // You can customize how different markdown elements are rendered
    h1: (props) => <h1 className="text-3xl font-bold my-4 font-hebrew" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold my-3 font-hebrew" {...props} />,
    p: (props) => <p className="my-2 font-hebrew" {...props} />,
    // Add more custom components as needed
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-hebrew">
      <div className="mb-4 flex justify-end space-x-2">
        <button
          onClick={() => setDirection('ltr')}
          className={`px-3 py-1 rounded ${direction === 'ltr' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          LTR
        </button>
        <button
          onClick={() => setDirection('rtl')}
          className={`px-3 py-1 rounded ${direction === 'rtl' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          RTL
        </button>
        <button
          onClick={() => setDirection('auto')}
          className={`px-3 py-1 rounded ${direction === 'auto' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Auto
        </button>
      </div>

      <article
        className={`prose lg:prose-xl max-w-none font-hebrew ${direction === 'rtl' ? 'text-right' : ''}`}
        dir={direction}
      >
        <MDXRemote {...content} components={components} />
      </article>
    </div>
  );
};

export default RTLMarkdownViewer;