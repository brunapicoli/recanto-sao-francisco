import { Title } from '../../../atoms/title/Title';
import PawsImg from 'assets/images/paws.png';
import ActualLourdesImg from 'assets/images/actual-lourdes.png';
import {
  MissionContent,
  MissionContainer,
  MissionImage,
  MissionText,
  MissionTextContainer,
  MissionBackgroundImage,
  MissionBackground,
} from './style';

export const Mission = () => {
  const text = [
    'O Recanto São Francisco abriga cães e gatos que, por diversos motivos, foram abandonados pelos seus donos, nas ruas da cidade ou na porta do Recanto São Francisco. Nós amparamos esses peludos, levamos a veterinário, tratamos, encaminhamos para castração e depois para adoção responsável. O trabalho é inteiramente voluntário. Nossa associação não tem fins lucrativos e existe por conta de doações da população, em dinheiro, ração, produtos de limpeza e medicamentos.',
    'Dentro das nossas possibilidades, fazemos o melhor de nós pelos bichinhos, sendo a missão da APPA Recanto São Francisco, dar vida digna aos peludos e realizar campanhas educacionais junto à população pinhalense com relação à posse responsável, importância da esterilização dos animais, vacinação e outros cuidados, dentre os quais, o bem-estar desses seres tão especiais, que há tanto tempo preenchem a vida humana com amor.',
  ];

  return (
    <MissionBackground id="mission">
      <MissionBackgroundImage src={PawsImg} alt="Patinhas" />
      <MissionContainer>
        <Title title="NOSSA MISSÃO" className="missionTitle" />
        <MissionContent>
          <MissionTextContainer>
            <MissionText>{text[0]}</MissionText>
            <MissionText>{text[1]}</MissionText>
          </MissionTextContainer>
          <MissionImage src={ActualLourdesImg} alt="Lourdes Santiago segurando um filhote de cão" />
        </MissionContent>
      </MissionContainer>
    </MissionBackground>
  );
};
