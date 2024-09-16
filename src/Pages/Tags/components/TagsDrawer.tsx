import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import React from "react";

interface TagsDrawerProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
}

const TagsDrawer: React.FC<TagsDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleBoxKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Drawer
      sx={{ zIndex: 1301 }}
      anchor="right"
      open={isOpen}
      onClose={() => onClose(false)}
    >
      <Grid
        container
        sx={{
          width: { xs: "100%", sm: 400, md: 600, lg: 800 },
          height: "100%",
        }}
        role="presentation"
        onClick={handleBoxClick}
        onKeyDown={handleBoxKeyDown}
      >
        <Grid item xs={12} sx={{ height: "100%" }}>
          {children}
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default TagsDrawer;
