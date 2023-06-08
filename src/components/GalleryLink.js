import { pspBackground } from "@/config/images";
import Link from "next/link";
import React from "react";
import { keyframes, styled } from "styled-components";

const glowShadow = keyframes`
  0%,
  100% {
    box-shadow: 0 0 4px #B54DFF, 0 0 6px #B54DFF, 0 0 8px #B54DFF, 0 0 10px #ff00de,
      0 0 12px #ff00de, 0 0 14px #ff00de, 0 0 16px #ff00de, 0 0 18px #ff00de;
  }
  50% {
    box-shadow: 0 0 2px #B54DFF, 0 0 3px #B54DFF, 0 0 4px #B54DFF, 0 0 5px #ff00de,
      0 0 6px #ff00de, 0 0 7px #ff00de, 0 0 8px #ff00de, 0 0 9px #ff00de;
  }
 

`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding: 60px 0;
  cursor: pointer;

  width: 100%;
  height: 200px;
  /* background: url(/images/accCompBg.png) right 25% top -100px / cover no-repeat; */
  background-color: yellow;

  a {
    font-size: 80px;
    text-align: center;
    /* position: absolute;
    left: 50%; */

    @media only screen and (min-width: 992px) {
      font-size: 100px;
    }
  }
`;

const ContainerVideo = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  background-color: yellow;

  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ContainerInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0.6;
  mix-blend-mode: color;
  background-image: linear-gradient(315deg, #ff0000 0%, #ffed00 74%);
  /* box-shadow: rgb(224, 224, 13) 0px 0px 3px 1px, rgb(224, 224, 13) 0px 0px 2px,
    rgb(224, 224, 13) 0px 0px 3px, rgb(255, 0, 222) 0px 0px 11px 0px,
    rgb(255, 0, 222) 0px 0px 1px, rgb(255, 0, 222) 0px 0px 17px,
    rgb(255, 0, 222) 0px 0px 30px, rgb(255, 0, 222) 0px 0px 0px 0px;
  animation: ${glowShadow} 4s ease-in-out infinite alternate none running; */
  filter: blur(4px);
`;

const GalleryLink = () => {
  return (
    <Wrap>
      {/* <ContainerVideo>
        <video
          src={pspBackground}
          autoPlay
          loop
          muted
          width="1200"
          height="360"
        />
        <ContainerInner /> */}
      <Link href={"/gallery"} target="_blank" rel="noopener noreferrer">
        {"Visit Gallery"}
      </Link>
      {/* </ContainerVideo> */}
    </Wrap>
  );
};

export default GalleryLink;
