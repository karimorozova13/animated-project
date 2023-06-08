import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";
const Foot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 7px;
  background-color: rgba(255, 255, 255, 0.3);
  p {
    color: ${colors.mainText};
    font-size: 16px;
    text-align: center;
    font-weight: 700;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <p>{`©${new Date().getFullYear()}. Created by Karine Morozova. All Rights Reserved.`}</p>
    </Foot>
  );
};

export default Footer;
