import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

import { useWindowSize } from "@/util/hooks/useWindowSize";

import { logo } from "@/config/images";
import { colors } from "@/config/colors";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  min-height: 70px;
  overflow: visible;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: teal;
    transition: background-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 700;
    width: fit-content;
    padding: 2px 10px;
    border-radius: 4px;

    @media only screen and (max-width: 900px) {
      padding: 5px;
      &:hover,
      &:focus {
        background-color: transparent;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 10px;
  }
`;
const MainNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  @media only screen and (max-width: 900px) {
    padding: 0;
  }
`;
const LinksList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin-left: auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: fit-content;
    margin-left: 0;

    li.mob {
      a.main {
        font-size: 20px;
        font-weight: 700;
      }
    }
    li.mob:not(:last-child) {
      padding: 0 0 20px;
    }
  }
`;
const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 35px;
  height: 35px;
  z-index: 2;
  cursor: pointer;
  span {
    width: 80%;
    height: 4px;
    background-color: ${({ isMenu }) => (!isMenu ? "transparent" : "#fff")};
    border-radius: 12px;
    display: block;
    transition: background-color 0.5s ease-in-out;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      width: 100%;
      background-color: #fff;
      display: block;
      transition: all 0.5s ease-in-out;
      border-radius: 12px;
      height: 4px;
    }
    &::before {
      transform: ${({ isMenu }) =>
        !isMenu ? "rotateZ(45deg) translateY(0)" : "translateY(-10px)"};
    }
    &::after {
      transform: ${({ isMenu }) =>
        !isMenu ? "rotateZ(-45deg) translateY(0)" : "translateY(10px)"};
      margin-top: -4px;
    }
  }
`;
const BackDrop = styled.div`
  position: absolute;
  top: 100%;
  right: -10px;
  width: 100%;
  height: 100vh;
  transform: ${({ isMenu }) =>
    !isMenu ? "translateX(100%)" : "translateX(0)"};
  transition: transform 700ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
const SideBar = styled.div`
  background-color: ${colors.mainBg};

  position: absolute;
  width: 50%;
  top: 1px;
  right: 0;
  padding: 30px 15px 50px;
  overflow-y: auto;
  height: calc(100vh - 80px);
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 500px) {
    width: 80%;
  }
`;
const SubMenu = styled.div`
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 100%;
  left: 0;

  a {
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid transparent;
    position: relative;

    &[data-active] {
      &::after {
        position: absolute;
        content: "";
        top: 85%;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 5px;
        z-index: 1;
      }
      &::before {
        position: absolute;
        content: "";
        top: 120%;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-width: 0 7px 7px 0;
        display: inline-block;
        padding: 5px;
        z-index: 1;
      }
    }
  }
`;
const MobileSubMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const SubItem = styled.li`
  width: calc(100% / 2 - 10px / 2);
  font-size: 14px;
  opacity: 0.9;
`;
const SubSubMenu = styled.div`
  width: 100%;
  padding: 40px;
  background: red;
  position: absolute;
  top: 100%;
  left: 0;
`;

const Header = () => {
  const { width } = useWindowSize();
  const [isMenu, setIsMenu] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(null);
  const [active, setActive] = useState(0);
  const closeMenu = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenu(false);
    }
  };
  const navBarData = [{ title: "About" }, { title: "Gallery" }];

  return (
    <Wrap>
      <MainNav>
        {/* <ImgWrap onMouseEnter={() => setCurrentIdx(null)}>
          <Link href={"/"}> */}
        <Image alt={"Logo"} src={logo} width={100} height={100} priority />
        {/* </Link>
        </ImgWrap> */}

        {/* {width < 901 && (
          <Burger
            isMenu={!isMenu}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenu(!isMenu);
            }}
          >
            <span />
          </Burger>
        )} */}
        {/* {width > 900 && (
            <>
              <LinksList>
                {navBarData.map(({ title }, idx) => {
                  return (
                    <li key={idx}>
                      <Link
                        onMouseEnter={() => setCurrentIdx(idx)}
                        href={`/${title.toLowerCase()}`}
                      >
                        {title}
                      </Link>
                      {currentIdx >= 0 && navBarData[currentIdx]?.subMneu && (
                      <SubMenu onMouseLeave={() => setCurrentIdx(null)}>
                      {navBarData[currentIdx].subMneu.map((el, idx) => {
                        return (
                          <Link
                          data-active={active === idx ? true : null}
                          key={idx}
                          href={`/${el.toLowerCase()}`}
                          onMouseEnter={() => setActive(idx)}
                          >
                          {el}
                          </Link>
                          );
                        })}
                        <SubSubMenu></SubSubMenu>
                        </SubMenu>
                      )}
                    </li>
                  );
                })}
              </LinksList>
            </>
          )} */}
        {width < 901 && (
          <BackDrop isMenu={isMenu} onClick={closeMenu}>
            <SideBar onClick={closeMenu}>
              <LinksList>
                {navBarData.map(({ title, subMneu }, idx) => {
                  return (
                    <li className="mob" key={idx}>
                      <Link className="main" href={`/${title.toLowerCase()}`}>
                        {title}
                      </Link>
                      {subMneu && (
                        <MobileSubMenu>
                          {subMneu.map((el, idx) => {
                            return (
                              <SubItem key={idx}>
                                <Link href={`/${el.toLowerCase()}`}>{el}</Link>
                              </SubItem>
                            );
                          })}
                        </MobileSubMenu>
                      )}
                    </li>
                  );
                })}
              </LinksList>
            </SideBar>
          </BackDrop>
        )}
      </MainNav>
    </Wrap>
  );
};
export default Header;
