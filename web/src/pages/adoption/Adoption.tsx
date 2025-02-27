import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/atoms/header/Header';
import { AnimalsCard } from '../../components/molecules/animals-card/AnimalsCard';
import { useGetCats, useGetDogs } from 'http/generated/animals/animals';
import { NavbarFooter } from '../../templates/NavbarFooter';
import {
  AdoptionAnimals,
  AdoptionContainer,
  AdoptionContent,
  AdoptionItem,
  AdoptionList,
  AdoptionText,
  AdoptionTextBold,
  AdoptionTitle,
} from './style';

export const Adoption = () => {
  const { data: cats } = useGetCats();
  const { data: dogs } = useGetDogs();

  const navigate = useNavigate();

  const catsToShow = cats?.slice(0, 3);
  const dogsToShow = dogs?.slice(0, 3);

  return (
    <NavbarFooter hideContributionCTA bgBlueNavbar>
      <Header
        title="Diga não ao abandono de animais e adote um peludo"
        subtitle="Transforme vidas. Não compre, adote!"
        bgBlue
      />
      <AdoptionContainer>
        <AdoptionContent>
          <AdoptionTitle>Como adotar no Recanto São Francisco?</AdoptionTitle>
          <AdoptionList>
            <AdoptionItem>
              Ir à sede do Recanto: Rodovia SP-342, Km 98, Distrito Industrial Irmãos Del Guerra (ao lado do CZZ)
            </AdoptionItem>
            <AdoptionItem>Levar uma cópia de RG, CPF e comprovante de residência atualizado</AdoptionItem>
            <AdoptionItem>Passar por uma entrevista</AdoptionItem>
            <AdoptionItem>Receber orientações sobre os cuidados com os animais</AdoptionItem>
            <AdoptionItem>
              Assinar um termo de responsabilidade, ficando responsável oficialmente pela vida do animal adotado
            </AdoptionItem>
            <AdoptionItem>Aceitar visitas de voluntários do Recanto sem marcação prévia</AdoptionItem>
            <AdoptionItem>
              Manter contato com voluntários do Recanto via WhatsApp, enviando fotografias do animal adotado
            </AdoptionItem>
          </AdoptionList>
          <AdoptionText>
            Adotar é um ato de <AdoptionTextBold>amor, compaixão e responsabilidade</AdoptionTextBold> para com os
            animais, consigo mesmo e com a sociedade!
          </AdoptionText>
          <AdoptionText>Para mais informações sobre adoção, entre em contato conosco: (19) 98190-4050</AdoptionText>
          <AdoptionAnimals>
            {dogsToShow && (
              <AnimalsCard
                title="NOSSOS CÃES"
                imgs={dogsToShow.map((dog) => ({ src: dog.photo, alt: dog.name }))}
                onClick={() => navigate('/adocao/caes')}
              />
            )}
            {catsToShow && (
              <AnimalsCard
                title="NOSSOS GATOS"
                imgs={catsToShow.map((cat) => ({ src: cat.photo, alt: cat.name }))}
                onClick={() => navigate('/adocao/gatos')}
              />
            )}
          </AdoptionAnimals>
        </AdoptionContent>
      </AdoptionContainer>
    </NavbarFooter>
  );
};
