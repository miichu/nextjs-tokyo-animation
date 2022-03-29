import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const Page = styled.div``;

const Container = styled.section`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(4, min-content);
`;

const StyledImage = styled(Image)`
  grid-column: 1/2;
  grid-row: 1/2;

  ${(props) =>
    props.expandView &&
    `
      grid-column: 1/2;
      grid-row: 1/5;
    `}
`;

const Title = styled.h1`
  text-align: center;
  line-height: 2;
  font-size: 2rem;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: min-content;
  border-radius: 25%;
  padding: 1rem 0.5rem;
  background: black;
  color: white;

  ${(props) =>
    props.expandView &&
    `
    border-radius: 40%;
    background: white;
    color: black;
    padding: 0.5rem 1rem;
  `}
`;

export default function FrontPage() {
  const [expandView, setExpandView] = useState(false);
  return (
    <Page>
      <Container>
        {expandView && (
          <Button expandView={expandView} onClick={() => setExpandView(false)}>
            X
          </Button>
        )}
        <StyledImage
          expandView={expandView}
          className="expandingImage"
          src={profile}
          alt="Random photo"
        />
        <Title expandView={expandView} className="title">
          Found in Unfold
        </Title>
        <Description>
          Get started by editing <code>pages/index.js</code>
        </Description>

        {!expandView && (
          <Button expandView={expandView} onClick={() => setExpandView(true)}>
            Open
          </Button>
        )}
      </Container>
    </Page>
  );
}
