import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ContactsIcon from '@mui/icons-material/Contacts';
import EventNoteIcon from '@mui/icons-material/EventNote';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ChatIcon from '@mui/icons-material/Chat';
import CampaignIcon from '@mui/icons-material/Campaign';
import CodeIcon from '@mui/icons-material/Code';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebhookIcon from '@mui/icons-material/Webhook';
import KeyIcon from '@mui/icons-material/Key';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PeopleIcon from '@mui/icons-material/People';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SettingsIcon from '@mui/icons-material/Settings';
import SchemaIcon from '@mui/icons-material/Schema';

const userLinks = [
  { title: 'Área do cliente', link: 'client-area', icon: <BusinessIcon /> },
  { title: 'Dashboard', link: 'dashboard', icon: <DashboardIcon /> },
  { title: 'Atendimento', link: 'tickets', icon: <SupportAgentIcon /> },
  { title: 'Kanban', link: 'kanban', icon: <ViewKanbanIcon /> },
  { title: 'Respostas rápidas', link: 'quick-messages', icon: <NoteAddIcon /> },
  { title: 'Tarefas', link: 'tasks', icon: <AddTaskIcon /> },
  { title: 'Perfil', link: 'profile', icon: <AccountBoxIcon /> },
  { title: 'Contatos', link: 'contacts', icon: <ContactsIcon /> },
  { title: 'Agendamentos', link: 'schedules', icon: <EventNoteIcon /> },
  { title: 'Etiquetas', link: 'tags', icon: <BookmarksIcon /> },
  { title: 'Chat interno', link: 'chats', icon: <ChatIcon /> },
  { title: 'Ajuda', link: 'help', icon: <HelpCenterIcon /> },
];

const managerLinks = [
  { title: 'Campanhas', link: 'campaigns', icon: <CampaignIcon /> },
  { title: 'Modelos', link: 'templates', icon: <CodeIcon /> },
  { title: 'Informativos', link: 'announcements', icon: <AnnouncementIcon /> },
  { title: 'Open.AI', link: 'prompts', icon: <SmartToyIcon /> },
  { title: 'Integrações', link: 'queue-integration', icon: <IntegrationInstructionsIcon /> },
  { title: 'Token de acesso', link: 'token-integration', icon: <KeyIcon /> },
  { title: 'Webhooks', link: 'integration-notification', icon: <WebhookIcon /> },
  { title: 'Conexões', link: 'connections', icon: <CellWifiIcon /> },
  { title: 'Lista de arquivos', link: 'files', icon: <AttachFileIcon /> },
  { title: 'Filas e chatbots', link: 'queues', icon: <SchemaIcon /> },
  { title: 'Usuários', link: 'users', icon: <PeopleIcon /> },
  { title: 'API', link: 'messages-api', icon: <ChecklistIcon /> },
  { title: 'Financeiro', link: 'financial', icon: <LocalAtmIcon /> },
  { title: 'Configurações', link: 'settings', icon: <SettingsIcon /> },
];

type drawerProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    '&::-webkit-scrollbar': {
      width: '0px', // Esconde a barra de rolagem no Chrome, Safari e outros navegadores WebKit
      height: '0px', // Esconde a barra de rolagem horizontal
    },
    '-ms-overflow-style': 'none', // Esconde a barra de rolagem no IE e Edge (versão antiga)
    'scrollbar-width': 'none', // Esconde a barra de rolagem no Firefox
  },
}));

export default function SideBar({ setOpen, open }: drawerProps) {
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Olá, Bruno, bem vindo!
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {userLinks.map((text) => (
            <ListItem key={text.link} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={text.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{ padding: '1rem 0 0 1.5rem', fontWeight: 700 }}>
          {open ? 'Administração' : ''}
        </Typography>
        <List>
          {managerLinks.map((text) => (
            <ListItem key={text.link} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                to={text.link}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </Box>
  );
}
