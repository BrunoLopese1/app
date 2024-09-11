import { Box } from "@mui/material";
import SideBar from "../../Layout/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    return (
      <Box sx={{ display: "flex" }}>
        <SideBar setOpen={setDrawerOpen} open={drawerOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            paddingTop: (theme) => theme.spacing(8),
            transition: (theme) =>
              theme.transitions.create("margin", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Outlet />
        </Box>
      </Box>
    );
  }