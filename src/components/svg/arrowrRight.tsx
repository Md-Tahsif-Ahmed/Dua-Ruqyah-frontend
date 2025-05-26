import React from 'react';

interface RightIconProps {
  className?: string;
}

const RightIcon: React.FC<RightIconProps> = ({ className }) => (
  <svg
    className={className}
    width="5"
    height="10"
    viewBox="0 0 5 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.74996 5.00001L0.166626 9.58334L0.166626 0.416677L4.74996 5.00001Z"
      fill="#1D1B20"
    />
  </svg>
);

export default RightIcon;
