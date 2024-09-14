import { ApiService } from './../../../services/Api';
import { useQuery, useMutation, useQueryClient } from 'react-query';


const apiService = new ApiService();

// Hook para buscar usuários
export const useUsers = () => {
  return useQuery('users', async () => {
    const response = await apiService.get<{ id: number; name: string; email: string }[]>('/users');
    console.log(response)
    return response.data;
  });
};

// Hook para criar um usuário
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newUser: { name: string; email: string }) => {
      const response = await apiService.post<{ id: number; name: string; email: string }>('/users', newUser);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users'); // Invalida e refetch a lista de usuários
      },
    }
  );
};

// Hook para atualizar um usuário
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (user: { id: number; name: string; email: string }) => {
      const response = await apiService.put<{ id: number; name: string; email: string }>(`/users/${user.id}`, user);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users'); // Invalida e refetch a lista de usuários
      },
    }
  );
};

// Hook para excluir um usuário
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (userId: number) => {
      const response = await apiService.delete<{ message: string }>(`/users/${userId}`);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users'); // Invalida e refetch a lista de usuários
      },
    }
  );
};
