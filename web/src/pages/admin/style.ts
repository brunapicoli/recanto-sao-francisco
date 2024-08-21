import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const AdminContainer = styled.section`
  margin: 27px auto 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdminTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${colors.primaryText};
  margin-bottom: 48px;
  text-align: center;
`;

export const AdminContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;
