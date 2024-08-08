import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from 'context/AppContext';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

export const Animals = () => {
  const { cats, dogs, getCats, getDogs } = useAppContext();

  const { pathname } = useLocation();

  const isDog = pathname === '/adocao/caes';

  const currentAnimal = isDog ? dogs : cats;

  useEffect(() => {
    getCats();
    getDogs();
  }, []);

  return (
    <NavbarFooter hideContributionCTA>
      <AnimalsContainer>
        <AnimalsTitle>Conheça nossos {isDog ? 'cães' : 'gatos'}</AnimalsTitle>
        <AnimalsList>
          {currentAnimal?.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </AnimalsList>
      </AnimalsContainer>
    </NavbarFooter>
  );
};
