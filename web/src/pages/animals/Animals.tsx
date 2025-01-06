import { useState } from 'react';
import { Skeleton } from '@mui/material';
import { useAppContext } from 'context/AppContext';
import { AnimalCard } from 'components/atoms/animal-card/AnimalCard';
import { Button } from 'components/atoms/button/Button';
import { CreateAnimal201, CreateAnimal201Species } from 'http/generated/api.schemas';
import { AnimalForm } from 'modals/animal-form/AnimalForm';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { AddAnimalContainer, AnimalsContainer, AnimalsList, AnimalsTitle } from './style';

type AnimalsProps = {
  animals?: CreateAnimal201[];
  species: CreateAnimal201Species;
};

export const Animals = ({ animals, species }: AnimalsProps) => {
  const { isLoggedIn } = useAppContext();

  const [openAnimalForm, setOpenAnimalForm] = useState(false);

  return (
    <>
      <NavbarFooter hideContributionCTA>
        <AnimalsContainer>
          <AnimalsTitle>Conheça nossos {species === CreateAnimal201Species.DOG ? 'cães' : 'gatos'}</AnimalsTitle>
          {isLoggedIn && (
            <AddAnimalContainer>
              <Button onClick={() => setOpenAnimalForm(true)}>Cadastrar novo animal</Button>
            </AddAnimalContainer>
          )}
          <AnimalsList>
            {animals
              ? animals.map((animal) => <AnimalCard key={animal.id} animal={animal} />)
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
      <AnimalForm open={openAnimalForm} species={species} onClose={() => setOpenAnimalForm(false)} />
    </>
  );
};
