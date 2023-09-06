import { useAppContext } from 'context/AppContext';
import { TitleContainer, TitleContent, TitleLine } from './style';

type TitleProps = {
  title: string;
  className?: string;
};

export const Title = ({ title, className }: TitleProps) => {
  const { windowWidth } = useAppContext();

  return (
    <TitleContainer className={className}>
      {windowWidth > 380 && <TitleLine />}
      <TitleContent>{title}</TitleContent>
    </TitleContainer>
  );
};
