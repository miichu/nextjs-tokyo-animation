import styled from "styled-components";
import Link from "next/link";

const Page = styled.div`
  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }
`;

const Heading1 = styled.h1`
  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

export default function FrontPage({ children }) {
  return (
    <Page>
      <Heading1>
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>{" "}
      </Heading1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </Page>
  );
}
