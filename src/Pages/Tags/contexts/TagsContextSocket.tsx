import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useTagOperations } from '../viewmodels/useTagOperations';
import socket from '../../../services/socket';
import { Tag } from '../models/TagsModels';

interface TagContextType {
  tags: Tag[] | undefined;
  isLoading: boolean;
  error: unknown;
  handleCreateTag: (tag: Tag) => void;
  handleUpdateTag: (tag: Tag) => void;
  handleDeleteTag: (id: number) => void;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();
  const { tags, isLoading, error, handleCreateTag, handleUpdateTag, handleDeleteTag } = useTagOperations();
  
  // Configura o socket.io para escutar eventos de tags
  useEffect(() => {
    const handleTagUpdate = (updatedTag: Tag) => {
      queryClient.setQueryData(['tags'], (oldTags: Tag[] | undefined) => 
        oldTags?.map(tag => tag.id === updatedTag.id ? updatedTag : tag) || []
      );
    };

    const handleTagCreate = (newTag: Tag) => {
      queryClient.setQueryData(['tags'], (oldTags: Tag[] | undefined) => 
        oldTags ? [...oldTags, newTag] : [newTag]
      );
    };

    const handleTagDelete = (deletedTagId: number) => {
      queryClient.setQueryData(['tags'], (oldTags: Tag[] | undefined) => 
        oldTags?.filter(tag => tag.id !== deletedTagId) || []
      );
    };

    socket.on('tagCreated', handleTagCreate);
    socket.on('tagUpdated', handleTagUpdate);
    socket.on('tagDeleted', handleTagDelete);

    return () => {
      socket.off('tagCreated', handleTagCreate);
      socket.off('tagUpdated', handleTagUpdate);
      socket.off('tagDeleted', handleTagDelete);
    };
  }, [queryClient]);

  return (
    <TagContext.Provider
      value={{ tags, isLoading, error, handleCreateTag, handleUpdateTag, handleDeleteTag }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTagContext = () => {
  const context = useContext(TagContext);
  if (context === undefined) {
    throw new Error('useTagContext must be used within a TagProvider');
  }
  return context;
};
