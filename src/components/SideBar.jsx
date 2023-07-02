import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        flexDirection: "row",
        height: "50px",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory ? "#000" : "#fff",
            color: category.name === selectedCategory ? "#fff" : "#000",
            border: "1px solid #e6e6e6",
          }}
          key={category.name}
        >
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
