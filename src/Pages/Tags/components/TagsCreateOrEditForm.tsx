import { Typography, Box, TextField, Button, Container } from "@mui/material";
import { Action, Tag } from "../models/TagsModels";
import { useState } from "react";

type TagsCreateOrEditFormProps = {
  action: Action;
  row: Tag;
};

export const TagsCreateOrEditForm = ({
  action
  }: TagsCreateOrEditFormProps) => {
    // Estado para armazenar os valores dos campos
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form Data:', formData);
      };
    return (
      <>
      {" "}
      <Container maxWidth="sm">
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
          <Typography variant="h6">{action === Action.CREATE?'criar':'editar'}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              {action === Action.CREATE?'criar':'editar'}
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
