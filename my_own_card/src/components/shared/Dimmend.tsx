import styled from "@emotion/styled";

function Dimmend({ children }: { children: React.ReactNode }) {
  return
}

const container = styled.div`
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background-color:rgba(0,0,0,0.7);
  z-index:var(--dimmend-zindex);

`

export default Dimmend