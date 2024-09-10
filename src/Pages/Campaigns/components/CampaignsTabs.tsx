import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CampaignListTable from "./CampaignListTable";
import ContactListTable from "./ContactListTable";
import CampaignSettingForm from "./CampaignSettigsForm";
import CampaignFileTable from "./CampaignFileTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CampaignsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Listagem" {...a11yProps(0)} />
          <Tab label="Listas de contatos" {...a11yProps(1)} />
          <Tab label="Configurações" {...a11yProps(2)} />
          <Tab label="Lista de arquivos" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CampaignListTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ContactListTable/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CampaignSettingForm/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CampaignFileTable/>
      </CustomTabPanel>
    </Box>
  );
}
