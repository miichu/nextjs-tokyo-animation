import styles from "./layout.module.css";
import styled from "styled-components/macro";

const StyledLayout = styled.div`
  background-color: blue;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}
