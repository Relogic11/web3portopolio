import React from 'react';
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
  // Use mapping to get the correct SVG filename
  const iconName = getTechIconName(name);
  
  // Generate the icon path
  const iconPath = `/tech-icons/${iconName}.svg`;
  
  // Default alt text
  const altText = alt || `${name} technology icon`;
  
  return (
    <img
      src={iconPath}
      alt={altText}
      width={size}
      height={size}
      className={`tech-icon ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      onError={(e) => {
        // Fallback: hide icon if not found
        e.target.style.display = 'none';
        console.warn(`Tech icon not found: ${iconPath} for tech: ${name}`);
      }}
      {...props}
    />
  );
};

export default TechIcon;
