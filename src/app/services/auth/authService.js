import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://devapi.maxwhere.com";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
    }),
  }),
});

// export react hook
export const { useGetUserDetailsQuery } = authApi;
