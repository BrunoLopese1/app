import {Tab, Tabs, Box} from '@mui/material'
import { styles } from './styles';
import { useState } from 'react';

export default function TabsRouter(){
    const [footerContent, setFootContent] = useState("conversations");
    const handleChangeSetFootContent = (event, newValue) => {
        setFootContent(newValue);
      };
    const classes = styles
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: "start",
            alignItems: "center",
            padding: '1.2rem',
            paddingTop: 0,
            paddingBottom: 0,
            width: '100%',
            height: '4rem',
            borderRadius: '20px',
            marginBottom: "2rem",
          }}>
            <Tabs
              className={classes.tab}
              style={{height: '100%'}}
              value={footerContent}
              onChange={handleChangeSetFootContent}
            >
              <Tab
                style={{height: '4rem', fontSize: '1rem'}}
                value="conversations"
                label={<span>Conversas</span>}
                wrapped
              />
              <Tab
                style={{height: '4rem', fontSize: '1rem'}}
                value="attendants"
                label={<span>Atendentes</span>}
                wrapped
              />
              <Tab
                style={{height: '4rem', fontSize: '1rem'}}
                value="sectors"
                label={<span>Setores</span>}
                wrapped
              />
              <Tab
                style={{height: '4rem', fontSize: '1rem'}}
                value="contacts"
                label={<span>Contatos</span>}
                wrapped
              />
            </Tabs>
          </Box>
    )
}