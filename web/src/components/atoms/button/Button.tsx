import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ButtonContainer, LinkContainer } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  link?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
};

export const Button = ({ children, link, variant = 'primary', onClick, ...props }: ButtonProps) => {
  return link ? (
    <LinkContainer {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={variant} to={link}>
      {children}
    </LinkContainer>
  ) : (
    <ButtonContainer {...props} className={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
