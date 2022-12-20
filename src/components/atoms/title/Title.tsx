import { TitleContainer, TitleContent, TitleLine } from "./style";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <TitleContainer>
      <TitleLine />
      <TitleContent>{title}</TitleContent>
    </TitleContainer>
  );
};
