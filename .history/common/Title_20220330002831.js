import styled from "styled-components";

const StyledTitle e = styled.h1`
font-size: 3rem;
grid-column: 1/2;
grid-row: 2/3;
margin: 0;

${(props) =>
  props.expandView &&
  `
    justify-self: start;
    color: white;
    z-index: 1000;

    transition-timing-function: ease-out;
    transition: 0.25s;
    transform: translateY(-20%);
  `};
`;

export default function Description({ expandView, children }) {
  return (
    <StyledDescription expandView={expandView}>{children}</StyledDescription>
  );
}
