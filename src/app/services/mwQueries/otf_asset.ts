import { mwApi as api } from "../mwApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postAdminOtfAsset: build.mutation<
      PostAdminOtfAssetApiResponse,
      PostAdminOtfAssetApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/otf_asset`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteAdminOtfAssetByOtfAssetUuid: build.mutation<
      DeleteAdminOtfAssetByOtfAssetUuidApiResponse,
      DeleteAdminOtfAssetByOtfAssetUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/otf_asset/${queryArg.otfAssetUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAdminOtfAssetByOtfAssetUuid: build.query<
      GetAdminOtfAssetByOtfAssetUuidApiResponse,
      GetAdminOtfAssetByOtfAssetUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/otf_asset/${queryArg.otfAssetUuid}`,
      }),
    }),
    patchAdminOtfAssetByOtfAssetUuid: build.mutation<
      PatchAdminOtfAssetByOtfAssetUuidApiResponse,
      PatchAdminOtfAssetByOtfAssetUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/otf_asset/${queryArg.otfAssetUuid}`,
        method: "PATCH",
        body: queryArg.otfAssetPatch,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postAdminOtfAssetByOtfAssetUuid: build.mutation<
      PostAdminOtfAssetByOtfAssetUuidApiResponse,
      PostAdminOtfAssetByOtfAssetUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/otf_asset/${queryArg.otfAssetUuid}`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type PostAdminOtfAssetApiResponse = /** status 200  */ OtfAsset;
export type PostAdminOtfAssetApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    name?: string;
  };
};
export type DeleteAdminOtfAssetByOtfAssetUuidApiResponse = unknown;
export type DeleteAdminOtfAssetByOtfAssetUuidApiArg = {
  otfAssetUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetAdminOtfAssetByOtfAssetUuidApiResponse = unknown;
export type GetAdminOtfAssetByOtfAssetUuidApiArg = {
  otfAssetUuid: string;
};
export type PatchAdminOtfAssetByOtfAssetUuidApiResponse =
  /** status 200  */ OtfAsset;
export type PatchAdminOtfAssetByOtfAssetUuidApiArg = {
  otfAssetUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  otfAssetPatch: OtfAssetPatch;
};
export type PostAdminOtfAssetByOtfAssetUuidApiResponse =
  /** status 200  */ OtfAsset;
export type PostAdminOtfAssetByOtfAssetUuidApiArg = {
  otfAssetUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: Blob;
};

export type SpaceAffinity = {
  name?: string;
  uuid?: string;
};
export type OtfAsset = {
  created_at?: string;
  dep_size?: number;
  description?: string | null;
  id?: number;
  name: string;
  presigned_url_zip?: string;
  space_affinities?: SpaceAffinity[];
  unlisted?: boolean;
  updated_at?: string | null;
  uuid?: string;
};
export type OtfAssetSearch = {
  description?: string | null;
  name?: string | null;
  space_affinity?: string | null;
  uuid?: string | null;
};
export type OtfAssetExtended = {
  created_at?: string;
  dep_size?: number;
  description?: string | null;
  id?: number;
  name: string;
  presigned_url_zip?: string;
  space_affinities?: SpaceAffinity[];
  space_prototypes?: OtfAssetSearch[];
  unlisted?: boolean;
  updated_at?: string | null;
  uuid?: string;
};
export type OtfAssetPatch = {
  description?: string | null;
  name?: string;
  unlisted?: boolean;
};
export const {
  usePostAdminOtfAssetMutation,
  useDeleteAdminOtfAssetByOtfAssetUuidMutation,
  useGetAdminOtfAssetByOtfAssetUuidQuery,
  usePatchAdminOtfAssetByOtfAssetUuidMutation,
  usePostAdminOtfAssetByOtfAssetUuidMutation,
} = injectedRtkApi;
