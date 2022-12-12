import { ArrowButtonContainer, ArrowButtonIcon } from "./style";

type ArrowButtonProps = {
  onClick: () => void;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <ArrowButtonContainer onClick={onClick}>
      <ArrowButtonIcon src={require("../../../assets/icons/arrow.png")} />
    </ArrowButtonContainer>
  );
};
