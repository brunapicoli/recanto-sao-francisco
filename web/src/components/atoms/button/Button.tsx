import { ButtonContainer } from "./style";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "navbar";
  onClick?: () => void;
};

export const Button = ({ text, variant = "primary", onClick }: ButtonProps) => {
  return (
    <ButtonContainer className={variant} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};
