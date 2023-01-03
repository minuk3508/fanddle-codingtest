import dayjs from "dayjs";
import styled from "styled-components";
import { ReceivedMessageSelector } from "../fetcher";
import { useRecoilValue } from "recoil";

export default function SenderSection() {
  const data = useRecoilValue(ReceivedMessageSelector);
  const date = dayjs(data.createdAt).format("YYYY.MM.DD");

  return (
    <>
      <SenderBox>
        <SenderImage />
        <SenderName>
          <span>from.</span>
          <Name>{data.sender.username}</Name>
        </SenderName>
      </SenderBox>
      <SendDateBox>{date}</SendDateBox>
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
  background-image: url("https://ifh.cc/g/bjywMP.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
