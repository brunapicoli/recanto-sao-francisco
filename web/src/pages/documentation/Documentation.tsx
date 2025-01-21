import { NavbarFooter } from '../../templates/NavbarFooter';
import { DocumentationContainer, DocumentationList, DocumentationTitle } from './style';
import { DocsCard } from 'components/molecules/docs-card/DocsCard';

export const Documentation = () => {
  const documents = [
    {
      title: 'ESTATUTOS SOCIAIS',
      link: 'https://drive.google.com/drive/folders/11Sm7JSbfJxTiZGqDikSkVBoThCsKnuUY?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2024',
      link: 'https://drive.google.com/drive/folders/1z1eagiIr1D9ITNT_llJipHwPnshfMgaG?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2023',
      link: 'https://drive.google.com/drive/folders/1AlfIEPz-RBYTMeoxfqq3eo07GNJvJ1Ue?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2022',
      link: 'https://drive.google.com/drive/folders/1BB3Vhl3OmxaDGU4sX_iHiagLyhr9VTZE?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2021',
      link: 'https://drive.google.com/drive/folders/1SsTvTW7XECXSIdbRlo0LScRtUwXdbH7i?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2020',
      link: 'https://drive.google.com/drive/folders/1_ohcuUU81B2FYxTVJ9kpOKnUmWEPay2t?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2019',
      link: 'https://drive.google.com/drive/folders/1wsFGXIvKI8FHzRpwpx82_b9ANRI1L0ou?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2018',
      link: 'https://drive.google.com/drive/folders/1dOkLElvxOzeM761Bz9D2Jo3KSfRRyrhu?usp=sharing',
    },
    {
      title: 'DOCUMENTAÇÃO 2017',
      link: 'https://drive.google.com/drive/folders/1M14FUZxlIVaxcVyiDI8Nxz0lfS0ata3s?usp=sharing',
    },
  ];

  const openExternalLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <NavbarFooter bgBlueContributionCTA>
      <DocumentationContainer>
        <DocumentationTitle>Documentação</DocumentationTitle>
        <DocumentationList>
          {documents.map((document) => (
            <DocsCard key={document.title} title={document.title} onClick={() => openExternalLink(document.link)} />
          ))}
        </DocumentationList>
      </DocumentationContainer>
    </NavbarFooter>
  );
};
