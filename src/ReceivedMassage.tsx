import styled from "styled-components";
import SenderSection from "./Components/SenderSection";
import TitleSection from "./Components/TitleSection";
import ReceiveMessageSection from "./Components/ReceiveMessageSection";
import ThemeSection from "./Components/ThemeSection";
import InputMessageSection from "./Components/InputMessageSection";

import { useRecoilValue } from "recoil";
import {
  themeCategoryDetailSelector,
  themeCategorySelector,
  themeSelector,
} from "./fetcher";

export default function ReceivedMassage() {
  const data = useRecoilValue(themeSelector);
  const data2 = useRecoilValue(themeCategorySelector);
  const data3 = useRecoilValue(themeCategoryDetailSelector);
  console.log(data);
  console.log(data2);
  console.log(data3);
  return (
    <Window>
      <Container>
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
          <SendButton>감동메시지 보내기</SendButton>
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
  overflow: hidden;
  width: 320px;
  height: auto;
  padding: 7px 15px;
  border: 1px solid black;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 75px;
`;
const SenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
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
`;
const ThemeWrapper = styled.div`
  width: 100%;
  height: 340px;
`;
const InputMessageWrapper = styled.div`
  width: 100%;
  height: 200px;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 150px;
`;
const ModalWrapper = styled.div`
  width: 100%;
  height: 60px;
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
