import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Paper, Tabs, Tab, Typography, Select, MenuItem, Grid, TextField } from "@mui/material";

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

export default function MainFilter() {

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

  const [value, setValue] = useState(0);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    if (endDate && newStartDate > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;

    if (startDate && newEndDate < startDate) {
      alert("A data final não pode ser menor que a data inicial.");
      return;
    }

    if (newEndDate > getTodayDate()) {
        alert("A data final não pode ser maior que a data atual.");
        return;
      }

    setEndDate(newEndDate);
  };

  return (
    <Paper sx={{ padding: "0 0.5rem 1rem 0.5rem" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              label={
                <span>
                  <i
                    style={{ marginRight: "0.5rem", marginLeft: "-0.5rem" }}
                    className="fa-solid fa-chart-line"
                  ></i>{" "}
                  Geral
                </span>
              }
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: "700", padding: "1rem 1rem 1rem 0.5rem" }}>
                Atendente
              </Typography>
              <Select
                variant="outlined"
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}
                sx={{ width: "100%" }}
              >
                <MenuItem value={1}>Todos</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} style={{ display: "flex", alignItems: "end" }}>
              <TextField
                variant="outlined"
                label="Data Inicial"
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} style={{ display: "flex", alignItems: "end" }}>
              <TextField
                variant="outlined"
                label="Data Final"
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: {
                    color: "red !important",
                  },
                }}
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Paper>
  );
}

