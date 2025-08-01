import React, { useState } from 'react';
import { getTechIconName } from '../data/modules/techMapping';

/**
 * Smart TechIcon component that automatically loads SVG icons from tech-icons folder
 * 
 * Usage:
 * <TechIcon name="React" size={24} />
 * <TechIcon name="Python" size={32} className="hover:scale-110" />
 * 
 * @param {string} name - Technology name (matches SVG filename without extension)
 * @param {number} size - Icon size in pixels (default: 24)
 * @param {string} className - Additional CSS classes
 * @param {string} alt - Alt text for accessibility (defaults to technology name)
 */
const TechIcon = ({ 
  name, 
  size = 24, 
  className = '', 
  alt = null,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Use mapping to get the correct SVG filename
  const iconName = getTechIconName(name);
  
  // Generate the icon path with PUBLIC_URL for GitHub Pages compatibility
  const iconPath = `${process.env.PUBLIC_URL}/tech-icons/${iconName}.svg`;
  
  // Default alt text
  const altText = alt || `${name} technology icon`;
  
  // Handle image load error
  const handleError = () => {
    console.warn(`Failed to load icon: ${iconPath}`);
    setImageError(true);
  };
  
  // Fallback when image fails to load
  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 text-gray-600 text-xs font-bold rounded ${className}`}
        style={{
          width: size,
          height: size,
          minWidth: size,
          minHeight: size
        }}
        title={altText}
        {...props}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }
  
  return (
    <img
      src={iconPath}
      alt={altText}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size
      }}
      onError={handleError}
      {...props}
    />
  );
};

export default TechIcon;
