const CloseButton = styled.button`
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

export default function CloseSVG({ onClick, expandView }) {
  return (
    <CloseButton
      expandView={expandView}
      onClick={() => setExpandView(false)}
    ></CloseButton>
  );
}
