import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const Page = styled.div``;

const Container = styled.section`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(5, min-content);
`;

const ImageWrapper = styled.div`
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
  grid-column: 1/2;
  grid-row: 1/5;

  ${(props) =>
    props.expandView &&
    `
      grid-row: 3/4;
    `}
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
        <ImageWrapper expandView={expandView}>
          <Image src={profile} alt="Random photo" />
        </ImageWrapper>
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
