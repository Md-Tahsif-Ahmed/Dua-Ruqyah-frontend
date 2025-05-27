import React from "react";

interface ArrowRightIconProps {
  className?: string;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ className }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.19751 11.62L9.00084 7.81666C9.45001 7.3675 9.45001 6.6325 9.00084 6.18333L5.19751 2.38"
      stroke="#417360"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowRightIcon;
