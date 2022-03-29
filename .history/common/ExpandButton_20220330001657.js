import styled from "styled-components";
import ExpandSVG from "./ExpandSVG";

const StyledExpandButton = styled.button`
  display: hidden;
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: start;
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

export default function CloseButton({ onClick, expandView }) {
  return (
    <StyledExpandButton expandView={expandView} onClick={onClick}>
      <ExpandSVG />
    </StyledExpandButton>
  );
}
