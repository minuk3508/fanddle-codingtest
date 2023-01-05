import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

type MiniModalProps = {
  children: ReactNode;
};

export default function MiniModal({ children }: MiniModalProps) {
  return (
    <ModalBackground>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const transform = keyframes`
  0% {
    transform: translateY(300%)
  }
  100% {
    transform: translateY(0%)
  }
`;
const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  min-height: 110px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  transition: 0.3s all;
  animation: ${transform} 0.5s;
`;
