import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
  TableFooter,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tag } from "../models/TagsModels";
import { ActionEnum } from "../models/TagsModels";

interface TagsTableProps {
  tags: Tag[];
  setRow: (value: Tag) => void;
  handleOpenDrawer: (value: boolean) => void;
  handleAction: (value: ActionEnum) => void;
  handleDeleteDialog: (value: boolean) => void;
}

const TagsTable: React.FC<TagsTableProps> = ({
  tags,
  setRow,
  handleOpenDrawer,
  handleAction,
  handleDeleteDialog,
}) => {
  const handleEditRow = (row: Tag) => {
    handleAction(ActionEnum.EDIT);
    setRow(row);
    handleOpenDrawer(true);
  };

  const handleDeleteRow = (row: Tag) => {
    handleAction(ActionEnum.DELETE);
    setRow(row);
    handleDeleteDialog(true);
  };

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Registros com Tag</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tags?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{"row.countTODO"}</TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{row.kanban}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleEditRow(row)}>
                    <EditIcon />
                  </Button>
                  <Button onClick={() => handleDeleteRow(row)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow></TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TagsTable;
