import { FC, useRef } from 'react';

import Button from '../UI/Button';
import Input from '../UI/Input';

interface RegistrationFormProps {
  className: string;
  onSubmit: (name: string, email: string) => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({
  className,
  onSubmit,
}) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value as string;
    const email = emailRef.current?.value as string;
    onSubmit(name, email);
  };

  return (
    <form className={className} onSubmit={formSubmitHandler}>
      <Input
        inputRef={nameRef}
        required
        label="name"
        type="text"
        placeholder="We will display your name in participation list"
      />
      <Input
        className="mt-[18px]"
        inputRef={emailRef}
        required
        label="email"
        type="email"
        placeholder="We will display your name in participation list"
      />
      <Button className="mt-6" label="Get early access" />
    </form>
  );
};

export default RegistrationForm;
