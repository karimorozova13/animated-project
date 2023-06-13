import { styled } from "styled-components";

import { colors } from "@/config/colors";

const Title = styled.h1`
  color: ${colors.mainWhite};
  font-size: 60px;
  text-align: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 992px) {
    font-size: 100px;
  }
`;

const MainTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default MainTitle;
