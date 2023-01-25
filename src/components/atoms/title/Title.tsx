import { TitleContainer, TitleContent, TitleLine } from "./style";

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: TitleProps) => {
  return (
    <TitleContainer className={className}>
      <TitleLine />
      <TitleContent>{title}</TitleContent>
    </TitleContainer>
  );
};
