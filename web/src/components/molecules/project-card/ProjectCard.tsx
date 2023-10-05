import { BackgroundOverlay } from "../../atoms/background-overlay/BackgroundOverlay";
import {
  ProjectCardContainer,
  ProjectCardDescription,
  ProjectCardTitle,
} from "./style";

type ProjectCardProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export const ProjectCard = ({
  title,
  description,
  backgroundImage,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer backgroundImage={backgroundImage}>
      <BackgroundOverlay className="backgroundOverlay">
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <ProjectCardDescription>{description}</ProjectCardDescription>
      </BackgroundOverlay>
    </ProjectCardContainer>
  );
};
