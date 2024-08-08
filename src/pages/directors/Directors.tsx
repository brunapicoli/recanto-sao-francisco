import { useEffect, useState } from 'react';
import { Director } from 'models/Directors';
import { DirectorService } from 'services/DirectorService';
import { NavbarFooter } from '../../templates/NavbarFooter';
import { PersonCard } from 'components/atoms/person-card/PersonCard';
import { DirectorsContainer, DirectorsList, DirectorsTitle } from './style';

export const Directors = () => {
  const [directors, setDirectors] = useState<Director[]>();

  const getDirectors = async () => {
    const directorsResponse = await DirectorService.getDirectors();
    setDirectors(directorsResponse);
  };

  useEffect(() => {
    getDirectors();
  }, []);

  return (
    <NavbarFooter bgGreenContributionCTA>
      <DirectorsContainer>
        <DirectorsTitle>Conheça nossos dirigentes</DirectorsTitle>
        <DirectorsList>
          {directors?.map((director) => (
            <PersonCard key={director.id} name={director.name} position={director.position} img={director.photo} />
          ))}
        </DirectorsList>
      </DirectorsContainer>
    </NavbarFooter>
  );
};
