import styled from 'styled-components';
import { colors } from '../../../styles/colors';

type HeaderContainerProps = {
  bgBlue?: boolean;
};

export const HeaderContainer = styled.section<HeaderContainerProps>`
  background-color: ${({ bgBlue }) => colors[bgBlue ? 'blueTertiary' : 'white']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9.6rem;
`;

export const HeaderContent = styled.div`
  display: flex;

  &.space-between {
    justify-content: space-between;
    gap: 10.9rem;

    @media (max-width: 590px) {
      gap: 5rem;
    }
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderTextContainer = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;

  &.margin-top {
    margin-top: 51px;

    @media (min-width: 850px) and (max-width: 1050px) {
      margin-top: 0px;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 750px) {
      margin-top: 20px;
    }

    @media (max-width: 540px) {
      margin-top: 0;
    }
  }

  @media (max-width: 750px) {
    max-width: 55rem;
  }

  @media (max-width: 540px) {
    text-align: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 5.6rem;
  line-height: 6.7rem;
  color: ${colors.primaryText};
  margin-bottom: 4.8rem;

  @media (max-width: 750px) {
    font-size: 4rem;
    line-height: 5.1rem;
    margin-bottom: 3rem;
  }
`;

export const HeaderSubtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.primaryText};
  margin-left: 30px;

  &.no-margin {
    margin-left: 0;
  }

  @media (max-width: 540px) {
    margin-left: 0;
  }
`;

export const HeaderImg = styled.img`
  width: 42.1rem;
  height: fit-content;

  @media (min-width: 551px) and (max-width: 750px) {
    width: 30rem;
  }

  @media (min-width: 540px) and (max-width: 550px) {
    width: 25rem;
  }
`;
