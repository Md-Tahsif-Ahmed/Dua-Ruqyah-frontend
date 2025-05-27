// components/svg/PlayIcon.tsx
import React from 'react';

interface PlayIconProps {
  className?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3.33337 10V7.03335C3.33337 3.35001 5.94171 1.84168 9.13337 3.68335L11.7084 5.16668L14.2834 6.65001C17.475 8.49168 17.475 11.5083 14.2834 13.35L11.7084 14.8333L9.13337 16.3167C5.94171 18.1583 3.33337 16.65 3.33337 12.9667V10Z"
      stroke="#709484"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
