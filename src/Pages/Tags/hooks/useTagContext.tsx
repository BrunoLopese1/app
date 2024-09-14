import { TagContext } from "../contexts/TagsContext";
import { useContext } from "react";

export const useTagContext = () => {
    const context = useContext(TagContext);
    if (context === undefined) {
      throw new Error('useTagContext must be used within a TagProvider');
    }
    return context;
  };