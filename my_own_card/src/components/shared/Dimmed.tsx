import styled from "@emotion/styled";
import React from "react";

function Dimmed({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>; // children을 포함한 JSX를 반환
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--dimmed-zindex);
`;

export default Dimmed;
