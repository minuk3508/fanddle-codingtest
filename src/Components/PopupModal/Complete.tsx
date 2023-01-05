import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { MiniModalModeState, MiniModalOpenValueState } from "../../Store/statesStore";
import { useRecoilState } from "recoil";
import { BsCheckCircle } from "react-icons/bs";

export default function Complete() {
  const [, setIsModal] = useRecoilState(MiniModalOpenValueState);
  const [, setMiniModalMode] = useRecoilState(MiniModalModeState);

  useEffect(() => {
    const unMountTimeOut = setTimeout(() => {
      setIsModal(false);
      setMiniModalMode({ mode: "question" });
    }, 2500);

    return () => clearTimeout(unMountTimeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CompleteWrapper>
      <CheckIconBox>
        <BsCheckCircle />
      </CheckIconBox>
      <CommentBox>
        감동메시지를
        <br />
        성공적으로 보냈어요!
      </CommentBox>
    </CompleteWrapper>
  );
}
const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 10%;
`;
const checkColor = keyframes`
    0%{
        color: #f0f0f0;
    }
    30%{
        color: #f0f0f0;
    }
    100%{
        color: #f25449;
    }
`;
const CheckIconBox = styled.div`
  font-size: 60px;
  color: #f25449;
  animation: ${checkColor} 1s;
`;
const CommentBox = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
