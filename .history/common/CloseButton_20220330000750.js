import styled from "styled-components";
import CloseButton from "./CloseSVG";

const StyledCloseButton = styled.button`
  display: hidden;
  grid-column: 1/2;
  grid-row: 1/2;
  color: white;

  ${(props) =>
    props.expandView &&
    `
    border: 1px transparent;
    background: transparent;
    padding: 0.5rem 1rem;
    justify-self: start;
    z-index: 1000;
  `};
`;

const CloseButton = ({ onClick, expandView }) => {
  return (
    <StyledCloseButton expandView={expandView} onClick={onClick}>
      <CloseSVG />
    </StyledCloseButton>
  );
};

export default CloseButton;
