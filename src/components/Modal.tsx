import { FC } from 'react';
import Button from './UI/Button';

interface ModalProps {
  title?: string;
  body?: string | JSX.Element;
  active?: boolean;
  setActive: (active: boolean) => void;
  action?: () => void;
  actionLabel?: string;
  className?: string;
}

const Modal: FC<ModalProps> = ({
  title,
  body,
  active,
  setActive,
  action,
  actionLabel,
  className,
}) => {
  return (
    <div
      className={`
        fixed
        inset-0 
        z-50 
        w-full 
        h-full
        flex
        justify-center
        items-center
        bg-black/50
        transition
        ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} 
      `}
      onClick={() => setActive(false)}
    >
      <div
        className={`flex flex-col justify-center items-center bg-[#262628] ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-secondary text-4xl">{title}</h2>
        <p className="font-paragraphs my-[30px]">{body}</p>
        {actionLabel && (
          <Button label={actionLabel} onClick={action} />
        )}
      </div>
    </div>
  );
};

export default Modal;
