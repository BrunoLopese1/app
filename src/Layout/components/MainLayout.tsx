// components/MainLayout.tsx
import React from 'react';
import SideBar from '../SideBar';
import Box from '@mui/material/Box';

interface MainLayoutProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, drawerOpen, setDrawerOpen }) => {
  return (
    <>
      <SideBar setOpen={setDrawerOpen} open={drawerOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: drawerOpen ? `${240}px` : '4rem',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
