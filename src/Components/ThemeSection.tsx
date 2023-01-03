import React from "react";
import styled from "styled-components";

export default function ThemeSection() {
  return (
    <>
      <Title>테마 선택</Title>
      <ThemeContents></ThemeContents>
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
const ThemeContents = styled.div`
  width: 100%;
  height: 270px;
  border: 1px solid black;
`;
