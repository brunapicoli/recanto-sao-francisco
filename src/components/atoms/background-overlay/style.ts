import styled from "styled-components";

type BackgroundOverlayContainerProps = {
  backgroundImage: string;
};

export const BackgroundOverlayContainer = styled.div<BackgroundOverlayContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;
