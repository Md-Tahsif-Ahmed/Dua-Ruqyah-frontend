import React from 'react';

interface CustomSearchIconProps {
  className?: string;
}

const CustomSearchIcon: React.FC<CustomSearchIconProps> = ({ className }) => (
  <svg
    className={className}
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M8.87305 15.75C12.8081 15.75 15.998 12.56 15.998 8.625C15.998 4.68997 12.8081 1.5 8.87305 1.5C4.93802 1.5 1.74805 4.68997 1.74805 8.625C1.74805 12.56 4.93802 15.75 8.87305 15.75Z"
      fill="currentColor"
    />
    <path
      d="M16.2231 16.5C16.0881 16.5 15.9531 16.4475 15.8556 16.35L14.4606 14.955C14.2581 14.7525 14.2581 14.4225 14.4606 14.2125C14.6631 14.01 14.9931 14.01 15.2031 14.2125L16.5981 15.6075C16.8006 15.81 16.8006 16.14 16.5981 16.35C16.4931 16.4475 16.3581 16.5 16.2231 16.5Z"
      fill="currentColor"
    />
  </svg>
);

export default CustomSearchIcon;
