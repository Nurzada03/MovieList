import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdropt onClick={onClose} />
          <Card>
            <div>{children}</div>
          </Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  position: fixed;
  z-index: 120;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
 
`;

const Backdropt = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
