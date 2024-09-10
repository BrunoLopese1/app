import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CampaignSettingForm() {
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value as string);
  };

  const handleChange3 = (event: SelectChangeEvent) => {
    setAge3(event.target.value as string);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ padding: "1rem 0 1rem 0" }}>
        Configurações de campanha
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "stretch",
          gap: "1rem",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="label-intervalo-disparo">
              Intervalo Randômico de Disparo
            </InputLabel>
            <Select
              labelId="label-intervalo-disparo"
              id="select-intervalo-di"
              value={age1}
              label="Intervalo Randômico de Disparo"
              onChange={handleChange1}
              fullWidth
            >
              <MenuItem value={0}>Sem intervalo</MenuItem>
              <MenuItem value={5}>5 Segundos</MenuItem>
              <MenuItem value={10}>10 Segundos</MenuItem>
              <MenuItem value={15}>15 Segundos</MenuItem>
              <MenuItem value={20}>20 Segundos</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="label-intervalo-maior">
              Intervalo Maior Após
            </InputLabel>
            <Select
              labelId="label-intervalo-maior"
              id="select-intervalo-maior"
              value={age2}
              label="Intervalo Maior Após"
              onChange={handleChange2}
              fullWidth
            >
              <MenuItem value={0}>Não definido</MenuItem>
              <MenuItem value={1}>1 segundo</MenuItem>
              <MenuItem value={5}>5 segundos</MenuItem>
              <MenuItem value={15}>15 segundos</MenuItem>
              <MenuItem value={20}>20 segundos</MenuItem>
              <MenuItem value={30}>30 segundos</MenuItem>
              <MenuItem value={40}>40 segundos</MenuItem>
              <MenuItem value={50}>50 segundos</MenuItem>
              <MenuItem value={60}>60 segundos</MenuItem>
              <MenuItem value={80}>80 segundos</MenuItem>
              <MenuItem value={100}>100 segundos</MenuItem>
              <MenuItem value={120}> 120 segundos</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="label-intervalo-disparo-maior">
              Intervalo de Disparo Maior
            </InputLabel>
            <Select
              labelId="label-intervalo-disparo-maior"
              id="select-intervalo-disparo-maior"
              value={age3}
              label="Intervalo de Disparo Maior"
              onChange={handleChange3}
              fullWidth
            >
              <MenuItem value={0}>Não definido</MenuItem>
              <MenuItem value={1}>1 segundo</MenuItem>
              <MenuItem value={5}>5 segundos</MenuItem>
              <MenuItem value={15}>15 segundos</MenuItem>
              <MenuItem value={20}>20 segundos</MenuItem>
              <MenuItem value={30}>30 segundos</MenuItem>
              <MenuItem value={40}>40 segundos</MenuItem>
              <MenuItem value={50}>50 segundos</MenuItem>
              <MenuItem value={60}>60 segundos</MenuItem>
              <MenuItem value={80}>80 segundos</MenuItem>
              <MenuItem value={100}>100 segundos</MenuItem>
              <MenuItem value={120}> 120 segundos</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "flex-end",
          padding: "1rem 0 0 0",
        }}
      >
        <Button>Adicionar variável</Button>
        <Button>Salvar configurações</Button>
      </Box>
    </Box>
  );
}
