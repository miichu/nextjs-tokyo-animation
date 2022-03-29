import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import profile from "../public/images/profile.jpg";
import unfoldImg from "../public/images/UnfoldKontorPlus.jpg";

const Page = styled.div``;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, fit-content);
  grid-gap: 1rem;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  ${(props) =>
    props.expandView &&
    `
      grid-column: 1/2;
      grid-row: 1/5;

      transform: scale(1.25);
      transition: transform 330ms ease-in-out;


    `}
`;

const Title = styled.h1`
  font-size: 2rem;
  grid-column: 1/2;
  grid-row: 2/3;
  margin: 0;

  ${(props) =>
    props.expandView &&
    `
      padding: 0 1rem 0 1rem;
      background: yellow;
      grid-row: 3/4;
      z-index: 1000;

    `};
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 0;

  grid-column: 1/2;
  grid-row: 3/4;

  ${(props) =>
    props.expandView &&
    `
   
      grid-row: 4/5;
      z-index: 1000;
      background: black;
      color: white;
      margin-bottom: 2rem;
      padding: 0 1rem 0 1rem;
    `}
`;

const Button = styled.button`
  width: min-content;
  border-radius: 25%;
  padding: 1rem 0.5rem;
  background: black;
  color: white;
  grid-column: 1/2;
  ${(props) =>
    props.expandView &&
    `
      grid-row: 1/2;

      border: 1px transparent;
      background: transparent;
      color: color;
      padding: 0.5rem 1rem;
      justify-self: start;
      z-index: 1000;

  `};
`;

export default function FrontPage() {
  const [expandView, setExpandView] = useState(false);
  const randomText =
    "We invent, design, and build digital products that are good for" +
    "people and business.";
  const descriptionText = !expandView ? randomText : "By My Thao Nguyen";
  return (
    <Page>
      <Container>
        {expandView && (
          <Button expandView={expandView} onClick={() => setExpandView(false)}>
            X
          </Button>
        )}
        <ImageWrapper expandView={expandView}>
          <Image src={unfoldImg} alt="Unfold kontor" />
        </ImageWrapper>
        <Title expandView={expandView} className="title">
          Lost in Unfold
        </Title>

        <Description expandView={expandView}>{descriptionText}</Description>

        {!expandView && (
          <Button expandView={expandView} onClick={() => setExpandView(true)}>
            Open
          </Button>
        )}
      </Container>
    </Page>
  );
}
