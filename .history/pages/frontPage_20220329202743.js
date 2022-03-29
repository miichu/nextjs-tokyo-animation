import styled from "styled-components";
import Link from "next/link";

const Page = styled.div``;

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
