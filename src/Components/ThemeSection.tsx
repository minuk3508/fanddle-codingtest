import { useState } from "react";
import styled from "styled-components";
import { themeSelector } from "../fetcher";
import { useRecoilValue, useRecoilState } from "recoil";
import { ModalOpenValueState } from "../atoms";

type StyledProps = {
  outLine?: string;
  url?: string;
};

export default function ThemeSection() {
  const themeData = useRecoilValue(themeSelector);
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [imageUrl, setImageUrl] = useState(themeData[0].mainUrl);

  return (
    <>
      <Title>
        테마 선택
        <Span onClick={() => setIsModal(true)}>편지테마 자세히보기</Span>
      </Title>
      <ThemeContents>
        <SelectThemeBox>
          <SelectTheme>
            {themeData.map((i: any) => (
              <ThemeIconsBox key={i.uid}>
                <ThemeIcons
                  key={i.uid}
                  src={i.iconUrl}
                  onClick={() => {
                    setImageUrl(i.mainUrl);
                  }}
                />
              </ThemeIconsBox>
            ))}
          </SelectTheme>
        </SelectThemeBox>
        <ThemeImageBox>
          <ThemeImage alt="선택된 테마이미지" src={imageUrl} />
        </ThemeImageBox>
      </ThemeContents>
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
const ThemeContents = styled.div`
  width: 100%;
  height: 290px;
`;
const SelectThemeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(201, 201, 201, 0.5);
`;
const SelectTheme = styled.div`
  overflow: scroll;
  display: flex;
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const ThemeIconsBox = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  min-width: 55px;
  height: 55px;
  min-height: 55px;
  margin-right: 6px;
  border-radius: 10px;
`;
const ThemeIcons = styled.img<StyledProps>`
  width: 60px;
  height: 60px;
`;
const ThemeImageBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
const ThemeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
