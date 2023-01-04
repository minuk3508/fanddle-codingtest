import { ReactNode, useRef } from "react";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { ModalOpenValueState } from "../atoms";

type ModalProps = {
  children: ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const modalElement = useRef<HTMLDivElement>(null);
  const onClick = (e: any) => {
    if (!modalElement.current?.contains(e.target)) {
      setIsModal(false);
    }
  };
  return (
    <ModalBackground onClick={onClick}>
      <ModalWrapper ref={modalElement}>
        <ModalBox>{children}</ModalBox>
      </ModalWrapper>
    </ModalBackground>
  );
}
const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const height = keyframes`
  0% {
    height: 75px;
  }

  100% {
    height: 350px;
  }
`;
const ModalWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 400px;
  padding-top: 10px;
  padding: 20px 20px;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  animation: ${height} 0.3s;
`;
const ModalBox = styled.div`
  width: 100%;
  height: 100%;
`;
