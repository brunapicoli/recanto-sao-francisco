import { useEffect, useState } from 'react';
import { useAppContext } from 'context/AppContext';
import { Species } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

type AnimalsProps = {
  animalSpecies: Species;
};

export const Animals = ({ animalSpecies }: AnimalsProps) => {
  const { cats, dogs, setCats, setDogs } = useAppContext();

  const isDog = animalSpecies === Species.DOG;

  const [currentAnimal, setCurrentAnimal] = useState(isDog ? dogs : cats);

  const getAnimals = async () => {
    if (isDog) {
      const dogs = await AnimalService.getDogs();
      setDogs(dogs);
      setCurrentAnimal(dogs);
    } else {
      const cats = await AnimalService.getCats();
      setCats(cats);
      setCurrentAnimal(cats);
    }
  };
  useEffect(() => {
    if (currentAnimal.length === 0) {
      getAnimals();
    }
  }, []);

  return (
    <NavbarFooter hideContributionCTA>
      <AnimalsContainer>
        <AnimalsTitle>Conheça nossos {animalSpecies === Species.DOG ? 'cães' : 'gatos'}</AnimalsTitle>
        <AnimalsList>
          {currentAnimal.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </AnimalsList>
      </AnimalsContainer>
    </NavbarFooter>
  );
};
