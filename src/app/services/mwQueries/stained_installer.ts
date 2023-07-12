import { mwApi as api } from "../mwApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postStainedInstaller: build.mutation<
      PostStainedInstallerApiResponse,
      PostStainedInstallerApiArg
    >({
      query: (queryArg) => ({
        url: `/stained_installer`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteStainedInstallerByNanoid: build.mutation<
      DeleteStainedInstallerByNanoidApiResponse,
      DeleteStainedInstallerByNanoidApiArg
    >({
      query: (queryArg) => ({
        url: `/stained_installer/${queryArg.nanoid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getStainedInstallerByNanoid: build.query<
      GetStainedInstallerByNanoidApiResponse,
      GetStainedInstallerByNanoidApiArg
    >({
      query: (queryArg) => ({
        url: `/stained_installer/${queryArg.nanoid}`,
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});

export type InstallerStain = {
  created_at?: string;
  expire_at?: string;
  nanoid: string;
};
export type InstallerStainResponse = {
  space_uuid?: string;
};
export type PostStainedInstallerApiResponse = /** status 200  */ InstallerStain;
export type PostStainedInstallerApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: {
    space_uuid?: string;
  };
};
export type DeleteStainedInstallerByNanoidApiResponse = unknown;
export type DeleteStainedInstallerByNanoidApiArg = {
  nanoid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetStainedInstallerByNanoidApiResponse =
  /** status 200  */ InstallerStainResponse;
export type GetStainedInstallerByNanoidApiArg = {
  nanoid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: {
    nanoid?: string;
  };
};
export { injectedRtkApi as mwApi };
export const {
  usePostStainedInstallerMutation,
  useDeleteStainedInstallerByNanoidMutation,
  useGetStainedInstallerByNanoidQuery,
} = injectedRtkApi;
