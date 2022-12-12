import { ButtonConatiner, ButtonLink } from "./style";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "navbar";
  link?: string;
  onClick?: () => void;
};

export const Button = ({
  text,
  variant = "primary",
  link,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonConatiner className={variant} onClick={onClick}>
      {link ? (
        <ButtonLink href={link} target="_blank">
          {text}
        </ButtonLink>
      ) : (
        text
      )}
    </ButtonConatiner>
  );
};
