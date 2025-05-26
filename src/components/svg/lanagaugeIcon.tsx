import React from 'react';

interface CustomLanguageIconProps {
  className?: string;
}

const CustomLanguageIcon: React.FC<CustomLanguageIconProps> = ({ className }) => (
  <svg
    className={className}
    width="15"
    height="10"
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.37275 1.278V4.54H4.92875V5.59H1.37275V8.95H5.34875V10H0.0987521V0.228H5.34875V1.278H1.37275ZM11.0145 2.188C11.9478 2.188 12.7038 2.47267 13.2825 3.042C13.8612 3.602 14.1505 4.414 14.1505 5.478V10H12.8905V5.66C12.8905 4.89467 12.6992 4.31133 12.3165 3.91C11.9338 3.49933 11.4112 3.294 10.7485 3.294C10.0765 3.294 9.53982 3.504 9.13849 3.924C8.74649 4.344 8.55049 4.95533 8.55049 5.758V10H7.27649V2.328H8.55049V3.42C8.80249 3.028 9.14315 2.72467 9.57249 2.51C10.0112 2.29533 10.4918 2.188 11.0145 2.188Z"
      fill="currentColor"
    />
  </svg>
);

export default CustomLanguageIcon;
