// components/UserList.tsx
import React from 'react';
import { useUsers, useCreateUser, useUpdateUser, useDeleteUser } from './hooks/useUsers';

const User: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching users</div>;

  const handleCreateUser = () => {
    createUserMutation.mutate({ name: 'New User', email: 'new.user@example.com' });
  };

  const handleUpdateUser = (userId: number) => {
    updateUserMutation.mutate({ id: userId, name: 'Updated Name', email: 'updated.email@example.com' });
  };

  const handleDeleteUser = (userId: number) => {
    deleteUserMutation.mutate(userId);
  };

  return (
    <div>
      <button onClick={handleCreateUser}>Create User</button>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
