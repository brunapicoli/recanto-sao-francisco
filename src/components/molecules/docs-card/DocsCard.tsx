import { ArrowButton } from '../../atoms/arrow-button/ArrowButton';
import { DocsCardContainer, DocsCardTitle } from './style';

type DocsCardProps = {
  title: string;
  onClick: () => void;
};

export const DocsCard = ({ title, onClick }: DocsCardProps) => {
  return (
    <DocsCardContainer>
      <DocsCardTitle>{title}</DocsCardTitle>
      <ArrowButton onClick={onClick} />
    </DocsCardContainer>
  );
};
