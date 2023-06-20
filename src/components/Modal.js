import styled from "styled-components";

import { colors } from "@/config/colors";

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.modalBg};
`;

const Modal = ({ onClick, children }) => {
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
    >
      {children}
    </Backdrop>
  );
};

export default Modal;
