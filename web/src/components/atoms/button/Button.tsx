import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant?: 'primary' | 'secondary' | 'navbar';
};

export const Button = ({ text, variant = 'primary', onClick, ...props }: ButtonProps) => {
  return (
    <ButtonContainer {...props} className={variant} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};
