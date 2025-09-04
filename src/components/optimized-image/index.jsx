import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const OptimizedImage = ({ src, alt, className = '', ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 300
            quality: 85
            formats: [AUTO, WEBP, AVIF]
          )
          original {
            src
          }
        }
      }
    }
  `);

  // Find the image by matching the src
  const imageNode = data.allImageSharp.nodes.find(node => 
    node.original.src.includes(src.split('/').pop())
  );

  if (imageNode) {
    const image = getImage(imageNode);
    return (
      <GatsbyImage
        image={image}
        alt={alt}
        className={className}
        loading="lazy"
        {...props}
      />
    );
  }

  // Fallback to regular img tag if not found
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default OptimizedImage;