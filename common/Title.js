import styled, { css } from "styled-components";

export const animationStyling = css`
  @keyframes slideInAnimation {
    from {
      margin-top: 15%;
    }

    to {
      margin-top: 0%;
    }
  }
`;

export const slideBounceAnimation = css`
  @keyframes slideBounce {
    0% {
      margin-top: 2em;
    }
    25% {
      margin-top: -1em;
    }
    50% {
      margin-top: 0.5em;
    }
    100% {
      margin-top: 0;
    }
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
    font-size: 4rem;

    justify-self: start;
    color: white;
    z-index: 1000;

    animation: slideBounce 2s ;
    ${slideBounceAnimation}
  `};
`;

export default function Title({ expandView, children }) {
  return <StyledTitle expandView={expandView}>{children}</StyledTitle>;
}
