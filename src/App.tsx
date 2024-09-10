import SideBar from "./Layout/SideBar";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useState } from "react";
import ClienteArea from "./pages/ClientArea/ClientArea";
import Dashboard from "./pages/Dashboard/Dashboard";
import Announcement from "./pages/Announcements/Announcements";
import Campaigns from "./pages/Campaigns/Campaigns";
import Chats from "./pages/Chats/Chats";
import Connections from "./pages/Connections/Connections";
import Contacts from "./pages/Contacts/Contacts";
import Files from "./pages/Files/Files";
import Financial from "./pages/Financial/Financial";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import Kanban from "./pages/Kanban/Kanban";
import Login from "./pages/Login/Login";
import MessagesApi from "./pages/MessagesApi/MessagesApi";
import Profile from "./pages/Profile/Profile";
import Prompts from "./pages/Prompts/Prompts";
import QueueIntegration from "./pages/QueueIntegration/QueueIntegration";
import Queues from "./pages/Queues/Queues";
import QuickMessages from "./pages/QuickMessages/QuickMessages";
import Schedules from "./pages/Schedules/Schedules";
import Settings from "./pages/Settings/Settings";
import Tags from "./pages/Tags/Tags";
import Tasks from "./pages/Tasks/Tasks";
import Templates from "./pages/Templates/Templates";
import Tickets from "./pages/Tickets/Tickets";
import TokenIntegration from "./pages/TokenIntegration/TokenIntegration";
import Users from "./pages/Users/Users";
import Webhooks from "./pages/Webhooks/Webhooks";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

function Layout() {
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


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/announcements" element={<Announcement />} />
                <Route path="/campaigns" element={<Campaigns />} />
                <Route path="/Chats" element={<Chats />} />
                <Route path="/client-area" element={<ClienteArea />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/files" element={<Files />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/help" element={<Help />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/messages-api" element={<MessagesApi />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/prompts" element={<Prompts />} />
                <Route path="/queue-integration" element={<QueueIntegration />} />
                <Route path="/queues" element={<Queues />} />
                <Route path="/quick-messages" element={<QuickMessages />} />
                <Route path="/schedules" element={<Schedules />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/token-integration" element={<TokenIntegration />} />
                <Route path="/users" element={<Users />} />
                <Route path="/integration-notification" element={<Webhooks />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
