import React from 'react';

interface CustomArrowIconProps {
  className?: string;
}

const CustomArrowIcon: React.FC<CustomArrowIconProps> = ({ className }) => (
  <svg
    className={className}
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6408 5.22083L7.83742 9.02417C7.38826 9.47333 6.65326 9.47333 6.20409 9.02417L2.40076 5.22083"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CustomArrowIcon;
