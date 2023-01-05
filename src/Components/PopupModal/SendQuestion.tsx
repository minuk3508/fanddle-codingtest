import styled from "styled-components";
import { useRecoilState } from "recoil";
import { MiniModalModeState, MiniModalOpenValueState } from "../../Store/statesStore";

export default function SendQuestion() {
  const [, setIsModal] = useRecoilState(MiniModalOpenValueState);
  const [, setMiniModalMode] = useRecoilState(MiniModalModeState);
  const cancelButtonClick = () => {
    setIsModal(false);
  };

  const confirmButtonClick = () => {
    setMiniModalMode({ mode: "complete" });
  };

  return (
    <SendQuestionWrapper>
      <Question>감동메시지를 전송하시겠어요?</Question>
      <ButtonBox>
        <NOButton onClick={cancelButtonClick}>아니오</NOButton>
        <YESButton onClick={confirmButtonClick}>네</YESButton>
      </ButtonBox>
    </SendQuestionWrapper>
  );
}
const SendQuestionWrapper = styled.div`
  width: 100%;
  height: 90px;
`;
const Question = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 16px;
  font-weight: 700;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 60%;
`;
const NOButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 80%;
  color: #858585;
  font-size: 14px;
  font-weight: 700;
  background-color: #f0f0f0;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
const YESButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 80%;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: #f25449;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
