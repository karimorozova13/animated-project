import Link from "next/link";
import { keyframes, styled } from "styled-components";

import { colors } from "@/config/colors";
import { yellowBg } from "@/config/images";

const glowShadow = keyframes`
  0%,
  100% {
    box-shadow: 0 0 4px ${colors.linkShadowMain}, 0 0 6px ${colors.linkShadowMain}, 0 0 8px ${colors.linkShadowMain}, 0 0 10px ${colors.linkShadowSecondary},
      0 0 12px ${colors.linkShadowSecondary}, 0 0 14px ${colors.linkShadowSecondary}, 0 0 16px ${colors.linkShadowSecondary}, 0 0 18px ${colors.linkShadowSecondary};
  }
  50% {
    box-shadow: 0 0 2px ${colors.linkShadowMain}, 0 0 3px ${colors.linkShadowMain}, 0 0 4px ${colors.linkShadowMain}, 0 0 5px ${colors.linkShadowSecondary},
      0 0 6px ${colors.linkShadowSecondary}, 0 0 7px ${colors.linkShadowSecondary}, 0 0 8px ${colors.linkShadowSecondary}, 0 0 9px ${colors.linkShadowSecondary};
  }
 

`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  cursor: pointer;

  width: 100%;
  height: 200px;
  background-image: url(${yellowBg});
  background-repeat: no-repeat;
  background-size: cover;

  a {
    font-size: 48px;
    text-align: center;
    color: ${colors.accent};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 992px) {
      font-size: 56px;
    }
  }
`;

const ContainerVideo = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
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

const AboutLink = () => {
  return (
    <Wrap>
      <ContainerVideo>
        <ContainerInner />
        <Link href={"/about"}>{"His Journey through Life"}</Link>
      </ContainerVideo>
    </Wrap>
  );
};

export default AboutLink;
