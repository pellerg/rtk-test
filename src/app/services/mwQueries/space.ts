import { mwApi as api } from "../mwApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postSpace: build.mutation<PostSpaceApiResponse, PostSpaceApiArg>({
      query: (queryArg) => ({
        url: `/space`,
        method: "POST",
        body: queryArg.createSpace,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteSpaceBySpaceUuid: build.mutation<
      DeleteSpaceBySpaceUuidApiResponse,
      DeleteSpaceBySpaceUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpaceBySpaceUuid: build.query<
      GetSpaceBySpaceUuidApiResponse,
      GetSpaceBySpaceUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSpaceBySpaceUuid: build.mutation<
      PatchSpaceBySpaceUuidApiResponse,
      PatchSpaceBySpaceUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}`,
        method: "PATCH",
        body: queryArg.createSpace,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpaceBySpaceUuidDetails: build.query<
      GetSpaceBySpaceUuidDetailsApiResponse,
      GetSpaceBySpaceUuidDetailsApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/details`,
        headers: { Authorization: queryArg.authorization },
        params: { action: queryArg.action },
      }),
    }),
    getSpaceBySpaceUuidDownload: build.query<
      GetSpaceBySpaceUuidDownloadApiResponse,
      GetSpaceBySpaceUuidDownloadApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/download`,
        headers: { Authorization: queryArg.authorization },
        params: { Version: queryArg.version },
      }),
    }),
    deleteSpaceBySpaceUuidFavorite: build.mutation<
      DeleteSpaceBySpaceUuidFavoriteApiResponse,
      DeleteSpaceBySpaceUuidFavoriteApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/favorite`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSpaceBySpaceUuidFavorite: build.mutation<
      PostSpaceBySpaceUuidFavoriteApiResponse,
      PostSpaceBySpaceUuidFavoriteApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/favorite`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpaceBySpaceUuidLimit: build.query<
      GetSpaceBySpaceUuidLimitApiResponse,
      GetSpaceBySpaceUuidLimitApiArg
    >({
      query: (queryArg) => ({ url: `/space/${queryArg.spaceUuid}/limit` }),
    }),
    deleteSpaceBySpaceUuidShare: build.mutation<
      DeleteSpaceBySpaceUuidShareApiResponse,
      DeleteSpaceBySpaceUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/share`,
        method: "DELETE",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSpaceBySpaceUuidShare: build.mutation<
      PatchSpaceBySpaceUuidShareApiResponse,
      PatchSpaceBySpaceUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/share`,
        method: "PATCH",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSpaceBySpaceUuidShare: build.mutation<
      PostSpaceBySpaceUuidShareApiResponse,
      PostSpaceBySpaceUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/share`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpaceBySpaceUuidStorage: build.query<
      GetSpaceBySpaceUuidStorageApiResponse,
      GetSpaceBySpaceUuidStorageApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/storage`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpaceBySpaceUuidStory: build.query<
      GetSpaceBySpaceUuidStoryApiResponse,
      GetSpaceBySpaceUuidStoryApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/story`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSpaceBySpaceUuidStory: build.mutation<
      PostSpaceBySpaceUuidStoryApiResponse,
      PostSpaceBySpaceUuidStoryApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/story`,
        method: "POST",
        body: queryArg.story,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSpaceBySpaceUuidThumbnail: build.mutation<
      PatchSpaceBySpaceUuidThumbnailApiResponse,
      PatchSpaceBySpaceUuidThumbnailApiArg
    >({
      query: (queryArg) => ({
        url: `/space/${queryArg.spaceUuid}/thumbnail`,
        method: "PATCH",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSpaces: build.mutation<PostSpacesApiResponse, PostSpacesApiArg>({
      query: (queryArg) => ({
        url: `/spaces`,
        method: "POST",
        body: queryArg.listOfSpacesSchemaKwargs,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSpacesSearch: build.query<
      GetSpacesSearchApiResponse,
      GetSpacesSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/spaces/search`,
        headers: { Authorization: queryArg.authorization },
        params: {
          permission: queryArg.permission,
          page_num: queryArg.pageNum,
          created_spaces: queryArg.createdSpaces,
          order_by: queryArg.orderBy,
          sandbox: queryArg.sandbox,
          status: queryArg.status,
          domain: queryArg.domain,
          uuid: queryArg.uuid,
          mobile: queryArg.mobile,
          favorites: queryArg.favorites,
          last_opened: queryArg.lastOpened,
          name: queryArg.name,
          category: queryArg.category,
          desc_order: queryArg.descOrder,
        },
      }),
    }),
    getSandboxSpaces: build.query<
      GetSpacesSearchApiResponse,
      GetSpacesSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/spaces/search?sandbox=true`,
        headers: { Authorization: queryArg.authorization },
        params: {
          permission: queryArg.permission,
          page_num: queryArg.pageNum,
          created_spaces: queryArg.createdSpaces,
          order_by: queryArg.orderBy,
          sandbox: queryArg.sandbox,
          status: queryArg.status,
          domain: queryArg.domain,
          uuid: queryArg.uuid,
          mobile: queryArg.mobile,
          favorites: queryArg.favorites,
          last_opened: queryArg.lastOpened,
          name: queryArg.name,
          category: queryArg.category,
          desc_order: queryArg.descOrder,
        },
      }),
      providesTags: (result, error, arg) => {
        return result
          ? [
              ...(result.items ?? []).map(({ uuid }) => ({
                type: "Space" as const,
                id: uuid,
              })),
              "Space",
            ]
          : ["Space"];
      },
      keepUnusedDataFor: 300,
    }),
    getEducationSpaces: build.query<
      GetSpacesSearchApiResponse,
      GetSpacesSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/spaces/search?category=education`,
        headers: { Authorization: queryArg.authorization },
        params: {
          permission: queryArg.permission,
          page_num: queryArg.pageNum,
          created_spaces: queryArg.createdSpaces,
          order_by: queryArg.orderBy,
          sandbox: queryArg.sandbox,
          status: queryArg.status,
          domain: queryArg.domain,
          uuid: queryArg.uuid,
          mobile: queryArg.mobile,
          favorites: queryArg.favorites,
          last_opened: queryArg.lastOpened,
          name: queryArg.name,
          category: queryArg.category,
          desc_order: queryArg.descOrder,
        },
      }),
      providesTags: (result, error, arg) => {
        return result
          ? [
              ...(result.items ?? []).map(({ uuid }) => ({
                type: "Space" as const,
                id: uuid,
              })),
              "Space",
            ]
          : ["Space"];
      },
      keepUnusedDataFor: 300,
    }),
    getEventSpaces: build.query<
      GetSpacesSearchApiResponse,
      GetSpacesSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/spaces/search?category=event`,
        headers: { Authorization: queryArg.authorization },
        params: {
          permission: queryArg.permission,
          page_num: queryArg.pageNum,
          created_spaces: queryArg.createdSpaces,
          order_by: queryArg.orderBy,
          sandbox: queryArg.sandbox,
          status: queryArg.status,
          domain: queryArg.domain,
          uuid: queryArg.uuid,
          mobile: queryArg.mobile,
          favorites: queryArg.favorites,
          last_opened: queryArg.lastOpened,
          name: queryArg.name,
          category: queryArg.category,
          desc_order: queryArg.descOrder,
        },
      }),
      providesTags: (result, error, arg) => {
        return result
          ? [
              ...(result.items ?? []).map(({ uuid }) => ({
                type: "Space" as const,
                id: uuid,
              })),
              "Space",
            ]
          : ["Space"];
      },
      keepUnusedDataFor: 300,
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as spaceQueries };

export type PostSpaceApiResponse = /** status 200  */ Space;
export type PostSpaceApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  createSpace: CreateSpace;
};
export type DeleteSpaceBySpaceUuidApiResponse = unknown;
export type DeleteSpaceBySpaceUuidApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetSpaceBySpaceUuidApiResponse = /** status 200  */ SpaceDetails;
export type GetSpaceBySpaceUuidApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PatchSpaceBySpaceUuidApiResponse =
  /** status 200  */
  Space | /** status 207  */ Space;
export type PatchSpaceBySpaceUuidApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  createSpace: CreateSpace;
};
export type GetSpaceBySpaceUuidDetailsApiResponse =
  /** status 200  */ SpaceDetailsExtended;
export type GetSpaceBySpaceUuidDetailsApiArg = {
  spaceUuid: string;
  action?: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetSpaceBySpaceUuidDownloadApiResponse =
  /** status 200  */ SpaceDownload;
export type GetSpaceBySpaceUuidDownloadApiArg = {
  spaceUuid: string;
  /** Requider version of the space prototype. */
  version?: any;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type DeleteSpaceBySpaceUuidFavoriteApiResponse = unknown;
export type DeleteSpaceBySpaceUuidFavoriteApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PostSpaceBySpaceUuidFavoriteApiResponse = unknown;
export type PostSpaceBySpaceUuidFavoriteApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetSpaceBySpaceUuidLimitApiResponse = unknown;
export type GetSpaceBySpaceUuidLimitApiArg = {
  spaceUuid: string;
};
export type DeleteSpaceBySpaceUuidShareApiResponse = unknown;
export type DeleteSpaceBySpaceUuidShareApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type PatchSpaceBySpaceUuidShareApiResponse = unknown;
export type PatchSpaceBySpaceUuidShareApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type PostSpaceBySpaceUuidShareApiResponse = unknown;
export type PostSpaceBySpaceUuidShareApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type GetSpaceBySpaceUuidStorageApiResponse =
  /** status 200  */ SpaceStorage;
export type GetSpaceBySpaceUuidStorageApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetSpaceBySpaceUuidStoryApiResponse = /** status 200  */ Story[];
export type GetSpaceBySpaceUuidStoryApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PostSpaceBySpaceUuidStoryApiResponse = /** status 200  */ Story;
export type PostSpaceBySpaceUuidStoryApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  story: Story;
};
export type PatchSpaceBySpaceUuidThumbnailApiResponse =
  /** status 200  */ SpaceDetails;
export type PatchSpaceBySpaceUuidThumbnailApiArg = {
  spaceUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: {
    file: Blob;
  };
};
export type PostSpacesApiResponse = /** status 200  */ PaginatedSpace;
export type PostSpacesApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  listOfSpacesSchemaKwargs: ListOfSpacesSchemaKwargs;
};
export type GetSpacesSearchApiResponse = /** status 200  */ PaginatedSpace;
export type GetSpacesSearchApiArg = {
  permission?: string;
  pageNum?: any;
  createdSpaces?: boolean;
  orderBy?: string;
  sandbox?: boolean;
  status?: string;
  domain?: string;
  uuid?: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  mobile?: boolean;
  favorites?: boolean;
  lastOpened?: boolean;
  name?: string;
  category?: string;
  descOrder?: boolean;
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
export type ProjectPrototype = {
  created_at?: string;
  layout?: any | null;
  name: string;
  updated_at?: string | null;
  uuid?: string;
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
export type CreateSpace = {
  affiliations?: string;
  category?: string;
  description?: string;
  domain?: string | null;
  is_available_web?: boolean;
  is_public?: boolean;
  is_sandbox?: boolean;
  min_req_client_version?: string;
  monitoring_enabled?: boolean;
  name?: string;
  owner?: string;
  prototype_uuid?: string;
  sandbox_space_uuid?: string;
  subtitle?: string | null;
  tag?: string[];
  unlisted?: boolean;
};
export type SpaceDetails = {
  affiliations?: string;
  category?: string[];
  created_at?: string;
  creator?: string;
  description?: string;
  domain?: string;
  is_available_web?: boolean;
  is_favorite?: boolean;
  is_public?: boolean;
  is_sandbox?: boolean;
  magic_link?: string;
  magic_link_web?: string;
  min_req_client_version?: string;
  name?: string;
  permission_id?: number;
  status?: string;
  subtitle?: string;
  tag?: string[];
  thumbnail?: string;
  updated_at?: string;
  uuid?: string;
  version?: number;
};
export type BasicProject = {
  auto_load?: boolean;
  created_by?: string;
  is_public?: boolean;
  is_sandbox?: boolean;
  locked_by?: string;
  name?: string;
  number_of_smartboards?: number;
  permission_id?: number;
  sticky?: boolean;
  unlisted?: boolean;
  uuid?: string;
};
export type SharedWith = {
  company_name?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  permission?: string;
  permission_id: number;
  uuid?: string;
};
export type SpaceDetailsExtended = {
  affiliations?: string;
  categories?: string[];
  category?: string[];
  created_at?: string;
  created_by?: string;
  creator?: string;
  description?: string;
  domain?: string;
  is_available_web?: boolean;
  is_favorite?: boolean;
  is_public?: boolean;
  is_sandbox?: boolean;
  magic_link?: string;
  magic_link_web?: string;
  min_req_client_version?: string;
  monitoring_enabled?: boolean;
  name?: string;
  owned_by?: string;
  permission_id?: number;
  project_prototypes?: ProjectPrototype[];
  projects?: BasicProject[];
  shared_with?: SharedWith[];
  status?: string;
  subtitle?: string;
  tag?: string[];
  thumbnail?: string;
  unlisted?: boolean;
  updated_at?: string;
  used_storage_percentage?: number;
  uuid?: string;
  version?: number;
};
export type SpaceDependency = {
  dep_size?: number;
  name?: string;
  presigned_url_zip?: string;
  updated_at?: string;
  uuid?: string;
};
export type SpaceDownload = {
  otf_assets?: SpaceDependency[];
  prototype_updated_at?: string;
  prototype_uuid?: string;
  resource_tar?: string;
  resource_tar_length?: number;
  resource_zip?: string;
  resource_zip_length?: number;
  version?: number;
};
export type SpaceLimit = {
  max_user?: number;
  used_user?: number;
};
export type SpaceStorage = {
  free_storage?: number;
};
export type Orientation = {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
};
export type Position = {
  x?: number;
  y?: number;
  z?: number;
};
export type Resolution = {
  height?: number;
  width?: number;
};
export type Scale = {
  x?: number;
  y?: number;
  z?: number;
};
export type Size = {
  height?: number;
  width?: number;
};
export type StoryCoordinate = {
  orientation?: Orientation;
  position?: Position;
  resolution?: Resolution;
  scale?: Scale;
  size?: Size;
  transitionTime?: number;
  waitingTime?: number;
};
export type Story = {
  name: string;
  story?: StoryCoordinate[];
  uuid?: string;
};
export type PaginatedSpace = {
  items?: SpaceDetails[];
  page?: number;
  pages?: number;
  total_records?: number;
};
export type ListOfSpacesSchemaKwargs = {
  name?: string;
  tag?: string[];
  uuid?: string[];
};
export const {
  usePostSpaceMutation,
  useDeleteSpaceBySpaceUuidMutation,
  useGetSpaceBySpaceUuidQuery,
  usePatchSpaceBySpaceUuidMutation,
  useGetSpaceBySpaceUuidDetailsQuery,
  useGetSpaceBySpaceUuidDownloadQuery,
  useDeleteSpaceBySpaceUuidFavoriteMutation,
  usePostSpaceBySpaceUuidFavoriteMutation,
  useGetSpaceBySpaceUuidLimitQuery,
  useDeleteSpaceBySpaceUuidShareMutation,
  usePatchSpaceBySpaceUuidShareMutation,
  usePostSpaceBySpaceUuidShareMutation,
  useGetSpaceBySpaceUuidStorageQuery,
  useGetSpaceBySpaceUuidStoryQuery,
  usePostSpaceBySpaceUuidStoryMutation,
  usePatchSpaceBySpaceUuidThumbnailMutation,
  usePostSpacesMutation,
  useGetSpacesSearchQuery,
} = injectedRtkApi;
