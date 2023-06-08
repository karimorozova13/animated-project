import Image from "next/image";
import styled from "styled-components";

import { logo } from "@/config/images";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  height: fit-content;
  overflow: visible;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-top: 15px;

  img {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = () => {
  return (
    <Wrap>
      <MainNav>
        <Image alt={"Logo"} src={logo} width={100} height={100} priority />
      </MainNav>
    </Wrap>
  );
};
export default Header;
