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

const Button = styled.button`
  color: white;
  background-color: black;
  border-radius: 25%;
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

      <Image src={profile} alt="Random photo" />

      <Button onClick={() => setExpandView(true)}>
        "<>"
      </Button>
    </Page>
  );
}
