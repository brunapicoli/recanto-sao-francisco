import { useEffect, useState } from 'react';
import { ArrowButton } from '../../atoms/arrow-button/ArrowButton';
import { ImgProps } from '../../atoms/header/Header';
import { Title } from '../../atoms/title/Title';
import { AnimalsCardContainer, AnimalsCardContent, AnimalsCardHeader, AnimalsCardImg, AnimalsCardImgs } from './style';

type AnimalsCardProps = {
  title: string;
  imgs: ImgProps[];
  onClick: () => void;
};

export const AnimalsCard = ({ title, imgs, onClick }: AnimalsCardProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <AnimalsCardContainer>
      <AnimalsCardHeader>
        <Title title={title} />
        {windowWidth > 450 && windowWidth <= 590 && <ArrowButton onClick={onClick} />}
      </AnimalsCardHeader>
      <AnimalsCardContent>
        <AnimalsCardImgs>
          {imgs.map((img) => (
            <AnimalsCardImg src={img.src} alt={img.alt} />
          ))}
        </AnimalsCardImgs>
        {(windowWidth > 590 || windowWidth <= 450) && <ArrowButton onClick={onClick} />}
      </AnimalsCardContent>
    </AnimalsCardContainer>
  );
};
