
'use client';

import { useEffect } from 'react';

const Metadata = ({ title, description }) => {
  useEffect(() => {
  
    document.title = title;


    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
     
      console.warn('Meta description tag not found');
    }
  }, [title, description]);

  return null; 
};

export default Metadata;