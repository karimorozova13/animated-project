import styled from "styled-components";

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
  background-color: rgba(0, 0, 0, 0.8);
`;

const Modal = ({ onClick }) => {
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClick();
        }
      }}
    ></Backdrop>
  );
};

export default Modal;
