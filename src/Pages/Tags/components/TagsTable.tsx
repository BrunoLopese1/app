import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tag } from "../models/TagsModels";

interface TagsTableProps {
  tags: Tag[];
  setRow: (value:Tag) => void; 
}

const TagsTable: React.FC<TagsTableProps> = ({ tags, setRow }) => {
  return (
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
          {tags.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{'row.countTODO'}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">{row.kanban}</TableCell>
              <TableCell align="center">
                <Button onClick={()=>setRow(row)}>
                  <EditIcon />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TagsTable;
