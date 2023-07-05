import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl =
"https://devapi.maxwhere.com"

export const spaceApi = createApi({
  reducerPath: 'spaceApi',
  tagTypes: ["SandboxSpaces"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        return headers
      }
    },
  }),
  endpoints: (build) => ({
    getSandboxSpaces: build.query({
      query: () => ({
        url: `/spaces/search?sandbox=true`,
        method: 'GET',
    }),
    transformResponse: (response, meta, arg) =>  response.items
  }),
    invalidatesTags: [{ type: "SandboxSpaces", id: "LIST" }],
  }),
})

// export react hook
export const { useGetSandboxSpacesQuery } = spaceApi
