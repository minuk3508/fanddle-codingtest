import styled from "styled-components";
import { useRecoilState } from "recoil";
import { MiniModalOpenValueState, selectedRecomendedTemplate } from "../Store/statesStore";

export default function BottomSection() {
  const [, setIsModal] = useRecoilState(MiniModalOpenValueState);
  const [text] = useRecoilState(selectedRecomendedTemplate);
  return (
    <SendButtonBox>
      <SendButton
        onClick={() => {
          if (text.length === 0) {
            alert("메시지를 입력해주세요!");
          } else if (text.length > 300) {
            alert("메시지 제한 글자 수를 초과하였습니다.");
          } else {
            setIsModal(true);
          }
        }}
      >
        감동메시지 보내기
      </SendButton>
    </SendButtonBox>
  );
}
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
  :hover {
    cursor: pointer;
  }
`;
