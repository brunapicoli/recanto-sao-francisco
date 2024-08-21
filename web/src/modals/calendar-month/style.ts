import Calendar from 'react-calendar';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export const CalendarContainer = styled(Calendar)`
  margin: 2.4rem;

  div.react-calendar__year-view__months {
    row-gap: 2.4rem;
  }

  div.react-calendar__navigation {
    display: flex;
  }

  button.react-calendar__navigation__arrow {
    cursor: pointer;
    font-size: 2.4rem;
    padding: 0 1.2rem;
  }

  button.react-calendar__navigation__arrow,
  button.react-calendar__navigation__label {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span.react-calendar__navigation__label__labelText {
    color: ${colors.primaryText};
    font-size: 1.6rem;
  }

  div.react-calendar__viewContainer {
    margin-top: 2.4rem;
  }

  button.react-calendar__tile {
    background-color: transparent;
    border: none;
    height: 3.2rem;
    transition: background-color 0.2s;

    abbr {
      color: ${colors.primaryText};
      font-size: 1.4rem;
      font-weight: 500;
    }

    &:not(:disabled) {
      cursor: pointer;
    }

    &:disabled {
      abbr {
        opacity: 0.5;
      }
    }

    &.react-calendar__tile--rangeStart,
    &.react-calendar__tile--rangeEnd {
      abbr {
        color: ${colors.white};
      }
      border-radius: 4px;
      background-color: ${colors.greenPrimary};
    }
  }
`;
