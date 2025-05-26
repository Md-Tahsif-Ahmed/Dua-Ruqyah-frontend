import React from 'react';

interface ArrowUpIconProps {
  className?: string;
}

const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.62 8.77917L7.81667 4.97584C7.3675 4.52667 6.6325 4.52667 6.18334 4.97584L2.38 8.77917"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowUpIcon;
