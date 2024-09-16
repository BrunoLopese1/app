import {
  Typography,
  Box,
  TextField,
  Button,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ActionEnum, Tag } from "../models/TagsModels";
import { useState, useEffect } from "react";

type TagsCreateOrEditFormProps = {
  action: ActionEnum;
  initialValues: Tag;
  defaultValue: Tag;
  handleDrawer: (value: boolean) => void;
  handleConfirm: (value:Tag) => void;
};

export const TagsCreateOrEditForm = ({
  action,
  initialValues,
  defaultValue,
  handleDrawer,
  handleConfirm
}: TagsCreateOrEditFormProps) => {
  const data = action === ActionEnum.EDIT ? initialValues : defaultValue;
  const [formData, setFormData] = useState<Tag>(data);
  const [color, setColor] = useState<string>(data.color || "#ffffff");

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, color }));
  }, [color]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFormData({ ...formData, kanban: checked });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleConfirm(formData);
    console.log(formData);
    handleDrawer(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        border: "1px solid",
        borderColor: "grey.300",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6">
        {action === ActionEnum.CREATE ? "Criar" : "Editar"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <TextField
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Descrição"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              type="color"
              value={color}
              onChange={handleColorChange}
              label="Escolha uma cor"
              sx={{ width: 200 }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData.kanban}
                  onChange={handleSwitchChange}
                  color="primary"
                />
              }
              label="Kanban"
              labelPlacement="end"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                justifyItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                sx={{ mt: 2 }}
                onClick={() => handleDrawer(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                {action === ActionEnum.CREATE ? "Criar" : "Editar"}
              </Button>
            </Box>
          </Box>
        </FormGroup>
      </form>
    </Box>
  );
};
