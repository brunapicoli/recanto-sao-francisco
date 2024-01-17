import CansImg from 'assets/images/cans.png';
import ClothesImg from 'assets/images/clothes.png';
import PiggyBankImg from 'assets/images/piggy-bank.png';
import { ProjectCard, ProjectCardProps } from './project-card/ProjectCard';
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsTextContainer,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsList,
} from './style';

export const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      backgroundImage: ClothesImg,
      title: 'Bazar beneficente',
      description:
        'Você pode ajudar doando roupas, calçados e acessórios. Também pode ajudar comprando no bazar, que é realizado uma vez por mês.',
    },
    {
      backgroundImage: PiggyBankImg,
      title: 'Projeto cofrinho',
      description:
        'Torne seu estabelecimento um ponto de arrecadação. Ou contribua sempre que ver um cofrinho do Recanto São Francisco.',
    },
    {
      backgroundImage: CansImg,
      title: 'Projeto vira-latinhas',
      description:
        'Guarde latinhas de alumínio e entre em contato conosco para buscar. As latinhas serão vendidas e o valor arrecadado será utilizado para compra de ração e medicamentos.',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <ProjectsTextContainer>
          <ProjectsSubtitle>NOSSOS PROJETOS</ProjectsSubtitle>
          <ProjectsTitle>Outras formas de ajudar</ProjectsTitle>
        </ProjectsTextContainer>
        <ProjectsList>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              backgroundImage={project.backgroundImage}
              description={project.description}
              title={project.title}
            />
          ))}
        </ProjectsList>
      </ProjectsContent>
    </ProjectsContainer>
  );
};
