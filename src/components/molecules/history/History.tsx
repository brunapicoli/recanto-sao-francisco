import { useEffect, useState } from "react";
import { Title } from "../../atoms/title/Title";
import {
  HistoryBoldText,
  HistoryContent,
  HistoryContainer,
  HistoryImage,
  HistoryText,
  HistoryTextContainer,
} from "./style";

export const History = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const text = [
    "Lourdes Santiago conta que seu amor pelos animais parece ter nascido no mesmo dia e ano em que ela veio ao mundo. Embora não faça mais parte da diretoria da Associação Pinhalense de Proteção Animal (APPA), D. Lourdes é “ainda” a voluntária mais atuante do Recanto São Francisco. Quase todos os dias, seja domingo ou feriado, faça chuva ou sol, dá um jeito de estar presente no mesmo espaço onde moram mais de 150 cães e 50 gatos, seja para medicar um animal, seja para acompanhar algum interessado em adoção.",
    "Por meio da história de Lourdes Santiago, conseguimos resgatar a própria história da APPA, fundada em 1988, por um grupo de pinhalenses muitíssimo envolvidos e bem preparados. Pudemos constatar que muitos dos desafios atuais já estavam presentes desde o início. E não apenas em nossa cidade.",
    "Ana Elizabeth Janini, ecóloga e voluntária, foi bastante atuante ao lado da Lourdes, desde que a APPA foi reativada e a nova diretoria foi eleita. Se trabalhou muito (e muito bem), buscando colocar em prática as novas tendências da época, absolutamente fundamentais até hoje: campanhas de castração em massa, de posse responsável e a educação da população nesse sentido.",
    "Em 2002, a APPA estava passando por grandes dificuldades, diz voluntária, cerca de 80 animais encontravam-se sob os cuidados da Associação. Eram abrigados em um espaço gentilmente emprestado, no bairro Mota Paes. Pela falta de recursos financeiros para manter um responsável para cuidar do local, a própria Lourdes ia até lá, diariamente, para cuidar da alimentação dos animais, da limpeza e da medicação. Para ela, isso nunca foi problema. Problema, mesmo, era ter de encontrar solução imediata para o frequente descarte de vidas. Ninhadas eram abandonadas em frente ao portão do abrigo, quando ele funcionava no Mota Paes e ninhadas são depositadas, ainda hoje, em frente ao portão do Recanto ou na frente da casa da própria Lourdes. A diferença é que hoje existem celulares com câmeras e câmeras nos arredores do Recanto, além de uma legislação que criminaliza o abandono e os maus-tratos praticados contra os animais.",
    "Do final dos anos de 1990 e pelos anos 2000 a fora, estiveram sempre presentes, junto à Lourdes: Elizabeth Carlos, Ana Elizabeth Janini, a veterinária Simone Zaninello e Heloísa Godinho. Cada uma, a seu modo, foi responsável pela sobrevivência da APPA, em seu momento mais crítico.",
    "Você ficou doente alguns anos atrás e prometeu dedicar sua vida aos animais. Foi isso mesmo o que aconteceu? “Em 1995, descobri um câncer de mama. Foi muito difícil e a barra pesou para mim. Achei que não iria resistir, mas Deus me deu forças para reagir às sessões de quimioterapia. Nunca tive inveja de nada, me sinto realizada, saudável. Mas, naquela época, ficava desesperada em ver as outras pessoas trabalhando, e eu sem forças para carregar meu próprio corpo. Pedi a Deus que, se eu sobrevivesse, trabalharia em alguma causa como voluntária. Procurei outras alternativas; fui à Casa da Criança (...) Mas nada disso me tocou o suficiente. Os animais já faziam parte de minha vida e decidi entrar nesse barco, de corpo e alma. A única coisa que quero é um lugar para os animais e alguém para dar continuidade à minha luta”.",
  ];

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <HistoryContainer id="history">
      <Title title="NOSSA HISTÓRIA" className="historyTitle" />
      <>
        <HistoryContent>
          <HistoryTextContainer>
            <HistoryText>{text[0]}</HistoryText>
            {windowWidth > 1000 && <HistoryText>{text[1]}</HistoryText>}
            {windowWidth > 1200 && <HistoryText>{text[2]}</HistoryText>}
          </HistoryTextContainer>
          <HistoryImage
            className="firstImage"
            src={require("../../../assets/images/lourdes.png")}
            alt="Lourdes Santiago segurando filhotes de cães"
          />
        </HistoryContent>
        {windowWidth < 1000 && <HistoryText>{text[1]}</HistoryText>}
        {windowWidth < 1200 && <HistoryText>{text[2]}</HistoryText>}
        <HistoryText className="withoutMargin">{text[3]}</HistoryText>
        <HistoryContent>
          <HistoryText>{text[4]}</HistoryText>
          <HistoryImage
            src={require("../../../assets/images/ana-lourdes.png")}
            alt="Citação de Ana Elizabeth Janini"
          />
        </HistoryContent>
      </>
      <HistoryText className="withoutMargin">
        <HistoryBoldText>
          Lourdes Santiago, no jornal A Cidade, em 06/10/2001
        </HistoryBoldText>
        {text[5]}
      </HistoryText>
    </HistoryContainer>
  );
};
