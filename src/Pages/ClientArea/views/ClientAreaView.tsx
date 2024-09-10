import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeTable from "../components/HomeTable";
import PlansTable from "../components/PlansTable";
import ModelsTable from "../components/ModelsTable";
import ContractTable from "../components/ContractsTable";
import CompaniesTable from "../components/CompaniesTable";
import ServicesForm from "../components/ServicesForm";
import SupportSettingsForm from "../components/SupportSettingsForm";
import { Typography } from "@mui/material";

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ClientAreaView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Área do cliente</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Modelos" {...a11yProps(1)} />
          <Tab label="Contrato" {...a11yProps(2)} />
          <Tab label="Empresas" {...a11yProps(3)} />
          <Tab label="Planos" {...a11yProps(4)} />
          <Tab label="Aparência" {...a11yProps(5)} />
          <Tab label="Serviços" {...a11yProps(6)} />
          <Tab label="Suporte" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HomeTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ModelsTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContractTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CompaniesTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <PlansTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        6
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <ServicesForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <SupportSettingsForm />
      </CustomTabPanel>
    </Box>
  );
}
