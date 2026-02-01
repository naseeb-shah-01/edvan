import React from 'react';

interface TileProps {
  /** The numeric value to display */
  number: number;
  /** The word/label to display below the number */
  label: string;
  /** Optional background color for the tile */
  backgroundColor?: string;
  /** Optional text color for the number */
  numberColor?: string;
  /** Optional text color for the label */
  labelColor?: string;
  /** Optional size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional click handler */
  onClick?: () => void;
  /** Optional additional CSS classes */
  className?: string;
}

const Tile: React.FC<TileProps> = ({
  number,
  label,
  backgroundColor = 'bg-white',
  numberColor = 'text-gray-900',
  labelColor = 'text-gray-600',
  size = 'md',
  onClick,
  className = '',
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      tile: 'w-20 h-20 p-3 rounded-lg',
      number: 'text-2xl font-bold',
      label: 'text-xs mt-1',
    },
    md: {
      tile: 'w-28 h-28 p-4 rounded-xl',
      number: 'text-3xl font-bold',
      label: 'text-sm mt-2',
    },
    lg: {
      tile: 'w-36 h-36 p-6 rounded-2xl',
      number: 'text-4xl font-bold',
      label: 'text-base mt-3',
    },
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`
        ${config.tile}
        ${backgroundColor}
        ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''}
        shadow-md
        flex flex-col items-center justify-center
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={`${config.number} ${numberColor} font-semibold`}>
        {number}
      </div>
      <div className={`${config.label} ${labelColor} font-medium text-center`}>
        {label}
      </div>
    </div>
  );
};

export default Tile;