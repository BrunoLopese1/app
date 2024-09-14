import { useMutation, useQueryClient } from "react-query";
import { ApiService } from "../../../services/Api";

const apiService = new ApiService();

const deleteTag = async (id: number) => {
  const response = await apiService.delete(`/tags/${id}`);
  return response.data;
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
    },
  });
};
