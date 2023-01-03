import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SenderSection from "./Components/SenderSection";
import TitleSection from "./Components/TitleSection";
import ReceiveMessageSection from "./Components/ReceiveMessageSection";
import ThemeSection from "./Components/ThemeSection";
import InputMessageSection from "./Components/InputMessageSection";
import BottomSection from "./Components/BottomSection";

const BEARE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVpZCI6ImRhZWU2YmI5LTEwZmEtNDZmMC04ZDk0LTdlMjdkODY3NzdjOSJ9LCJhY2NvdW50Ijp7InVpZCI6IjJlOTM3OWExLTJmZjEtNDU1MC05OTkwLWVlZGFkZmNjYjNkOCJ9LCJpYXQiOjE2NzI2NTY5OTEsImV4cCI6MTY3NTI0ODk5MSwiaXNzIjoiZmFuZGRsZSIsInN1YiI6ImF1dGgifQ.IplI76PV-fbzeeAC9PKcvenJKO9LqV2SsVq1AtnHJ3Q";

export default function ReceivedMassage() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://prod-app.fanddle.co.kr/gift/recv?giftUid=9a49ba72-dfbe-4ef6-9104-609f77c11ff2",
        {
          headers: { Authorization: `Bearer ${BEARE_TOKEN}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Window>
      <Container>
        <TopWrapper>
          <TitleSection />
        </TopWrapper>
        <SenderWrapper>
          <SenderSection />
        </SenderWrapper>
        <ReceiveMessageWrapper>
          <ReceiveMessageSection />
        </ReceiveMessageWrapper>
        <ThemeWrapper>
          <ThemeSection />
        </ThemeWrapper>
        <InputMessageWrapper>
          <InputMessageSection />
        </InputMessageWrapper>
        <BottomWrapper>
          <BottomSection />
        </BottomWrapper>
      </Container>
    </Window>
  );
}

const Window = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 320px;
  height: auto;
  padding: 7px 15px;
  border: 1px solid black;
`;
const TopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 75px;
`;

const SenderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const ReceiveMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  border: 1px solid rgba(219, 219, 219, 0.3);
  border-radius: 6px;
`;

const ThemeWrapper = styled.div`
  width: 100%;
  height: 320px;
`;

const InputMessageWrapper = styled.div`
  width: 100%;
  height: 200px;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 150px;
`;
