import { Sex } from 'models/Sex';
import { DirectorCardContainer, DirectorCardName, DirectorCardPosition, DirectorCardText } from './style';
import { Director } from 'models/Directors';

type DirectorCardProps = {
  director: Director;
};

export const DirectorCard = ({ director }: DirectorCardProps) => {
  return (
    <DirectorCardContainer>
      <div>
        <DirectorCardName>{director.name}</DirectorCardName>
        <DirectorCardPosition>{director.position}</DirectorCardPosition>
      </div>
      <div>
        <DirectorCardText>
          <b>{`${director.sex === Sex.FEMALE ? 'Eleita' : 'Eleito'} em: `}</b>
          {director.electedIn}
        </DirectorCardText>
        <DirectorCardText>
          <b>Vencimento do Mandato: </b>
          {director.electedIn}
        </DirectorCardText>
      </div>
    </DirectorCardContainer>
  );
};
