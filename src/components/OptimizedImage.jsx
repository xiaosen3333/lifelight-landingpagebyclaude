import React, { useState } from 'react';
import Image from 'next/image';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 800, 
  height = 600, 
  quality = 75,
  priority = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simple encoded blur data URL
  const blurDataURL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='8' height='5' fill='%23f0f0f0'/%3E%3C/svg%3E";

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        placeholder="blur"
        blurDataURL={blurDataURL}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-6 h-6 border-2 border-primary-color rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;