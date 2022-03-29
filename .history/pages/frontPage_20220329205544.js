import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const Page = styled.div``;

const Button = styled.button`
  color: white;
  background-color: black;
  border-radius: 25%;
  padding: 1rem 0.5rem;
`;

export default function FrontPage({ children }) {
  const [expandView, setExpandView] = useState(false);
  return (
    <Page>
      <Image src={profile} alt="Random photo" />

      <Button onClick={() => setExpandView(true)}>Open</Button>
    </Page>
  );
}
