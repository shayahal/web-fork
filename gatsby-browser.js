import './src/css/index.css';

// Performance optimizations
export const onRouteUpdate = () => {
  // Preload critical resources
  if (typeof window !== 'undefined') {
    // Preload next page resources
    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      });
    });
  }
};

// Disable animations on slow connections
export const onClientEntry = () => {
  if (typeof window !== 'undefined' && 'connection' in navigator) {
    const connection = navigator.connection;
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      document.documentElement.classList.add('reduce-motion');
    }
  }
};
