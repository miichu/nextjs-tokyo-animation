import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import unfoldImg from "../public/images/UnfoldKontorPlus.jpg";
import CloseButton from "../common/CloseButton";
import ExpandButton from "../common/ExpandButton";

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
  height: 90%;
  width: 90%;

  transform: scale(1);
  transition: transform 330ms ease-out;

  ${(props) =>
    props.expandView &&
    `
      transform: scale(2);
      transition: transform 330ms ease-in;
    `}
`;

const Title = styled.h1`
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

const Description = styled.p`
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
    `}
`;

export default function FrontPage() {
  const [expandView, setExpandView] = useState(false);
  const randomText =
    "We invent, design, and build digital products" +
    " that are good for people and business.";
  const descriptionText = !expandView ? randomText : "By My Thao Nguyen";
  return (
    <Page>
      <Container>
        <CloseButton
          expandView={expandView}
          onClick={() => setExpandView(false)}
        />

        <ImageWrapper expandView={expandView}>
          <Image src={unfoldImg} alt="Unfold kontor" height="1000" />
        </ImageWrapper>
        <Title expandView={expandView} className="title">
          Found in Unfold
        </Title>

        <Description expandView={expandView}>{descriptionText}</Description>

        {!expandView && (
          <ExpandButton
            expandView={expandView}
            onClick={() => setExpandView(true)}
          />
        )}
      </Container>
    </Page>
  );
}
