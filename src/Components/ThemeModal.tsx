import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedImageUrl, ModalOpenValueState } from "../atoms";
import {
  selectedCategoryState,
  selectedThemeState,
  themeCategoryDetailSelector,
  themeCategorySelector,
} from "../fetcher";

export default function ThemeModal() {
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [themeUid, setThemeUid] = useRecoilState(selectedThemeState);
  const [categoryUid, setCategoryUid] = useRecoilState(selectedCategoryState);
  const [, setThemeImage] = useRecoilState(selectedImageUrl);
  const data2 = useRecoilValue(themeCategorySelector);
  const data3 = useRecoilValue(themeCategoryDetailSelector);

  return (
    <>
      <ModalTopWrapper>
        <TitleBox>편지테마 자세히 보기</TitleBox>
        <CloseButtonBox onClick={() => setIsModal(false)}>
          <AiOutlineClose />
        </CloseButtonBox>
      </ModalTopWrapper>
      <CategoryWrapper>
        <CategoryItems
          style={
            categoryUid === "default"
              ? { backgroundColor: "#f25449", color: "white" }
              : { backgroundColor: "#f0f0f0", color: "#858585" }
          }
          onClick={() => {
            setCategoryUid("default");
          }}
        >
          전체
        </CategoryItems>
        {data2.categories.map((i: any) => (
          <CategoryItems
            key={i.uid}
            style={
              categoryUid === i.uid
                ? { backgroundColor: "#f25449", color: "white" }
                : { backgroundColor: "#f0f0f0", color: "#858585" }
            }
            onClick={() => {
              setCategoryUid(i.uid);
              setThemeImage("default");
            }}
          >
            {i.name}
          </CategoryItems>
        ))}
      </CategoryWrapper>
      <ThemeContentsWrapper>
        {data3.map((i: any) => (
          <ThemeContentsImage
            key={i.uid}
            style={
              themeUid === i.uid
                ? { border: "2px solid #f25449" }
                : { border: "none" }
            }
            src={i.mainUrl}
            onClick={() => {
              setThemeImage(i.mainUrl);
              setThemeUid(i.uid);
            }}
          />
        ))}
      </ThemeContentsWrapper>
      <ModalBottomWrapper>
        <ConfirmButton
          onClick={() => {
            setIsModal(false);
          }}
        >
          확인
        </ConfirmButton>
      </ModalBottomWrapper>
    </>
  );
}
const ModalTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 45px;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 16px;
  font-weight: 700;
`;
const CloseButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  height: 45px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const CategoryItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 78px;
  height: 26px;
  padding: 0px 10px;
  margin-right: 5px;
  font-size: 11px;
  /* color: #858585; */
  /* background-color: #f0f0f0; */
  border-radius: 8px;
`;
const ThemeContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  row-gap: 10px;
  overflow: scroll;
  width: 100%;
  height: 200px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ThemeContentsImage = styled.img`
  width: 130px;
  height: auto;
  border-radius: 10px;
`;
const ConfirmButton = styled.div`
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
const ModalBottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 110px;
  padding-top: 20px;
`;
