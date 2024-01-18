import styled from 'styled-components';
import { colors } from 'styles/colors';

export const ContactContainer = styled.section`
  background-color: ${colors.greenTertiary};
  padding: 9.7rem 11rem;

  @media (max-width: 1350px) {
    padding: 64px;
  }

  @media (max-width: 700px) {
    padding-left: 16px;
  }

  @media (max-width: 480px) {
    padding-left: 0;
  }

  @media (max-width: 380px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const ContactContent = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 9.6rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactBlock = styled.div`
  @media (max-width: 700px) {
    text-align: center;
    width: 100%;
  }
`;

export const ContactTextContainer = styled.div`
  margin: 3.2rem 0 0 97px;
  max-width: 480px;

  @media (max-width: 850px) {
    margin-left: 78px;
  }

  @media (max-width: 450px) {
    margin-left: 72px;
  }

  @media (max-width: 380px) {
    margin-left: 0;
  }
`;

export const ContactText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.secondaryText};

  &:nth-child(2) {
    margin: 20px 0;
  }
`;

export const ContactSubtitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 160%;
  color: ${colors.primaryText};
  margin-bottom: 10px;
`;

export const ContactLine = styled.div`
  margin: 16px 0 32px;
  height: 1px;
  background-color: ${colors.border};
`;

export const ContactLink = styled.a`
  text-decoration: none;
`;

export const ContactSocialMedia = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContactMap = styled.iframe`
  border: 0;
  width: 100%;
  height: 450px;
`;
