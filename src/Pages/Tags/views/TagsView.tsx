import { useState } from "react";
import { Box } from "@mui/material";
import { useTagOperations } from "../viewmodels/useTagOperations";
import TagsTable from "../components/TagsTable";
import TagsDrawer from "../components/TagsDrawer";
import TagsHeader from "../components/TagsHeader";
import { TagsCreateOrEditForm } from "../components/TagsCreateOrEditForm";
import { Action, Tag } from "../models/TagsModels";

const defaultTag: Tag = {
  id: 0,
  name: '',
  description: '',
  companyId: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  kanban: false,
  index: 0
};

const TagsView = () => {
  const { tags } = useTagOperations();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editRow, setEditiRow] = useState<Tag>(defaultTag);

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  console.log(editRow)

  return (
    <Box>
      <TagsHeader handleOpenDrawer={handleOpenDrawer} />
      <TagsTable tags={tags || []} setRow={setEditiRow} />
      <TagsDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        <TagsCreateOrEditForm action={Action.EDIT} row={editRow} />
      </TagsDrawer>
    </Box>
  );
};

export default TagsView;
