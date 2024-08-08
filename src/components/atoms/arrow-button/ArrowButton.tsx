import ArrowIcon from 'assets/icons/arrow.png';
import { ArrowButtonContainer, ArrowButtonIcon } from './style';

type ArrowButtonProps = {
  onClick: () => void;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <ArrowButtonContainer onClick={onClick}>
      <ArrowButtonIcon src={ArrowIcon} />
    </ArrowButtonContainer>
  );
};
