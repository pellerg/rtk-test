import { createApi, fetchBaseQuery, MutationDefinition } from '@reduxjs/toolkit/query/react';

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
}

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://devapi.maxwhere.com/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.userToken
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  },
 }),
  endpoints: (builder) => ({
    login: builder.mutation<User, Credentials>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserDetails: builder.query({
      query: () => ({
        url: 'auth/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useLoginMutation
} = authApi;


export default authApi;
