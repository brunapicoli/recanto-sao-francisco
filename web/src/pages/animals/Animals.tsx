import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from 'context/AppContext';
import { Species } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { Button } from 'components/atoms/button/Button';
import { AnimalForm } from 'modals/animal-form/AnimalForm';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

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
          {isLoggedIn && <Button text="Cadastrar novo animal" onClick={() => setOpenAnimalForm(true)} />}
          <AnimalsList>
            {currentAnimal.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
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
