import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteAdminProjectPrototypeByProjectPrototypeUuid: build.mutation<
      DeleteAdminProjectPrototypeByProjectPrototypeUuidApiResponse,
      DeleteAdminProjectPrototypeByProjectPrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/project_prototype/${queryArg.projectPrototypeUuid}`,
        method: "DELETE",
      }),
    }),
    getAdminProjectPrototypeByProjectPrototypeUuid: build.query<
      GetAdminProjectPrototypeByProjectPrototypeUuidApiResponse,
      GetAdminProjectPrototypeByProjectPrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/project_prototype/${queryArg.projectPrototypeUuid}`,
      }),
    }),
    postAdminProjectPrototypeByProjectPrototypeUuid: build.mutation<
      PostAdminProjectPrototypeByProjectPrototypeUuidApiResponse,
      PostAdminProjectPrototypeByProjectPrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/project_prototype/${queryArg.projectPrototypeUuid}`,
        method: "POST",
      }),
    }),
    postAdminSpacePrototypeCreate: build.mutation<
      PostAdminSpacePrototypeCreateApiResponse,
      PostAdminSpacePrototypeCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/create`,
        method: "POST",
        body: queryArg.spacePrototype,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteAdminSpacePrototypeBySpacePrototypeUuid: build.mutation<
      DeleteAdminSpacePrototypeBySpacePrototypeUuidApiResponse,
      DeleteAdminSpacePrototypeBySpacePrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}`,
        method: "DELETE",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAdminSpacePrototypeBySpacePrototypeUuid: build.query<
      GetAdminSpacePrototypeBySpacePrototypeUuidApiResponse,
      GetAdminSpacePrototypeBySpacePrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchAdminSpacePrototypeBySpacePrototypeUuid: build.mutation<
      PatchAdminSpacePrototypeBySpacePrototypeUuidApiResponse,
      PatchAdminSpacePrototypeBySpacePrototypeUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}`,
        method: "PATCH",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersion:
      build.query<
        GetAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersionApiResponse,
        GetAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/asset_pack_current_version`,
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    postAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersion: build.mutation<
      PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionApiResponse,
      PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/asset_pack_version`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersion:
      build.mutation<
        DeleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiResponse,
        DeleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/asset_pack_version/${queryArg.version}`,
          method: "DELETE",
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    postAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersion:
      build.mutation<
        PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiResponse,
        PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/asset_pack_version/${queryArg.version}`,
          method: "POST",
          body: queryArg.body,
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    deleteAdminSpacePrototypeBySpacePrototypeUuidOtfAsset: build.mutation<
      DeleteAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiResponse,
      DeleteAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/otf_asset`,
        method: "DELETE",
      }),
    }),
    postAdminSpacePrototypeBySpacePrototypeUuidOtfAsset: build.mutation<
      PostAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiResponse,
      PostAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/otf_asset`,
        method: "POST",
      }),
    }),
    postAdminSpacePrototypeBySpacePrototypeUuidProjectPrototype: build.mutation<
      PostAdminSpacePrototypeBySpacePrototypeUuidProjectPrototypeApiResponse,
      PostAdminSpacePrototypeBySpacePrototypeUuidProjectPrototypeApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/project_prototype`,
        method: "POST",
      }),
    }),
    postAdminSpacePrototypeBySpacePrototypeUuidRunPipeline: build.mutation<
      PostAdminSpacePrototypeBySpacePrototypeUuidRunPipelineApiResponse,
      PostAdminSpacePrototypeBySpacePrototypeUuidRunPipelineApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/run_pipeline`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersion:
      build.mutation<
        PostAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersionApiResponse,
        PostAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/space_prototype_version`,
          method: "POST",
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    deleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersion:
      build.mutation<
        DeleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiResponse,
        DeleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/version/${queryArg.version}`,
          method: "DELETE",
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    postAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersion:
      build.mutation<
        PostAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiResponse,
        PostAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiArg
      >({
        query: (queryArg) => ({
          url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/version/${queryArg.version}`,
          method: "POST",
          body: queryArg.body,
          headers: { Authorization: queryArg.authorization },
        }),
      }),
    getAdminSpacePrototypeBySpacePrototypeUuidVersions: build.query<
      GetAdminSpacePrototypeBySpacePrototypeUuidVersionsApiResponse,
      GetAdminSpacePrototypeBySpacePrototypeUuidVersionsApiArg
    >({
      query: (queryArg) => ({
        url: `/admin/space_prototype/${queryArg.spacePrototypeUuid}/versions`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});

export type DeleteAdminProjectPrototypeByProjectPrototypeUuidApiResponse =
  unknown;
export type DeleteAdminProjectPrototypeByProjectPrototypeUuidApiArg = {
  projectPrototypeUuid: string;
};
export type GetAdminProjectPrototypeByProjectPrototypeUuidApiResponse = unknown;
export type GetAdminProjectPrototypeByProjectPrototypeUuidApiArg = {
  projectPrototypeUuid: string;
};
export type PostAdminProjectPrototypeByProjectPrototypeUuidApiResponse =
  unknown;
export type PostAdminProjectPrototypeByProjectPrototypeUuidApiArg = {
  projectPrototypeUuid: string;
};
export type PostAdminSpacePrototypeCreateApiResponse =
  /** status 200  */ SpacePrototype;
export type PostAdminSpacePrototypeCreateApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  spacePrototype: SpacePrototype;
};
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidApiResponse = unknown;
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidApiArg = {
  spacePrototypeUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    delete_gitlab_repo?: boolean;
  };
};
export type GetAdminSpacePrototypeBySpacePrototypeUuidApiResponse =
  /** status 200  */ SpacePrototypeExtended;
export type GetAdminSpacePrototypeBySpacePrototypeUuidApiArg = {
  spacePrototypeUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PatchAdminSpacePrototypeBySpacePrototypeUuidApiResponse =
  /** status 200  */ SpacePrototype;
export type PatchAdminSpacePrototypeBySpacePrototypeUuidApiArg = {
  spacePrototypeUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    asset_pack_version?: number | null;
    is_instantiatable?: boolean;
    name?: string;
    version?: number | null;
  };
};
export type GetAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersionApiResponse =
  /** status 200  */ SpacePrototypeAssetPackVersion;
export type GetAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersionApiArg =
  {
    spacePrototypeUuid: string;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
  };
export type PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionApiResponse =
  /** status 200  */ SpacePrototypeAssetPackVersion;
export type PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionApiArg =
  {
    spacePrototypeUuid: string;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
  };
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiResponse =
  unknown;
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiArg =
  {
    spacePrototypeUuid: string;
    version: number;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
  };
export type PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiResponse =
  unknown;
export type PostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionApiArg =
  {
    spacePrototypeUuid: string;
    version: number;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
    body: Blob;
  };
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiResponse =
  unknown;
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiArg = {
  spacePrototypeUuid: string;
};
export type PostAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiResponse =
  unknown;
export type PostAdminSpacePrototypeBySpacePrototypeUuidOtfAssetApiArg = {
  spacePrototypeUuid: string;
};
export type PostAdminSpacePrototypeBySpacePrototypeUuidProjectPrototypeApiResponse =
  unknown;
export type PostAdminSpacePrototypeBySpacePrototypeUuidProjectPrototypeApiArg =
  {
    spacePrototypeUuid: string;
  };
export type PostAdminSpacePrototypeBySpacePrototypeUuidRunPipelineApiResponse =
  unknown;
export type PostAdminSpacePrototypeBySpacePrototypeUuidRunPipelineApiArg = {
  spacePrototypeUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PostAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersionApiResponse =
  /** status 200  */ SpacePrototypeVersion;
export type PostAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersionApiArg =
  {
    spacePrototypeUuid: string;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
  };
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiResponse =
  unknown;
export type DeleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiArg =
  {
    spacePrototypeUuid: string;
    version: number;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
  };
export type PostAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiResponse =
  /** status 200  */ SpacePrototypeVersion;
export type PostAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionApiArg =
  {
    spacePrototypeUuid: string;
    version: number;
    /** Authorization HTTP header with JWT access token. */
    authorization?: string;
    body: Blob;
  };
export type GetAdminSpacePrototypeBySpacePrototypeUuidVersionsApiResponse =
  /** status 200  */ SpacePrototypeVersion[];
export type GetAdminSpacePrototypeBySpacePrototypeUuidVersionsApiArg = {
  spacePrototypeUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type SpacePrototype = {
  asset_pack_version?: number | null;
  created_at?: string;
  is_instantiatable?: boolean;
  name: string;
  updated_at?: string | null;
  uuid?: string;
  version?: number | null;
};
export type SpacePrototypeAssetPackVersion = {
  asset_pack_zip?: string | null;
  created_at?: string;
  presigned_url_zip?: string;
  updated_at?: string | null;
  version?: number | null;
};
export type ProjectPrototype = {
  created_at?: string;
  layout?: any | null;
  name: string;
  updated_at?: string | null;
  uuid?: string;
};
export type SpacePrototypeVersion = {
  created_at?: string;
  presigned_url_tar?: string;
  presigned_url_zip?: string;
  resource_tar?: string | null;
  resource_zip?: string | null;
  updated_at?: string | null;
  version?: number | null;
};
export type SpacePrototypeExtended = {
  asset_pack_version?: number | null;
  asset_pack_versions?: SpacePrototypeAssetPackVersion[];
  created_at?: string;
  is_instantiatable?: boolean;
  name: string;
  otf_assets?: OtfAsset[];
  project_prototypes?: ProjectPrototype[];
  prototype_versions?: SpacePrototypeVersion[];
  spaces?: Space[];
  updated_at?: string | null;
  uuid?: string;
  version?: number | null;
};

export type Space = {
  affiliations?: string | null;
  created_at?: string;
  description?: string | null;
  domain?: string | null;
  is_available_web?: boolean;
  is_public?: boolean;
  is_sandbox?: boolean;
  min_req_client_version?: string | null;
  monitoring_enabled?: boolean;
  name: string;
  owned_by?: string;
  prototype_id: number;
  prototype_uuid?: string;
  status?:
    | "active"
    | "disabled"
    | "suspended"
    | "locked"
    | "scheduled to remove"
    | "unavailable";
  subtitle?: string | null;
  tag?: any | null;
  thumbnail?: string | null;
  unlisted?: boolean;
  updated_at?: string | null;
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
export type SpaceAffinity = {
  name?: string;
  uuid?: string;
};

export { injectedRtkApi as mwApi };
export const {
  useDeleteAdminProjectPrototypeByProjectPrototypeUuidMutation,
  useGetAdminProjectPrototypeByProjectPrototypeUuidQuery,
  usePostAdminProjectPrototypeByProjectPrototypeUuidMutation,
  usePostAdminSpacePrototypeCreateMutation,
  useDeleteAdminSpacePrototypeBySpacePrototypeUuidMutation,
  useGetAdminSpacePrototypeBySpacePrototypeUuidQuery,
  usePatchAdminSpacePrototypeBySpacePrototypeUuidMutation,
  useGetAdminSpacePrototypeBySpacePrototypeUuidAssetPackCurrentVersionQuery,
  usePostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionMutation,
  useDeleteAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidAssetPackVersionAndVersionMutation,
  useDeleteAdminSpacePrototypeBySpacePrototypeUuidOtfAssetMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidOtfAssetMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidProjectPrototypeMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidRunPipelineMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidSpacePrototypeVersionMutation,
  useDeleteAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionMutation,
  usePostAdminSpacePrototypeBySpacePrototypeUuidVersionAndVersionMutation,
  useGetAdminSpacePrototypeBySpacePrototypeUuidVersionsQuery,
} = injectedRtkApi;
