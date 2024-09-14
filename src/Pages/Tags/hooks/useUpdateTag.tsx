import { useMutation, useQueryClient } from "react-query";
import { ApiService } from "../../../services/Api";
import { Tag } from "../models/TagsModels";

const apiService = new ApiService();

const updateTag = async (updatedTag: Tag) => {
  const response = await apiService.put(`/tags/${updatedTag.id}`, updatedTag);
  return response.data;
};

export const useUpdateTag = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });
};
