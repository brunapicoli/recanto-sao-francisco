import CatAndDogImg from 'assets/images/cat-and-dog.png';
import {
  AnimalCauseContent,
  AnimalCauseContainer,
  AnimalCauseTextContainer,
  AnimalCauseTitle,
  AnimalCauseText,
  AnimalCauseImage,
} from './style';

export const AnimalCause = () => {
  return (
    <AnimalCauseContainer>
      <AnimalCauseContent>
        <AnimalCauseTextContainer>
          <AnimalCauseTitle>Colabore com a causa animal</AnimalCauseTitle>
          <AnimalCauseText>Sua contribuição possibilita aos animais uma vida melhor.</AnimalCauseText>
        </AnimalCauseTextContainer>
        <AnimalCauseImage src={CatAndDogImg} />
      </AnimalCauseContent>
    </AnimalCauseContainer>
  );
};
