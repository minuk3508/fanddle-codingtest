import styled from "styled-components";
import SenderSection from "./Components/SenderSection";
import TitleSection from "./Components/TitleSection";
import ReceiveMessageSection from "./Components/ReceiveMessageSection";
import ThemeSection from "./Components/ThemeSection";
import InputMessageSection from "./Components/InputMessageSection";
import Modal from "./Components/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilValue, useRecoilState } from "recoil";
import { ModalOpenValueState, selectedImageUrl } from "./atoms";
import {
  selectedCategoryState,
  selectedThemeState,
  themeCategoryDetailSelector,
  themeCategorySelector,
} from "./fetcher";

type StyledProps = {
  selectedStyle: string;
};

export default function ReceivedMassage() {
  const [isModal, setIsModal] = useRecoilState(ModalOpenValueState);
  const [themeUid, setThemeUid] = useRecoilState(selectedThemeState);
  const [categoryUid, setCategoryUid] = useRecoilState(selectedCategoryState);
  const [, setThemeImage] = useRecoilState(selectedImageUrl);

  const data2 = useRecoilValue(themeCategorySelector);
  const data3 = useRecoilValue(themeCategoryDetailSelector);

  return (
    <Window>
      <Container>
        {isModal && (
          <Modal>
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
          </Modal>
        )}
        <TopWrapper>
          <TitleSection />
        </TopWrapper>
        <SenderWrapper>
          <SenderSection />
        </SenderWrapper>
        <ReceiveMessage>
          <ReceiveMessageWrapper>
            <ReceiveMessageSection />
          </ReceiveMessageWrapper>
        </ReceiveMessage>
        <ThemeWrapper>
          <ThemeSection />
        </ThemeWrapper>
        <InputMessageWrapper>
          <InputMessageSection />
        </InputMessageWrapper>
        <BottomWrapper>
          <SendButtonBox>
            <SendButton>감동메시지 보내기</SendButton>
          </SendButtonBox>
        </BottomWrapper>
      </Container>
    </Window>
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
const Window = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: auto;
  border: 1px solid black;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 75px;
  padding-top: 7px;
  padding: 0px 15px;
`;
const SenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 15px;
`;
const ReceiveMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 0px 10px;
  border: 1px solid rgba(219, 219, 219, 0.7);
  border-radius: 6px;
`;
const ReceiveMessage = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 15px;
`;
const ThemeWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 420px;
  padding: 0px 15px;
`;
const InputMessageWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 0px 15px;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 150px;
`;
const SendButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  padding: 0px 15px;
`;
const SendButton = styled.div`
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
`;
