import { useEffect, useState } from 'react';
import { Animal } from 'models';
import { AnimalService } from 'services/AnimalService';
import { Header } from '../../components/atoms/header/Header';
import { AnimalsCard } from '../../components/molecules/animals-card/AnimalsCard';
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
  const [cats, setCats] = useState<Animal[]>([]);
  const [dogs, setDogs] = useState<Animal[]>([]);

  const getCats = async () => {
    const cats = await AnimalService.getCats();
    setCats(cats.splice(0, 3));
  };

  const getDogs = async () => {
    const dogs = await AnimalService.getDogs();
    setDogs(dogs.splice(0, 3));
  };

  const navigateTo = (page: string) => {
    window.location.href = page;
  };

  useEffect(() => {
    getCats();
    getDogs();
  }, []);

  return (
    <NavbarFooter hideContributionCTA bgGreenNavbar>
      <Header
        title="Diga não ao abandono de animais e adote um peludo"
        subtitle="Transforme vidas. Não compre, adote!"
        bgGreen
      />
      <AdoptionContainer>
        <AdoptionContent>
          <AdoptionTitle>Como adotar no Recanto São Francisco?</AdoptionTitle>
          <AdoptionList>
            <AdoptionItem>Ir à sede do Recanto: Rodovia SP-342, Km 198, Bairro Concrelix (ao lado do CZZ)</AdoptionItem>
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
            {dogs?.length > 0 && (
              <AnimalsCard
                title="NOSSOS CÃES"
                imgs={dogs.map((dog) => ({ src: dog.photo, alt: dog.name }))}
                onClick={() => navigateTo('/caes')}
              />
            )}
            {cats?.length > 0 && (
              <AnimalsCard
                title="NOSSOS GATOS"
                imgs={cats.map((cat) => ({ src: cat.photo, alt: cat.name }))}
                onClick={() => navigateTo('/gatos')}
              />
            )}
          </AdoptionAnimals>
        </AdoptionContent>
      </AdoptionContainer>
    </NavbarFooter>
  );
};
