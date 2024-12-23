import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name,
  totalTickets,
  openedTicketsByUser,
  closedTickets,
  avarageTimeTofirstResponse
) {
  return {
    name,
    totalTickets,
    openedTicketsByUser,
    closedTickets,
    avarageTimeTofirstResponse,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function UserTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Atendente</TableCell>
            <TableCell align="center">Conversas</TableCell>
            <TableCell align="center">Responsável</TableCell>
            <TableCell align="center">Finalizadas</TableCell>
            <TableCell align="center">1ª Resposta</TableCell>
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
              <TableCell align="center">{row.totalTickets}</TableCell>
              <TableCell align="center">{row.openedTicketsByUser}</TableCell>
              <TableCell align="center">{row.closedTickets}</TableCell>
              <TableCell align="center">
                {row.avarageTimeTofirstResponse}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
