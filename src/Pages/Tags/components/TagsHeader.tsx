import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ActionEnum } from "../models/TagsModels";

interface TagsHeaderProps {
  setAction: (value: ActionEnum) => void;
  setIsDrawerOpen: (value: boolean) => void;
}

const TagsHeader: React.FC<TagsHeaderProps> = ({
  setIsDrawerOpen,
  setAction,
}) => {
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
    setAction(ActionEnum.CREATE);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        width: "100%",
      }}
    >
      <Typography variant="h5" sx={{ marginRight: "1rem" }}>
        Etiquetas
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "1rem",
          padding: "0 1rem",
        }}
      >
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Pesquisar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={handleOpenDrawer}>Nova etiqueta</Button>
      </Box>
    </Box>
  );
};

export default TagsHeader;
