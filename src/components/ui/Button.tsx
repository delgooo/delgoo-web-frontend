import React from 'react';
import { SITE_CONFIG } from '@/lib/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Reusable Button component with consistent styling and variants
 */
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: `bg-[${SITE_CONFIG.colors.blue}] text-white hover:bg-[#1a3d8a] focus:ring-[${SITE_CONFIG.colors.blue}]`,
    secondary: `bg-[${SITE_CONFIG.colors.gold}] text-white hover:bg-[#e69b0a] focus:ring-[${SITE_CONFIG.colors.gold}]`,
    outline: `border-2 border-[${SITE_CONFIG.colors.blue}] text-[${SITE_CONFIG.colors.blue}] hover:bg-[${SITE_CONFIG.colors.blue}] hover:text-white focus:ring-[${SITE_CONFIG.colors.blue}]`,
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
} 