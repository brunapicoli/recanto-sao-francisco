import { CircularProgress } from '@mui/material';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ButtonContainer, LinkContainer } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  link?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
};

export const Button = ({ children, isLoading, link, variant = 'primary', onClick, ...props }: ButtonProps) => {
  const content = isLoading ? <CircularProgress color="inherit" size="1.8rem" /> : children;

  return link ? (
    <LinkContainer {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} className={variant} to={link}>
      {content}
    </LinkContainer>
  ) : (
    <ButtonContainer {...props} className={variant} onClick={onClick}>
      {content}
    </ButtonContainer>
  );
};
