import { Typography, Box, TextField, Button } from "@mui/material";

export default function SupportSettingsForm() {
  return (
    <>
      <Typography variant="h6" sx={{ padding: "1rem 0 1rem 0" }}>
        Configurações de suporte
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <TextField
            id="1"
            label="Telefone"
            variant="outlined"
            sx={{ flexGrow: 1 }}
          />
          <TextField
            id="2"
            label="Whatsapp"
            variant="outlined"
            sx={{ flexGrow: 1 }}
          />
          <TextField
            id="3"
            label="E-mail"
            variant="outlined"
            sx={{ flexGrow: 1 }}
          />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <TextField
            id="4"
            label="Script"
            variant="outlined"
            sx={{ flexGrow: 1 }}
            fullWidth
            multiline
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained">Salvar</Button>
        </Box>
      </Box>
    </>
  );
}
