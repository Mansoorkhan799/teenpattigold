'use client';

import { useEffect } from 'react';

export default function DeferredStyles() {
  useEffect(() => {
    // Since deferred.css is empty, we can skip loading it
    // This component is kept for future use if needed
    // Loading empty CSS files adds unnecessary network requests
    return;
  }, []);
  
  return null;
} 