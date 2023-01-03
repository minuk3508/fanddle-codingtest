import React from "react";
import styled from "styled-components";

export default function InputMessageSection() {
  return (
    <>
      <Title>메시지 입력하기</Title>
      <MessageContents></MessageContents>
    </>
  );
}
const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
`;
const MessageContents = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid black;
`;
