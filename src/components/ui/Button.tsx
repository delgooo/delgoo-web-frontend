import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';

  const variants = {
    primary: 'bg-delgoo-blue text-white hover:bg-delgoo-blue-dark focus-visible:ring-delgoo-blue',
    secondary: 'bg-delgoo-gold text-white hover:bg-delgoo-gold-dark focus-visible:ring-delgoo-gold',
    outline: 'border-2 border-delgoo-blue text-delgoo-blue hover:bg-delgoo-blue hover:text-white focus-visible:ring-delgoo-blue',
    ghost: 'text-gray-700 hover:text-delgoo-blue hover:bg-gray-50 focus-visible:ring-delgoo-blue',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
