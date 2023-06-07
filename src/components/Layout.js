import Head from "next/head";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Header from "./Header";
import Footer from "./Footer";
import {
  baloons,
  baloonsSky,
  cat,
  coral,
  dolphin,
  pm,
  sea,
  stairs,
  underSea,
} from "@/config/images";
import Container from "./Container";
import MainTitle from "./MainTitle";
import About from "./About";

const LayoutWrapper = styled.div`
  background-color: #fff;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{"Super Hero"}</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <LayoutWrapper>
        <Header />

        <Parallax pages={3}>
          <ParallaxLayer
            speed={1}
            offset={0}
            factor={5}
            style={{
              backgroundImage: `url(${baloons})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.2} factor={1.7}>
            <Container>
              <MainTitle />
              <About />
            </Container>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2} factor={1.8}>
            <Container>
              <h1>There</h1>
            </Container>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            factor={2.5}
            // style={{
            //   backgroundImage: `url(${baloons})`,
            //   backgroundSize: "cover",
            // }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: "none" }}
          >
            <img src={pm} style={{ width: "35%", marginLeft: "70%" }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5} factor={2.5}>
            <Container>
              <h1>End</h1>
            </Container>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={0} speed={0.2} factor={3}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                gap: "10px",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "100px",
                width: "max-content",
                height: "100%",
                border: "5px solid red",
              }}
            >
              {Array.from({ length: 15 }).map(() => (
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    border: "1px solid violet",
                  }}
                />
              ))}
            </div>
          </ParallaxLayer> */}
        </Parallax>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
