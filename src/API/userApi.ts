import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { User } from '@/components/home/BetaTest';

interface UserResType {
  meta: { currentPage: number; perPage: number; totalPages: number };
  items: User[];
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://new-backend.unistory.app/api/data',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserResType, number>({
      query: (page) => `?page=${page}&perPage=20`,
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/id/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = userApi;
