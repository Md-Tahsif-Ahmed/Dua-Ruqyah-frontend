import React from 'react';

interface CustomRightDirectionIconProps {
  className?: string;
}

const CustomRightDirectionIcon: React.FC<CustomRightDirectionIconProps> = ({ className }) => (
  <svg
    className={className}
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.28049 12.765L3.58549 10.155C3.94549 9.4275 3.94549 8.58 3.58549 7.8525L2.28049 5.235C1.16299 3 3.57049 0.637499 5.78299 1.8075L6.93799 2.4225C7.10299 2.505 7.23049 2.64 7.29799 2.805L11.5655 12.2925C11.738 12.6825 11.5805 13.14 11.2055 13.335L5.77549 16.1925C3.57049 17.3625 1.16299 15 2.28049 12.765Z"
      fill="currentColor"
    />
    <path
      opacity="0.4"
      d="M12.4806 11.7L9.6831 5.49C9.3681 4.7925 10.1181 4.0875 10.7931 4.4475L15.1206 6.7275C16.9581 7.695 16.9581 10.32 15.1206 11.2875L13.5906 12.09C13.1781 12.3 12.6756 12.1275 12.4806 11.7Z"
      fill="currentColor"
    />
  </svg>
);

export default CustomRightDirectionIcon;
