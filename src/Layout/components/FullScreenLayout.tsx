// components/FullScreenLayout.tsx
import React from 'react';
import Box from '@mui/material/Box';

interface FullScreenLayoutProps {
  children: React.ReactNode;
}

const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 2 }}
    >
      {children}
    </Box>
  );
};

export default FullScreenLayout;
