import styled from "styled-components";
import ExpandSVG from "./ExpandSVG";

const StyledExpandButton = styled.button`
  width: min-content;
  border-radius: 50%;
  padding: 1rem;
  background: black;
  color: white;
  grid-column: 1/2;
`;

export default function CloseButton({ onClick, expandView }) {
  return (
    <StyledExpandButton expandView={expandView} onClick={onClick}>
      <ExpandSVG />
    </StyledExpandButton>
  );
}
