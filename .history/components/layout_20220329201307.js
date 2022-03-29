import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: blue;
`;

export default function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}
