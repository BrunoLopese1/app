import SideBar from "./Layout/SideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ClienteArea from "./Pages/ClientArea/ClientArea";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Help from "./Pages/Help/Help";
import Kanban from "./Pages/Kamban/Kanban";
import Profile from "./Pages/Profile/Profile";
import Ticket from "./Pages/Ticket/Ticket";


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router>
      <SideBar setOpen={setDrawerOpen} open={drawerOpen} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          marginLeft: drawerOpen ? `${240}px` : '4rem',
        }}
      >
        <Routes>
          <Route path="/client-area" element={<ClienteArea />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

