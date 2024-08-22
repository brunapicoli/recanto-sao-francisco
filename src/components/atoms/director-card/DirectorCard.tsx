import { Sex } from 'models/Animals';
import { PersonCardContainer, PersonCardName, PersonCardPosition, PersonCardText } from './style';
import { Director } from 'models/Directors';

type PersonCardProps = {
  director: Director;
};

export const DirectorCard = ({ director }: PersonCardProps) => {
  return (
    <PersonCardContainer>
      <div>
        <PersonCardName>{director.name}</PersonCardName>
        <PersonCardPosition>{director.position}</PersonCardPosition>
      </div>
      <div>
        <PersonCardText>
          <b>{`${director.sex === Sex.FEMALE ? 'Eleita' : 'Eleito'} em: `}</b>
          {director.electedIn}
        </PersonCardText>
        <PersonCardText>
          <b>Vencimento do Mandato: </b>
          {director.electedIn}
        </PersonCardText>
      </div>
    </PersonCardContainer>
  );
};
