import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';

interface TagsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TagsDrawer: React.FC<TagsDrawerProps> = ({ isOpen, onClose, children }) => {
  // Função para evitar o fechamento do Drawer ao clicar nos botões internos
  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  // Função para evitar o fechamento do Drawer ao pressionar teclas no Box
  const handleBoxKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Drawer sx={{ zIndex: 1301 }} anchor="right" open={isOpen} onClose={onClose}>
      <Box
        sx={{ width: 800 }}
        role="presentation"
        onClick={handleBoxClick}
        onKeyDown={handleBoxKeyDown}
      >
        {children}
      </Box>
    </Drawer>
  );
};

export default TagsDrawer;
