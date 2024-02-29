import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from 'context/AppContext';
import { AnimalService } from 'services/AnimalService';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

export const Animals = () => {
  const { cats, dogs, setCats, setDogs } = useAppContext();

  const { pathname } = useLocation();

  const isDog = pathname === '/adocao/caes';

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
        <AnimalsTitle>Conheça nossos {isDog ? 'cães' : 'gatos'}</AnimalsTitle>
        <AnimalsList>
          {currentAnimal.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </AnimalsList>
      </AnimalsContainer>
    </NavbarFooter>
  );
};
