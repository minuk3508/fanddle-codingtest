import styled from "styled-components";
import { useRecoilState } from "recoil";
import { ModalModeState, ModalOpenValueState } from "../Store/statesStore";
import Modal from "../Components/Modal/Modal";
import ThemeModal from "../Components/Modal/ThemeModal";
import RecomendMessageModal from "../Components/Modal/RecomendMessageModal";
import SenderSection from "../Components/SenderSection";
import TitleSection from "../Components/TitleSection";
import InBoxContent from "../Components/InBoxContent";
import ThemeSection from "../Components/ThemeSection";
import InputMessageSection from "../Components/InputMessageSection";
import { useCallback } from "react";

export default function InboxPage() {
  const [isModalOpen] = useRecoilState(ModalOpenValueState);
  const [mode] = useRecoilState(ModalModeState);

  const Component = useCallback(() => {
    let nowMode = mode.mode;

    switch (nowMode) {
      case "theme":
        return <ThemeModal />;

      case "recomededMessage":
        return <RecomendMessageModal />;

      default:
        return null;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <Shelf>
      <Container>
        {isModalOpen && <Modal>{Component()}</Modal>}
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
          <SendButtonBox>
            <SendButton>감동메시지 보내기</SendButton>
          </SendButtonBox>
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
const SendButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  padding: 0px 15px;
`;
const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  background-color: #f25449;
  border-radius: 10px;
`;
