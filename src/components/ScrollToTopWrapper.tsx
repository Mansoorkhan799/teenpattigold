'use client';

import dynamic from 'next/dynamic';

// Client component wrapper for dynamic import with ssr: false
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
  ssr: false, // Client-only component
});

export default function ScrollToTopWrapper() {
  return <ScrollToTop />;
}
