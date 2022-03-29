import styled from "styled-components";
import Link from "next/link";

const Page = styled.div`
  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }
`;

export default function FrontPage({ children }) {
  return (
    <Page>
      <h1 className="title">
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>{" "}
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </Page>
  );
}
