import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import { firstYear } from "@/config/gallery";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";
import { yellowBg } from "@/config/images";
import Tabs from "@/components/Tabs";

const scaleImage = keyframes`
  0%
   {
   transform: scale(0.5);
  }
  100% {
    transform: scale(1);

  }
 

`;

const Wrap = styled.div`
  background-image: url(${yellowBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;

  list-style: none;
`;
const Item = styled.li`
  width: 100%;
  max-width: 360px;
  position: relative;
  height: 290px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: calc(100% / 2 - 10px / 2);
  }
  @media only screen and (min-width: 992px) {
    width: calc(100% / 3 - 20px / 3);
  }
  &:hover p {
    bottom: 0;
  }
  animation: ${scaleImage} 1000ms cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const LightBox = styled.div`
  position: relative;

  & img {
    max-width: 100vw;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
`;
const Des = styled.p`
  width: 100%;
  position: absolute;
  bottom: -100%;
  left: 0;

  padding: 7px;
  text-align: center;
  color: ${colors.mainWhite};
  background-color: rgb(30, 128, 194, 0.6);

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const year = ({ data, slug }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {}, []);

  return (
    <Wrap>
      <Section>
        <Container>
          <Tabs />
          <List>
            {data.map(({ preview, description }, idx) => {
              return (
                <Item
                  key={idx}
                  onClick={() => {
                    setIsFullScreen(true);
                    setCurrent(idx);
                    console.log(current);
                  }}
                >
                  <Image src={preview} fill alt={description} />
                  <Des>{description}</Des>
                </Item>
              );
            })}
          </List>
        </Container>
        {isFullScreen && (
          <Modal onClick={() => setIsFullScreen(false)}>
            <LightBox>
              <Image
                src={data[current].preview}
                width={1250}
                height={800}
                alt={data[current].description}
                onClick={() => setIsFullScreen(false)}
              />
            </LightBox>
          </Modal>
        )}
      </Section>
      <Footer position={"static"} />
    </Wrap>
  );
};
export default year;

export function getStaticPaths(context) {
  const paths = ["first-year-life", "second-year-life", "third-year-life"];
  return {
    paths: paths.map((year) => ({
      params: { year },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { year = "" } = context.params;
  const images = firstYear;

  return {
    props: {
      data: images,
      slug: year,
      metaData: {
        title: `PM - ${year}`,
        keywords: year,
      },
    },
  };
}
