import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cards from "./Cards";
import CardsGrath from "./CardsGraph";
import { cardItems2 } from "./cardItems2";
import { cardItems3 } from "./cardItems3";
import UserTable from "./UserTable";
import TicketQueueTable from "./TicketQueueTable"
import ContactTable from "./ContactTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SelectionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "1rem",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Conversas" {...a11yProps(0)} />
          <Tab label="Atendentes" {...a11yProps(1)} />
          <Tab label="Filas" {...a11yProps(2)} />
          <Tab label="Contatos" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Cards cards={cardItems2} />
            <CardsGrath cards={cardItems3} />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TicketQueueTable />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ContactTable />
        </TabPanel>
      </Box>
    </Box>
  );
}
