import { useQuery } from "react-query";
import { ApiService } from "../../../services/Api";
import { Tag } from "../models/TagsModels";

const apiService = new ApiService();

const fetchTags = async () => {
  const response = await apiService.get<Tag[]>("/tags");
  return response.data;
};

export const useFetchTags = () => {
  return useQuery(["tags"], fetchTags);
};
