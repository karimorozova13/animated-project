import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { colors } from "@/config/colors";
import { useWindowSize } from "@/util/hooks/useWindowSize";

const TableSwitch = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  border: 1px solid #043b5c;
  border-radius: 20px;
  position: relative;
  margin: 0 auto;
  max-width: 1010px;
  margin-bottom: 50px;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ length }) =>
    length > 3 &&
    `@media only screen and (max-width: 750px) {
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap; /* This is important to prevent line breaks */
  }`}
`;

const TableSwitchInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${({ length, activeTab }) =>
    length > 3 &&
    ` @media only screen and (max-width: 750px) {
    position: absolute;
    transform: translateX(calc((100% / 3 * ${
      -activeTab + 1
    }) - ${activeTab} * 30px));
    height: 100%;
    z-index: 1;
    gap: 30px;
  }`}
`;

const TableSwitchData = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.15s linear;
  justify-content: center;
  padding: 10px;
  z-index: 1;
  border-radius: 20px;
  width: ${({ length }) => `calc(100% / ${length})`};
  position: relative;

  & p {
    transition: all 0.15s linear;
    font-weight: ${({ isActiveTab }) => (isActiveTab ? "600" : "400")};
    font-size: ${({ isActiveTab }) => (isActiveTab ? "18px" : "16px")};
    color: ${({ isActiveTab }) => (isActiveTab ? "#043b5c" : "#043b5c")};
  }
  &:hover {
    & p {
      scale: ${({ isActiveTab }) => (isActiveTab ? "1" : "1.1")};
      color: #043b5c;
      font-weight: ${({ isActiveTab }) => (isActiveTab ? "600" : "500")};
    }
  }
  @media only screen and (max-width: 750px) {
    min-width: calc(100% / 3);
  }
`;

const ActiveTab = styled.div`
  display: flex;
  position: absolute;
  width: ${({ length }) => `calc(100% / ${length})`};
  height: 100%;
  left: ${({ right }) => `${right}px`};
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  transition: all 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  perspective: 1000px;
  border-radius: 20px;
  ${({ length }) =>
    length > 3 &&
    `@media only screen and (max-width: 750px) {
    left: 0;
    bottom: 0;
    height: 40px;
    top: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin: auto;
    width: calc(100% / 3 + 40px);
  }`}

  ${({ length }) =>
    length <= 3 &&
    `@media only screen and (max-width: 750px) {
    width:  calc(100% / ${length} );

  }`}
  &::before {
    content: "";
    z-index: -2;

    width: calc(100% + 3px);
    height: calc(100% + 4px);
    border-radius: 25px;
    background-color: #fde7f9;
    background-image: linear-gradient(315deg, #fde7f9 0%, #aacaef 74%);

    box-shadow: 0px -0px 20px -2px rgba(4, 59, 92, 1);
  }
  &::after {
    content: "";
    width: 100%;
    z-index: -1;

    height: 100%;
    border-radius: 25px;
    background: transparent;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(2);

  const tabs = [
    "First Year",
    "Kindergarden",
    "France",
    "On the beach",
    "Home stuff",
  ];
  const childRef = useRef();
  const parentRef = useRef();
  const { width } = useWindowSize();
  const [tabsleWidth, setTabsleWidth] = useState(-1);

  const [position, setPosition] = useState({
    right: 0,
    height: "100%",
    top: 0,
  });

  useEffect(() => {
    if (childRef.current && parentRef.current) {
      setPosition({
        right:
          childRef.current.getBoundingClientRect().left -
          parentRef.current.getBoundingClientRect().left -
          1,
      });
      setTabsleWidth(parentRef.current.clientWidth);
    }
  }, [childRef, activeTab, width]);

  return (
    <TableSwitch ref={parentRef} length={tabs.length} height={position.height}>
      <TableSwitchInner
        mwidth={tabsleWidth}
        activeTab={activeTab}
        length={tabs.length}
      >
        {tabs.map((element, index) => (
          <TableSwitchData
            ref={activeTab === index ? childRef : null}
            key={index}
            length={tabs.length}
            onClick={() => {
              setActiveTab(index);
            }}
            isActiveTab={activeTab == index}
          >
            <p>{element}</p>
          </TableSwitchData>
        ))}
      </TableSwitchInner>
      <ActiveTab length={tabs.length} right={position.right} />
    </TableSwitch>
  );
};

export default Tabs;
