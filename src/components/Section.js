import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0;
`;

const Section = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
