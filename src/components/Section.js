import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
