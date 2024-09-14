import { useQuery, useMutation, useQueryClient } from "react-query";
import { ApiService } from "../../../services/Api";
import { Tag } from "../models/TagsModels";

const apiService = new ApiService();

const fetchTags = async (): Promise<Tag[]> => {
  const response = await apiService.get<Tag[]>("/tags");
  return response.data;
};

const createTag = async (tag: Tag): Promise<Tag> => {
  const response = await apiService.post<Tag>("/tags", tag);
  return response.data;
};

const updateTag = async (tag: Tag): Promise<Tag> => {
  const response = await apiService.put<Tag>(`/tags/${tag.id}`, tag);
  return response.data;
};

const deleteTag = async (id: number): Promise<void> => {
  await apiService.delete(`/tags/${id}`);
};

export const useTagOperations = () => {
  const queryClient = useQueryClient();

  const { data: tags, isLoading, error } = useQuery(["tags"], fetchTags);

  const createTagMutation = useMutation(createTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });

  const updateTagMutation = useMutation(updateTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });

  const deleteTagMutation = useMutation(deleteTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });

  const handleCreateTag = (tag: Tag) => {
    createTagMutation.mutate(tag);
  };

  const handleUpdateTag = (tag: Tag) => {
    updateTagMutation.mutate(tag);
  };

  const handleDeleteTag = (id: number) => {
    deleteTagMutation.mutate(id);
  };

  return {
    tags,
    isLoading,
    error,
    handleCreateTag,
    handleUpdateTag,
    handleDeleteTag,
  };
};
