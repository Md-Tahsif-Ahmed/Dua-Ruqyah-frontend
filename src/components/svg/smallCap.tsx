import React from 'react';

interface CapIconProps {
  className?: string;
}

const CapIcon: React.FC<CapIconProps> = ({ className }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.49255 4.4475V3.315C1.49255 2.55 2.11505 1.9275 2.88005 1.9275H12.5701C13.3351 1.9275 13.9576 2.55 13.9576 3.315V4.4475"
      stroke="#417360"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.72498 13.575V2.49"
      stroke="#417360"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.17505 13.575H9.36005"
      stroke="#417360"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g opacity="0.4">
      <path
        d="M10.2598 7.75488H15.5173C16.0648 7.75488 16.5073 8.19738 16.5073 8.74488V9.34488"
        stroke="#417360"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0601 16.0726V8.15259"
        stroke="#417360"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4546 16.0723H13.6646"
        stroke="#417360"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default CapIcon;
