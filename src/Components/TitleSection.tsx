import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";

export default function TitleSection() {
  return (
    <Container>
      <BackButtonBox>
        <SlArrowLeft />
      </BackButtonBox>
      <TitleBox>감동메세지 보내기</TitleBox>
      <SettingButtonBox>
        <BsThreeDots />
      </SettingButtonBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;
const BackButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 20px;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
`;
const SettingButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 15px;
`;
