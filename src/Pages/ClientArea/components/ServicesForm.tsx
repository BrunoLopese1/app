import { Typography, Box, TextField } from "@mui/material";

export default function ServicesForm() {
  return (
    <>
      <Typography variant="h6" sx={{padding:'1rem 0 0 0'}}>Twilio</Typography>
      <Typography sx={{padding:'1rem 0 1rem 0'}}>Informe os dados da sua conta Twilio</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <TextField id="1" label="Account SID" variant="outlined" sx={{ flexGrow: 1 }} />
          <TextField id="2" label="Auth Token" variant="outlined" sx={{ flexGrow: 1 }} />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <TextField type="" id="3" label="Valor da mensagem" variant="outlined" sx={{ flexGrow: 1 }} />
          <TextField id="4" label="Valor do modelo de marketing" variant="outlined" sx={{ flexGrow: 1 }} />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <TextField id="5" label="Valor do modelo utility" variant="outlined" sx={{ flexGrow: 1 }} />
          <TextField id="6" label="valor do número de whatsapp" variant="outlined" sx={{ flexGrow: 1 }} />
        </Box>
      </Box>
    </>
  );
}
