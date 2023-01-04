import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedImageUrl, ModalOpenValueState } from "../../Store/statesStore";
import { selectedThemeState } from "../../Store/fetcherStore";
import { AiOutlineClose } from "react-icons/ai";
import useFetchTheme from "../../Hooks/themeFetcher";
import ThemeModalCategory from "./ThemeModalCategory";

const themeImageStyle = {
  selected: { border: "2px solid #f25449" },
  unselected: { border: "none" },
};

export default function ThemeModal() {
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [, setSelectedThemeImageUrl] = useRecoilState(selectedImageUrl);
  const [selectedThemeUid, setSelectedThemeUid] = useRecoilState(selectedThemeState);
  const { isLoading, isError, data: categoryDetailData } = useFetchTheme("detail");

  const closeButtonClick = () => {
    setIsModal(false);
  };
  const confimButtonClick = () => {
    setIsModal(false);
  };
  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>오류가 발생했어요!</div>;
  }

  return (
    <>
      <ModalTopWrapper>
        <TitleBox>편지테마 자세히 보기</TitleBox>
        <CloseButtonBox onClick={closeButtonClick}>
          <AiOutlineClose />
        </CloseButtonBox>
      </ModalTopWrapper>
      <CategoryWrapper>
        <ThemeModalCategory />
      </CategoryWrapper>
      <ThemeContentsWrapper>
        {categoryDetailData.map((i: any) => (
          <ThemeContentsImage
            key={i.uid}
            style={
              selectedThemeUid === i.uid ? themeImageStyle.selected : themeImageStyle.unselected
            }
            src={i.mainUrl}
            onClick={() => {
              setSelectedThemeImageUrl(i.mainUrl);
              setSelectedThemeUid(i.uid);
            }}
          />
        ))}
      </ThemeContentsWrapper>
      <ModalBottomWrapper>
        <ConfirmButton onClick={confimButtonClick}>확인</ConfirmButton>
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
