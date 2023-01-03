import React from "react";
import styled from "styled-components";

export default function SenderSection() {
  return (
    <>
      <SenderBox>
        <SenderImage />
        <SenderName>
          <span>from.</span>
          <Name>JO-HOMIN</Name>
        </SenderName>
      </SenderBox>
      <SendDateBox>2023.01.03</SendDateBox>
    </>
  );
}
const SenderBox = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 60px;
`;
const SenderImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: red;
`;
const SenderName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 100%;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 500;
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
`;
const SendDateBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 60px;

  font-size: 11px;
  font-weight: 600;
`;
