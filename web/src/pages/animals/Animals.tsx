import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useAppContext } from 'context/AppContext';
import { Species } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { Button } from 'components/atoms/button/Button';
import { AnimalForm } from 'modals/animal-form/AnimalForm';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AddAnimalContainer, AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

export const Animals = () => {
  const { cats, dogs, isLoggedIn, setCats, setDogs } = useAppContext();

  const { pathname } = useLocation();

  const isDog = pathname === '/adocao/caes';

  const [currentAnimal, setCurrentAnimal] = useState(isDog ? dogs : cats);
  const [openAnimalForm, setOpenAnimalForm] = useState(false);

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
    setCurrentAnimal(isDog ? dogs : cats);
  }, [cats, dogs]);

  useEffect(() => {
    if (currentAnimal.length === 0) {
      getAnimals();
    }
  }, []);

  return (
    <>
      <NavbarFooter hideContributionCTA>
        <AnimalsContainer>
          <AnimalsTitle>Conheça nossos {isDog ? 'cães' : 'gatos'}</AnimalsTitle>
          {isLoggedIn && (
            <AddAnimalContainer>
              <Button onClick={() => setOpenAnimalForm(true)}>Cadastrar novo animal</Button>
            </AddAnimalContainer>
          )}
          <AnimalsList>
            {currentAnimal.length > 0
              ? currentAnimal.map((animal) => <AnimalCard key={animal.id} animal={animal} />)
              : Array.from({ length: 10 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    animation="wave"
                    variant="rounded"
                    width={290}
                    height={392}
                    style={{ borderRadius: '8px' }}
                  />
                ))}
          </AnimalsList>
        </AnimalsContainer>
      </NavbarFooter>
      <AnimalForm
        open={openAnimalForm}
        species={isDog ? Species.DOG : Species.CAT}
        onClose={() => setOpenAnimalForm(false)}
      />
    </>
  );
};
