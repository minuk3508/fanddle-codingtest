import styled from "styled-components";
import SenderSection from "./Components/SenderSection";
import TitleSection from "./Components/TitleSection";
import ReceiveMessageSection from "./Components/ReceiveMessageSection";
import ThemeSection from "./Components/ThemeSection";
import InputMessageSection from "./Components/InputMessageSection";
import Modal from "./Components/Modal";
import { useRecoilState } from "recoil";
import { ModalComponenState, ModalOpenValueState } from "./atoms";
import ThemeModal from "./Components/ThemeModal";
import RecomendMessageModal from "./Components/RecomendMessageModal";

export default function ReceivedMassage() {
  const [isModal] = useRecoilState(ModalOpenValueState);
  const [mode] = useRecoilState(ModalComponenState);

  const Component = () => {
    let nowMode = mode.mode;

    switch (nowMode) {
      case "theme":
        return <ThemeModal />;

      case "recomededMessage":
        return <RecomendMessageModal />;
      default:
        return undefined;
    }
  };
  console.log(isModal);
  return (
    <Window>
      <Container>
        {isModal && <Modal>{Component()}</Modal>}
        <TopWrapper>
          <TitleSection />
        </TopWrapper>
        <SenderWrapper>
          <SenderSection />
        </SenderWrapper>
        <ReceiveMessage>
          <ReceiveMessageWrapper>
            <ReceiveMessageSection />
          </ReceiveMessageWrapper>
        </ReceiveMessage>
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
    </Window>
  );
}

const Window = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: auto;
  border: 1px solid black;
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
const ReceiveMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 0px 10px;
  border: 1px solid rgba(219, 219, 219, 0.7);
  border-radius: 6px;
`;
const ReceiveMessage = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 15px;
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
