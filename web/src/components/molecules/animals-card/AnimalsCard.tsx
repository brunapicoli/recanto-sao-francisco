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

type ImgProps = {
  src: string;
  alt: string;
};

type AnimalsCardProps = {
  title: string;
  imgs: ImgProps[];
  onClick: () => void;
};

export const AnimalsCard = ({ title, imgs, onClick }: AnimalsCardProps) => {
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
          {imgs.map((img) => (
            <AnimalsCardImg key={img.src} src={img.src} alt={img.alt} />
          ))}
        </AnimalsCardImgs>
        {(windowWidth > 590 || windowWidth <= 450) && renderButton}
      </AnimalsCardContent>
    </AnimalsCardContainer>
  );
};
