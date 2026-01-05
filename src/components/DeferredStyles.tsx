'use client';

import { useEffect } from 'react';

export default function DeferredStyles() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    // Check if already loaded
    const existingLink = document.querySelector('link[data-deferred="true"]');
    if (existingLink) return;
    
    // Delay loading to prevent CLS and reduce critical path
    const timer = setTimeout(() => {
      if (typeof document === 'undefined') return;
      
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = '/css/deferred.css';
      linkEl.type = 'text/css';
      linkEl.media = 'print';
      linkEl.setAttribute('data-deferred', 'true');
      linkEl.onload = () => {
        if (linkEl.media !== 'all') {
          linkEl.media = 'all';
        }
      };
      
      document.head.appendChild(linkEl);
    }, 200); // Delay to reduce critical path latency
    
    return () => {
      clearTimeout(timer);
      if (typeof document !== 'undefined') {
        const linkEl = document.querySelector('link[data-deferred="true"]');
        if (linkEl && document.head.contains(linkEl)) {
          document.head.removeChild(linkEl);
        }
      }
    };
  }, []);
  
  return null;
} 