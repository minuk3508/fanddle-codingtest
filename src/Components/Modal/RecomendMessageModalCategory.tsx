import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedRecomendCategoryState } from "../../Store/statesStore";
import useFetchTemplate from "../../Hooks/templateFetcher";

const categoryStyle = {
  selected: { backgroundColor: "#f25449", color: "white" },
  unselected: { backgroundColor: "#f0f0f0", color: "#858585" },
};

export default function RecomendMessageModalCategory() {
  const { isLoading, isError, data: recomendCategory } = useFetchTemplate("category");
  const [categoryUid, setSelectedCategoryUid] = useRecoilState(selectedRecomendCategoryState);

  const allCategoryItemClick = () => {
    setSelectedCategoryUid("default");
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>오류가 발생했어요!</div>;
  }
  return (
    <>
      <CategoryItems
        style={categoryUid === "default" ? categoryStyle.selected : categoryStyle.unselected}
        onClick={allCategoryItemClick}
      >
        전체
      </CategoryItems>
      {recomendCategory.categories.map((i: any) => (
        <CategoryItems
          key={i.uid}
          style={categoryUid === i.uid ? categoryStyle.selected : categoryStyle.unselected}
          onClick={() => {
            setSelectedCategoryUid(i.uid);
          }}
        >
          {i.name}
        </CategoryItems>
      ))}
    </>
  );
}
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
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;
