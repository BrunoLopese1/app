import { useMutation, useQueryClient } from "react-query";
import { ApiService } from "../../../services/Api";
import { Tag } from "../models/TagsModels";

const apiService = new ApiService();

const createTag = async (newTag: Tag) => {
  const response = await apiService.post("/tags", newTag);
  return response.data;
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation(createTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });
};
