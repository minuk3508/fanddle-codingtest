import { AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ModalOpenValueState, selectedRecomendedTemplate } from "../../Store/statesStore";
import { selectedRecomendedState } from "../../Store/fetcherStore";
import RecomendMessageModalCategory from "./RecomendMessageModalCategory";
import useFetchTemplate from "../../Hooks/templateFetcher";

const templateStyle = {
  selected: { backgroundColor: "#f25449", color: "white", border: "none" },
  unselected: {
    backgroundColor: "white",
    color: "black",
    border: "1px solid rgba(219, 219, 219, 0.7)",
  },
};

export default function RecomendMessageModal() {
  const [, setIsModal] = useRecoilState(ModalOpenValueState);
  const [selectedUid, setSelectedUid] = useRecoilState(selectedRecomendedState);
  const [, setTemplate] = useRecoilState(selectedRecomendedTemplate);
  const { isLoading, isError, data: recomendDetailCategory } = useFetchTemplate("detail");

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
        <TitleBox>추천 메시지 보기</TitleBox>
        <CloseButtonBox onClick={closeButtonClick}>
          <AiOutlineClose />
        </CloseButtonBox>
      </ModalTopWrapper>
      <CategoryWrapper>
        <RecomendMessageModalCategory />
      </CategoryWrapper>
      <TemplateItemWrapper>
        {recomendDetailCategory.map((i: any) => (
          <TemplateItem
            key={i.uid}
            style={selectedUid === i.uid ? templateStyle.selected : templateStyle.unselected}
            onClick={() => {
              setSelectedUid(i.uid);
              setTemplate(i.koTemplate);
            }}
          >
            {i.koTemplate}
          </TemplateItem>
        ))}
      </TemplateItemWrapper>
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

const TemplateItemWrapper = styled.div`
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
const TemplateItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 50px;
  font-size: 13px;
  padding: 11px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
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
