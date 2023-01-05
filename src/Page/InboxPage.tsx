import styled from "styled-components";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
  MiniModalModeState,
  MiniModalOpenValueState,
  ModalModeState,
  ModalOpenValueState,
} from "../Store/statesStore";
import Modal from "../Components/Modal/Modal";
import ThemeModal from "../Components/Modal/ThemeModal";
import RecomendMessageModal from "../Components/Modal/RecomendMessageModal";
import SenderSection from "../Components/SenderSection";
import TitleSection from "../Components/TitleSection";
import InBoxContent from "../Components/InBoxContent";
import ThemeSection from "../Components/ThemeSection";
import InputMessageSection from "../Components/InputMessageSection";
import BottomSection from "../Components/BottomSection";
import MiniModal from "../Components/PopupModal/MiniModal";
import SendQuestion from "../Components/PopupModal/SendQuestion";
import Complete from "../Components/PopupModal/Complete";

export default function InboxPage() {
  const [isModalOpen] = useRecoilState(ModalOpenValueState);
  const [isMiniModalOpen] = useRecoilState(MiniModalOpenValueState);
  const [modalMode] = useRecoilState(ModalModeState);
  const [MiniModalMode] = useRecoilState(MiniModalModeState);

  const ModalComponent = useCallback(() => {
    let nowMode = modalMode.mode;

    switch (nowMode) {
      case "theme":
        return <ThemeModal />;

      case "recomededMessage":
        return <RecomendMessageModal />;

      default:
        return null;
    }
  }, [modalMode.mode]);

  const MiniModalComponent = useCallback(() => {
    let nowMode = MiniModalMode.mode;

    switch (nowMode) {
      case "question":
        return <SendQuestion />;

      case "complete":
        return <Complete />;

      default:
        return null;
    }
  }, [MiniModalMode.mode]);

  return (
    <Shelf>
      <Container>
        {isModalOpen && <Modal>{ModalComponent()}</Modal>}
        {isMiniModalOpen && <MiniModal>{MiniModalComponent()}</MiniModal>}
        <TopWrapper>
          <TitleSection />
        </TopWrapper>
        <SenderWrapper>
          <SenderSection />
        </SenderWrapper>
        <InBoxWrapper>
          <InBox>
            <InBoxContent />
          </InBox>
        </InBoxWrapper>
        <ThemeWrapper>
          <ThemeSection />
        </ThemeWrapper>
        <InputMessageWrapper>
          <InputMessageSection />
        </InputMessageWrapper>
        <BottomWrapper>
          <BottomSection />
        </BottomWrapper>
      </Container>
    </Shelf>
  );
}

const Shelf = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  @media only screen and (max-width: 400px) {
    box-shadow: none;
  }
  position: relative;
  overflow: hidden;
  width: 400px;
  height: auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 75px;
  padding-top: 7px;
  padding: 0px 15px;
`;
const SenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 15px;
`;
const InBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 70px;
  padding: 0px 15px;
`;
const InBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 40px;
  margin-bottom: 20px;
  padding: 0px 10px;
  border: 1px solid rgba(219, 219, 219, 0.7);
  border-radius: 6px;
`;
const ThemeWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 420px;
  padding: 0px 15px;
`;
const InputMessageWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 15px;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 150px;
`;
