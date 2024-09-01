import "./App.css";
import Cards from "./Cards";
import Header from "./Header";
import { Box } from "@mui/material";
import { cardItems } from "./cardItems";
import SelectionTabs from "./SelectionTabs";
import { RatingTable } from "./RatingTable";
import MainFilter from "./MainFilter";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#F5F5F5",
        padding: "0.5rem 1rem 0 1rem",
      }}
    >
      <Header />
      <Cards cards={cardItems} />
      <MainFilter/>
      <SelectionTabs />
      <RatingTable />
    </Box>
  );
}

export default App;
