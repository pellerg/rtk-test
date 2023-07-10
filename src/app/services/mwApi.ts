// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed

const baseUrl =
"https://devapi.maxwhere.com"


export const mwApi = createApi({
  tagTypes: ["SandboxSpaces", "EducationSpaces"],
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
  // baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({}),
})