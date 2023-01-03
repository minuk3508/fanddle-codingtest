import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

export default function ReceiveMessageSection() {
  return (
    <>
      <Placeholder>받은 메시지</Placeholder>
      <SpreadButton>
        <SlArrowDown />
      </SpreadButton>
    </>
  );
}
const Placeholder = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #8f8f8f;
`;
const SpreadButton = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #8f8f8f;
`;
