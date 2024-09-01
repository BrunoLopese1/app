import { Paper, Typography, Box } from "@mui/material";
import { styles } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";

function createData(
  name,
  totalTickets,
  openedTicketsByUser,
  closedTickets,
  avarageTimeToFinish,
  status
) {
  return {
    name,
    totalTickets,
    openedTicketsByUser,
    closedTickets,
    avarageTimeToFinish,
    status,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const props = {
  title: "Avaliações",
  subtitle: "Mostra a avaliação do(s) atendente(s).",
  icon: "fa-solid fa-phone",
};

export function RatingTable() {
  const classes = styles;
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box>
          <Typography variant="h1" sx={classes.title_card}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <i className={props.icon}></i>
              {props.title}
            </Box>
          </Typography>
          <Typography sx={classes.subtitle_card}>{props.subtitle}</Typography>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Avaliação</TableCell>
                  <TableCell align="center">Total de atendimentos</TableCell>
                  <TableCell align="center">Em atendimento</TableCell>
                  <TableCell align="center">
                    Tempo médio de atendimento
                  </TableCell>
                  <TableCell align="center">Status (atual)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      <Rating
                        precision={0.25}
                        name="read-only"
                        value={3.5}
                        readOnly
                      />
                    </TableCell>
                    <TableCell align="center">{row.totalTickets}</TableCell>
                    <TableCell align="center">
                      {row.openedTicketsByUser}
                    </TableCell>
                    <TableCell align="center">{row.closedTickets}</TableCell>
                    <TableCell align="center">
                      {row.avarageTimeToFinish}
                    </TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Paper>
  );
}
