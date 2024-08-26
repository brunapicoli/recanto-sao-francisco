import { NavbarFooter } from '../../templates/NavbarFooter';
import { DirectorCard } from 'components/atoms/director-card/DirectorCard';
import { directors } from 'utils/DirectorUtil';
import { DirectorsContainer, DirectorsList, DirectorsTitle } from './style';

export const Directors = () => {
  return (
    <NavbarFooter bgBlueContributionCTA>
      <DirectorsContainer>
        <DirectorsTitle>Conheça nossos dirigentes</DirectorsTitle>
        <DirectorsList>
          {directors?.map((director) => (
            <DirectorCard key={director.name} director={director} />
          ))}
        </DirectorsList>
      </DirectorsContainer>
    </NavbarFooter>
  );
};
