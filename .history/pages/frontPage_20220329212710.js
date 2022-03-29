import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const Page = styled.div``;

const Heading1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Container = styled.section`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(4, min-content);
`;

const Button = styled.button`
  width: min-content;
  border-radius: 25%;
  padding: 0.5rem;
  padding: 1rem 0.5rem;
  background: ${({ close }) => (close ? white : black)};
`;

const ExpandButton = styled.button`
  width: min-content;
  color: white;
  background-color: black;
  border-radius: 25%;
  padding: 1rem 0.5rem;
`;

export default function FrontPage({ children }) {
  const [expandView, setExpandView] = useState(false);
  return (
    <Page>
      <Heading1>
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>{" "}
      </Heading1>

      <Description>
        Get started by editing <code>pages/index.js</code>
      </Description>

      <Container>
        <Button onClick={() => setExpandView(false)}>X</Button>
        <Image src={profile} alt="Random photo" />
        <Heading1>Found in Unfold</Heading1>

        <ExpandButton onClick={() => setExpandView(true)}>Open</ExpandButton>
      </Container>
    </Page>
  );
}
