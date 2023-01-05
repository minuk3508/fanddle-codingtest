import { useState } from "react";
import styled from "styled-components";
import useFetchInBox from "../Hooks/inBoxFetcher";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

type StyledProps = {
  spreadValue: "350px" | "40px";
};

export default function InBoxContent() {
  const { isLoading, isError, data } = useFetchInBox();
  const [isSpread, setIsSpread] = useState(false);

  const spreadButtonClick = () => {
    setIsSpread((prev) => !prev);
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>오류가 발생했어요!</div>;
  }
  return (
    <Wrapper spreadValue={isSpread ? "350px" : "40px"}>
      <TopSection>
        <Placeholder>받은 메시지</Placeholder>
        <SpreadButton onClick={spreadButtonClick}>
          {isSpread ? <SlArrowUp /> : <SlArrowDown />}
        </SpreadButton>
      </TopSection>
      {isSpread && (
        <>
          <MiddleSection>
            <ImageBox alt="테마이미지" src={data.giftTheme.mainUrl} />
            <MessageBox>{data.message}</MessageBox>
          </MiddleSection>
          <BottomSection>
            <ProductsInfoBox>
              <BrandName>{data.items[0].item.brand.name}</BrandName>
              <ProductsTitle>{data.items[0].item.name}</ProductsTitle>
              <ProductsQuantity>수량 총 {data.items[0].qty}개</ProductsQuantity>
            </ProductsInfoBox>
            <ProductsImageBox>
              <ProductsImage alt="상품 이미지" src={data.items[0].thumbnail} />
            </ProductsImageBox>
          </BottomSection>
        </>
      )}
    </Wrapper>
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
  :hover {
    cursor: pointer;
  }
`;
const Wrapper = styled.div<StyledProps>`
  width: 100%;
  height: auto;
  min-height: ${(props) => props.spreadValue};
  transition: 0.3s all;
`;
const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`;
const MiddleSection = styled.div`
  width: 100%;
  height: auto;
  min-height: 225px;
`;
const ImageBox = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const MessageBox = styled.div`
  width: 100%;
  height: auto;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: 85px;
  border-top: 1px solid rgba(219, 219, 219, 0.7);
`;
const ProductsInfoBox = styled.div`
  width: 75%;
  height: auto;
`;
const BrandName = styled.div`
  width: 100%;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  color: #8f8f8f;
`;
const ProductsTitle = styled.div`
  width: 100%;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  margin: 5px 0px;
  color: black;
`;
const ProductsQuantity = styled.div`
  width: 100%;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  color: #8f8f8f;
`;
const ProductsImageBox = styled.div`
  width: 25%;
  height: auto;
`;
const ProductsImage = styled.img`
  width: 100%;
  height: auto;
`;
