import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  ModalModeState,
  ModalOpenValueState,
  selectedRecomendedTemplate,
} from "../Store/statesStore";

type StyledProps = {
  isoverlenth: "red" | "#8f8f8f";
};

export default function InputMessageSection() {
  const [text, setText] = useRecoilState(selectedRecomendedTemplate);
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [, setMode] = useRecoilState(ModalModeState);
  const [overLength, setOverLength] = useState(false);

  const inputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (text.length > 300) {
      setOverLength(true);
    } else {
      setOverLength(false);
    }
  };
  const recomendMessage = () => {
    setIsModal(true);
    setMode({ mode: "recomededMessage" });
  };
  return (
    <>
      <Title>
        메시지 입력하기
        <Span onClick={recomendMessage}>추천메시지 보기</Span>
      </Title>
      <MessageContentsWrapper>
        <MessageContents spellCheck={false} value={text} onChange={inputText} />
        <MaxTextLangth isoverlenth={overLength ? "red" : "#8f8f8f"}>
          {text.length}/300
        </MaxTextLangth>
      </MessageContentsWrapper>
    </>
  );
}
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
`;
const Span = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #8f8f8f;
  :hover {
    cursor: pointer;
  }
`;
const MessageContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 170px;
  padding: 15px;
  background-color: #f7f7f7;
  border-radius: 10px;
`;
const MessageContents = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  outline: none;
  resize: none;
  background: none;
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
  }
`;
const MaxTextLangth = styled.div<StyledProps>`
  font-size: 12px;
  color: ${(props) => props.isoverlenth};
`;
