import styled from "styled-components";

const StyledTitle = styled.h1`
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

    /*transition-timing-function: ease-out;
    transition: 0.25s;
    transform: translateY(-20%);*/

    animation-name: bounce;
    animation-duration: 2s;
  `};
`;

export default function Title({ expandView, children }) {
  return <StyledTitle expandView={expandView}>{children}</StyledTitle>;
}
