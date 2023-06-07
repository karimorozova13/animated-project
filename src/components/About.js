import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";

const Des = styled.p`
  color: ${colors.mainText};
  font-size: 24px;
  text-align: center;
  background-color: ${colors.mainWhite};
  padding: 7px;
  border-radius: 10px;
`;

const About = () => {
  return (
    <Des>
      {
        "The arrival of the baby boy was nothing short of amazing. From the moment he entered the world, his arrival brings immense joy and wonder to everyone around him. With his bright eyes and infectious smile, he captivates hearts and fills the room with pure delight. Each day, his curiosity and eagerness to explore the world grow, as he reaches new milestones and discovers the wonders around him. His infectious laughter and boundless energy bring a sense of warmth and happiness to those who have the privilege of being in his company. This amazing baby boy, with his limitless potential and endearing personality, is a constant reminder of the beauty and magic that exists in life."
      }
    </Des>
  );
};

export default About;
