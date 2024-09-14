import React, { createContext, ReactNode } from 'react';
import { useTagOperations } from '../viewmodels/useTagOperations';
import { Tag } from '../models/TagsModels';

interface TagContextType {
  tags: Tag[] | undefined;
  isLoading: boolean;
  error: unknown;
  handleCreateTag: (tag: Tag) => void;
  handleUpdateTag: (tag: Tag) => void;
  handleDeleteTag: (id: number) => void;
}

export const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { tags, isLoading, error, handleCreateTag, handleUpdateTag, handleDeleteTag } = useTagOperations();

  return (
    <TagContext.Provider
      value={{ tags, isLoading, error, handleCreateTag, handleUpdateTag, handleDeleteTag }}
    >
      {children}
    </TagContext.Provider>
  );
};
