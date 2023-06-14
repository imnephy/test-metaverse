import { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
  label: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full 
      bg-secondary
        px-[24px]
        pt-[10px]
        pb-[7px]
        text-[18px]
      active:bg-[#BE3B10]
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
