import { useAppContext } from 'context/AppContext';
import { ArrowButton } from '../../atoms/arrow-button/ArrowButton';
import { Title } from '../../atoms/title/Title';
import {
  AnimalsCardButton,
  AnimalsCardContainer,
  AnimalsCardContent,
  AnimalsCardHeader,
  AnimalsCardImg,
  AnimalsCardImgs,
} from './style';
import { Animal } from 'models/Animals';

type AnimalsCardProps = {
  title: string;
  animals: Animal[];
  onClick: () => void;
};

export const AnimalsCard = ({ animals, title, onClick }: AnimalsCardProps) => {
  const { windowWidth } = useAppContext();

  const renderButton = (
    <AnimalsCardButton>
      <ArrowButton onClick={onClick} />
    </AnimalsCardButton>
  );

  return (
    <AnimalsCardContainer>
      <AnimalsCardHeader>
        <Title title={title} />
        {windowWidth > 450 && windowWidth <= 590 && renderButton}
      </AnimalsCardHeader>
      <AnimalsCardContent>
        <AnimalsCardImgs>
          {animals.map((animal) => (
            <AnimalsCardImg key={animal.id} src={animal.photo} alt={animal.name} />
          ))}
        </AnimalsCardImgs>
        {(windowWidth > 590 || windowWidth <= 450) && renderButton}
      </AnimalsCardContent>
    </AnimalsCardContainer>
  );
};
