import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function OptionsForm() {
  const [age1, setAge1] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value as string);
  };
  const [age2, setAge2] = React.useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value as string);
  };
  const [age3, setAge3] = React.useState("");

  const handleChange3 = (event: SelectChangeEvent) => {
    setAge3(event.target.value as string);
  };
  const [age4, setAge4] = React.useState("");

  const handleChange4 = (event: SelectChangeEvent) => {
    setAge4(event.target.value as string);
  };
  const [age5, setAge5] = React.useState("");

  const handleChange5 = (event: SelectChangeEvent) => {
    setAge5(event.target.value as string);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignContent: "space-between",
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
          <FormControl fullWidth sx={{ flexGrow: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">Avaliações</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age1}
              label="Avaliações"
              onChange={handleChange1}
            >
              <MenuItem value={10}>Habilitadas</MenuItem>
              <MenuItem value={20}>Desabilitadas</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
          <FormControl fullWidth sx={{ flexGrow: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Gerenciamento de Expediente
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age2}
              label="Gerenciamento de Expediente"
              onChange={handleChange2}
            >
              <MenuItem value={10}>Desabilitado</MenuItem>
              <MenuItem value={20}>Fila</MenuItem>
              <MenuItem value={30}>Empresa</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
          <FormControl fullWidth sx={{ flexGrow: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">Tipo Chatbot</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age3}
              label="Tipo Chatbot"
              onChange={handleChange3}
            >
              <MenuItem value={10}>Texto</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
          <FormControl fullWidth sx={{ flexGrow: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Enviar saudação ao aceitar o ticket
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age4}
              label="Enviar saudação ao aceitar o ticket"
              onChange={handleChange4}
            >
              <MenuItem value={10}>Habilitado</MenuItem>
              <MenuItem value={20}>Desabilitado</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flexGrow: 1, minWidth: "250px" }}>
          <FormControl fullWidth sx={{ flexGrow: 1, minWidth: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Enviar mensagem de transferência de Fila/agente
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age5}
              label="Enviar mensagem de transferência de Fila/agente"
              onChange={handleChange5}
            >
              <MenuItem value={10}>Habilitado</MenuItem>
              <MenuItem value={20}>Desabilitado</MenuItem>
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
        <Button>Limpar</Button>
        <Button>Salvar</Button>
      </Box>
    </Box>
  );
}
