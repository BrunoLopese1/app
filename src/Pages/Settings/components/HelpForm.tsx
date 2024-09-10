import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";

export default function HelpForm() {
  return (
    <Box>
      <Typography variant="h6" sx={{ padding: "1rem 0 1rem 0" }}>
        Nova ajuda
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
            <TextField
              id="titulo"
              label="Título"
              variant="outlined"
            />
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <TextField
              id="codigo"
              label="Código do vídeo"
              variant="outlined"
            />
          </FormControl>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormControl fullWidth>
            <TextField
              id="descricao"
              label="Descrição"
              variant="outlined"
            />
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
