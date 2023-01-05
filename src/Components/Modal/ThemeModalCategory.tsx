import styled from "styled-components";
import { useRecoilState } from "recoil";
import useFetchTheme from "../../Hooks/themeFetcher";
import { selectedCategoryState, selectedImageUrl } from "../../Store/statesStore";

const categoryStyle = {
  selected: { backgroundColor: "#f25449", color: "white" },
  unselected: { backgroundColor: "#f0f0f0", color: "#858585" },
};

export default function ThemeModalCategory() {
  const { isLoading, isError, data: categoryData } = useFetchTheme("category");
  const [selectedCategoryUid, setSelectedCategoryUid] = useRecoilState(selectedCategoryState);
  const [, setSelectedThemeImageUrl] = useRecoilState(selectedImageUrl);

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
        style={
          selectedCategoryUid === "default" ? categoryStyle.selected : categoryStyle.unselected
        }
        onClick={allCategoryItemClick}
      >
        전체
      </CategoryItems>
      {categoryData.categories.map((i: any) => (
        <CategoryItems
          key={i.uid}
          style={selectedCategoryUid === i.uid ? categoryStyle.selected : categoryStyle.unselected}
          onClick={() => {
            setSelectedCategoryUid(i.uid);
            setSelectedThemeImageUrl("default");
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
  min-width: 78px;
  height: 26px;
  padding: 0px 10px;
  margin-right: 5px;
  font-size: 11px;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;
