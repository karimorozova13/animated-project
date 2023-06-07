import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  color: ${colors.mainWhite};
  font-size: 80px;
  text-align: center;
`;

const MainTitle = () => {
  return <Title>{"Platon Morozov"}</Title>;
};

export default MainTitle;
