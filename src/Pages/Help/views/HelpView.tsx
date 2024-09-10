import { Box, Paper, Typography } from "@mui/material";
export default function HelpView() {
  return (
    <Box>
      <Paper>
        <Typography variant="h6" sx={{ padding: "2rem 0 2rem 1rem" }}>
          Central de ajuda
        </Typography>
        <Typography variant="body2" sx={{ padding: "0rem 0 1rem 1rem" }}>
          Escolha o tipo de contato mais adequado para a dúvida ou problema.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyItems:'stretch',
            gap: "4rem",
            padding: "1rem",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
              flex:'1'
            }}
          >
            <Typography>Contato direto com o Suporte OfficeCom</Typography>
            <Box>
              <Typography>Telefone: 0800 494 1442</Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
              flex:'1'
            }}
          >
            <Typography>Conversa via WhatsApp</Typography>
            <Box>
              <Typography>WhatsApp: 0800 494 1442</Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
              flex:'1'
            }}
          >
            <Typography>Enviar e-mail</Typography>
            <Box>
              <Typography>suporte@xama.pro</Typography>
            </Box>
          </Paper>
        </Box>
        <Typography sx={{ padding: "1rem" }}>Perguntas frequentes</Typography>
      </Paper>
    </Box>
  );
}
