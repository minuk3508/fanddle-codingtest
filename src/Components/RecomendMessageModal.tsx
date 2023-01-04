import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { ModalOpenValueState, selectedRecomendedTemplate } from "../atoms";
import {
  recomendCategoryDetailSelector,
  recomendCategorySelector,
  recomendSelector,
  selectedRecomendCategoryState,
  selectedRecomendedState,
} from "../fetcher";

export default function RecomendMessageModal() {
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [selectedUid, setSelectedUid] = useRecoilState(selectedRecomendedState);
  const [, setTemplate] = useRecoilState(selectedRecomendedTemplate);
  const [categoryUid, setCategoryUid] = useRecoilState(
    selectedRecomendCategoryState
  );

  const recomendCategory = useRecoilValue(recomendCategorySelector);

  const recomendDetailCategory = useRecoilValue(recomendCategoryDetailSelector);

  return (
    <>
      <ModalTopWrapper>
        <TitleBox>추천 메시지 보기</TitleBox>
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
        {recomendCategory.categories.map((i: any) => (
          <CategoryItems
            key={i.uid}
            style={
              categoryUid === i.uid
                ? { backgroundColor: "#f25449", color: "white" }
                : { backgroundColor: "#f0f0f0", color: "#858585" }
            }
            onClick={() => {
              setCategoryUid(i.uid);
            }}
          >
            {i.name}
          </CategoryItems>
        ))}
      </CategoryWrapper>
      <ThemeContentsWrapper>
        {recomendDetailCategory.map((i: any) => (
          <ThemeContentsImage
            key={i.uid}
            style={
              selectedUid === i.uid
                ? { border: "2px solid #f25449" }
                : { border: "1px solid rgba(219, 219, 219, 0.7)" }
            }
            onClick={() => {
              setSelectedUid(i.uid);
              setTemplate(i.koTemplate);
            }}
          >
            {i.koTemplate}
          </ThemeContentsImage>
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
  min-width: 90px;
  height: 26px;
  padding: 0px 10px;
  margin-right: 5px;
  font-size: 11px;
  /* color: #858585; */
  /* background-color: #f0f0f0; */
  border-radius: 8px;
`;
const ThemeContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const ThemeContentsImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 50px;
  font-size: 13px;
  padding: 11px;
  border-radius: 5px;
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
