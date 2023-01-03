import React from "react";
import styled from "styled-components";

export default function BottomSection() {
  return <SendButton>감동메시지 보내기</SendButton>;
}
const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  background-color: #f25449;
  border-radius: 10px;
`;
