import { useState } from "react";
import { Box } from "@mui/material";
import { useTagOperations } from "../viewmodels/useTagOperations";
import TagsTable from "../components/TagsTable";
import TagsDrawer from "../components/TagsDrawer";
import TagsHeader from "../components/TagsHeader";
import { TagsCreateOrEditForm } from "../components/TagsCreateOrEditForm";
import { ActionEnum, Tag } from "../models/TagsModels";
import AlertDeleleDialog from "../components/AlertDeleteDialog";

const defaultTag: Tag = {
  name: "",
  description: "",
  kanban: false,
  color: "",
  companyId: 1,
  //createdAt: new Date(),
 // updatedAt: new Date()
};

const TagsView = () => {
  const { tags, handleCreateTag, handleUpdateTag, handleDeleteTag } =
    useTagOperations();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [row, setRow] = useState<Tag>(defaultTag);
  const [action, setAction] = useState<ActionEnum>(ActionEnum.CREATE);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleConfirm = (data: Tag) => {
    if (action === ActionEnum.CREATE) {
      handleCreateTag(data);
    }

    if (action === ActionEnum.EDIT) {
      handleUpdateTag(data);
    }
    console.log(action, data);
  };

  const handleDelete = () => {
    if (row.id && action === ActionEnum.DELETE) {
      handleDeleteTag(row.id);
    }
  };

  return (
    <Box>
      <TagsHeader setAction={setAction} setIsDrawerOpen={setIsDrawerOpen} />
      <TagsTable
        tags={tags || []}
        setRow={setRow}
        handleOpenDrawer={setIsDrawerOpen}
        handleAction={setAction}
        handleDeleteDialog={setIsDeleteDialogOpen}
      />
      <TagsDrawer isOpen={isDrawerOpen} onClose={setIsDrawerOpen}>
        <TagsCreateOrEditForm
          action={action}
          initialValues={row}
          defaultValue={defaultTag}
          handleDrawer={setIsDrawerOpen}
          handleConfirm={handleConfirm}
        />
      </TagsDrawer>
      <AlertDeleleDialog
        open={isDeleteDialogOpen}
        setOpen={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Deletar etiqueta"
        content="Tem certeza que deseja completar essa ação?"
      />
    </Box>
  );
};

export default TagsView;
