import styled from "styled-components";

const StyledDescription = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;
  width: 50%;

  grid-column: 1/2;
  grid-row: 3/4;

  ${(props) =>
    props.expandView &&
    `
    justify-self: start;
    line-height: 1;
    font-size: 1rem;
    width: fit-content;
    grid-row: 4/5;
    z-index: 1000;
    background: black;
    color: white;
    margin-bottom: 2rem;
    padding: 0.25rem;

    animation-duration: 3s;
    animation-name: slidein;


    transition-timing-function: ease-out;
    transition: 0.25s;
    transform: translateY(-20%);
  `}

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

export default function Description({ expandView, children }) {
  return (
    <StyledDescription expandView={expandView}>{children}</StyledDescription>
  );
}
