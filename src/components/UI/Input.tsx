import { FC } from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  required?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  inputRef,
  label,
  placeholder,
  type,
  required,
  className,
}) => {
  const inputId = `input-${label}`;

  return (
    <div className={className}>
      <label className="block text-[24px] mb-[8px]" htmlFor={inputId}>
        {label}
      </label>
      <input
        ref={inputRef}
        required={required}
        type={type}
        id={inputId}
        placeholder={placeholder}
        className="
          border
        border-white
          bg-transparent
          rounded-full 
          w-full
          p-[12px]
          pl-[18px]
          text-[14px]
          font-paragraphs
        focus:border-secondary
          outline-none
        "
      />
    </div>
  );
};

export default Input;
