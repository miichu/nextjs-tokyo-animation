import styled, { css } from "styled-components";

export const slideInAnimation = css`
  @keyframes slideInAnimation {
    /*transition-timing-function: ease-out;
    transition: 0.25s;
    transform: translateY(-20%);*/

    from {
      margin-top: 15%;
    }

    to {
      margin-top: 0%;
    }
  }
`;

const bounceAnimation = css`
  from {
    margin-top: 15%;
  }

  to {
    margin-top: 0%;
  }
`;

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

    animation: ${(props) => props.slideInAnimation} 2s ;
  `};
`;

export default function Title({ expandView, children }) {
  return <StyledTitle expandView={expandView}>{children}</StyledTitle>;
}
