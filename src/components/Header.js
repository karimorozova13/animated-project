import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

import { logo } from "@/config/images";
import { colors } from "@/config/colors";

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
    background-color: ${colors.footerBg};
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
        <Link href={"/"}>
          <Image alt={"Logo"} src={logo} width={100} height={100} priority />
        </Link>
      </MainNav>
    </Wrap>
  );
};
export default Header;
