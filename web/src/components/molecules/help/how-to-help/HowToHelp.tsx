import { HelpCard, HelpCardProps } from 'components/atoms/help-card/HelpCard';
import DogIcon from 'assets/icons/dog.svg';
import DonateIcon from 'assets/icons/donate.svg';
import MoneyIcon from 'assets/icons/dollar-sign.svg';
import {
  HowToHelpContent,
  HowToHelpContainer,
  HowToHelpList,
  HowToHelpTitle,
  HowToHelpText,
  HowToHelpTextBold,
} from './style';

export const HowToHelp = () => {
  const helpOptions: HelpCardProps[] = [
    {
      img: DogIcon,
      title: 'Adotando',
      description: (
        <HowToHelpText>
          Venha conhecer o Recanto São Francisco e adotar um peludo para receber um lar. Há muitos cães e gatos a sua
          espera.
        </HowToHelpText>
      ),
    },
    {
      img: DonateIcon,
      title: 'Doando',
      description: (
        <HowToHelpText>
          Ração, petiscos, sachês, brinquedos, produtos de limpeza, medicamentos, caixas de transporte, areia para
          gatos, casinhas/caminhas, baldes/bacias, toalhas, cobertores, lençóis, edredons, dentre outros itens diversos
          de pets.
        </HowToHelpText>
      ),
    },
    {
      img: MoneyIcon,
      title: 'Contribuindo',
      description: (
        <>
          <HowToHelpText>
            <HowToHelpTextBold>Agência:</HowToHelpTextBold> 3125 (Banco Sicoob Agrocred)
          </HowToHelpText>
          <HowToHelpText>
            <HowToHelpTextBold>Operação:</HowToHelpTextBold> 003
          </HowToHelpText>
          <HowToHelpText>
            <HowToHelpTextBold>Conta Corrente:</HowToHelpTextBold> 833.018-2
          </HowToHelpText>
          <HowToHelpText>
            <HowToHelpTextBold>Favorecido:</HowToHelpTextBold> Associação Pinhalense de Proteção aos Animais São
            Francisco de Assis
          </HowToHelpText>
          <HowToHelpText>
            <HowToHelpTextBold>Pix:</HowToHelpTextBold> 04.075.971/0001-51 (CNPJ)
          </HowToHelpText>
        </>
      ),
    },
  ];

  return (
    <HowToHelpContainer>
      <HowToHelpContent>
        <HowToHelpTitle>Como ajudar?</HowToHelpTitle>
        <HowToHelpList>
          {helpOptions.map((option) => (
            <HelpCard key={option.title} title={option.title} description={option.description} img={option.img} />
          ))}
        </HowToHelpList>
      </HowToHelpContent>
    </HowToHelpContainer>
  );
};
