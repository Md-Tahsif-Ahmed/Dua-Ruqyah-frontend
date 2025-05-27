import React from "react";

interface VerticalIconProps {
  className?: string;
}

const VerticalIcon: React.FC<VerticalIconProps> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="420"
    viewBox="0 0 18 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M1 1V15.7721M1 419V15.7721M1 15.7721H17.4331M1 75.9089H17.4331M1 385.687H17.4331"
      stroke="#417360"
      strokeMiterlimit="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 5"
    />
  </svg>
);

export default VerticalIcon;
