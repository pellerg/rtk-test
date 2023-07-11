import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postProject: build.mutation<PostProjectApiResponse, PostProjectApiArg>({
      query: (queryArg) => ({
        url: `/project`,
        method: "POST",
        body: queryArg.projectSetter,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteProjectByProjectUuid: build.mutation<
      DeleteProjectByProjectUuidApiResponse,
      DeleteProjectByProjectUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getProjectByProjectUuid: build.query<
      GetProjectByProjectUuidApiResponse,
      GetProjectByProjectUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postProjectByProjectUuidClone: build.mutation<
      PostProjectByProjectUuidCloneApiResponse,
      PostProjectByProjectUuidCloneApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}/clone`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteProjectByProjectUuidShare: build.mutation<
      DeleteProjectByProjectUuidShareApiResponse,
      DeleteProjectByProjectUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}/share`,
        method: "DELETE",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchProjectByProjectUuidShare: build.mutation<
      PatchProjectByProjectUuidShareApiResponse,
      PatchProjectByProjectUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}/share`,
        method: "PATCH",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postProjectByProjectUuidShare: build.mutation<
      PostProjectByProjectUuidShareApiResponse,
      PostProjectByProjectUuidShareApiArg
    >({
      query: (queryArg) => ({
        url: `/project/${queryArg.projectUuid}/share`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getProjectsSearch: build.query<
      GetProjectsSearchApiResponse,
      GetProjectsSearchApiArg
    >({
      query: (queryArg) => ({
        url: `/projects/search`,
        headers: { Authorization: queryArg.authorization },
        params: {
          permission: queryArg.permission,
          page_num: queryArg.pageNum,
          order_by: queryArg.orderBy,
          domain: queryArg.domain,
          space_uuid: queryArg.spaceUuid,
          mobile: queryArg.mobile,
          favorites: queryArg.favorites,
          name: queryArg.name,
          category: queryArg.category,
          desc_order: queryArg.descOrder,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type PostProjectApiResponse = /** status 200  */ ProjectDetails;
export type PostProjectApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  projectSetter: ProjectSetter;
};
export type DeleteProjectByProjectUuidApiResponse = unknown;
export type DeleteProjectByProjectUuidApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetProjectByProjectUuidApiResponse =
  /** status 200  */ ProjectDetails;
export type GetProjectByProjectUuidApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PostProjectByProjectUuidCloneApiResponse =
  /** status 200  */ ProjectDetails;
export type PostProjectByProjectUuidCloneApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    project_name?: string;
  };
};
export type DeleteProjectByProjectUuidShareApiResponse = unknown;
export type DeleteProjectByProjectUuidShareApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type PatchProjectByProjectUuidShareApiResponse = unknown;
export type PatchProjectByProjectUuidShareApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type PostProjectByProjectUuidShareApiResponse = unknown;
export type PostProjectByProjectUuidShareApiArg = {
  projectUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: SharedWith[];
};
export type GetProjectsSearchApiResponse =
  /** status 200  */ PaginatedProjectDetails;
export type GetProjectsSearchApiArg = {
  permission?: string;
  pageNum?: any;
  orderBy?: string;
  domain?: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  spaceUuid?: string;
  mobile?: boolean;
  favorites?: boolean;
  name?: string;
  category?: string;
  descOrder?: boolean;
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
export type SmartboardProperties = {
  capsule?: boolean;
  force_load_on_web?: boolean;
  hidden?: boolean;
  img_wh_ratio?: number;
  sleep?: boolean;
  smartboard_bar?: boolean;
  transparent?: boolean;
  wake?: boolean;
};
export type SmartboardDisplay = {
  client_type?: string;
  content_type?: string;
  locked?: boolean;
  orientation?: object;
  position?: object;
  properties?: SmartboardProperties;
  resolution?: object;
  scale?: object;
  size?: object;
  url?: string;
  uuid?: string;
  webmw_embeddable?: boolean;
};
export type ProjectDetails = {
  auto_load?: boolean;
  created_at?: string;
  created_by?: string;
  description?: string;
  domain?: string;
  is_public?: boolean;
  is_sandbox?: boolean;
  locked_by?: string;
  name?: string;
  number_of_smartboards?: number;
  permission_id?: number;
  shared_with?: SharedWith[];
  smartboards?: SmartboardDisplay[];
  space_name?: string;
  space_uuid?: string;
  sticky?: boolean;
  thumbnail?: string;
  unlisted?: boolean;
  updated_at?: string;
  uuid?: string;
};
export type ProjectSetter = {
  auto_load?: boolean;
  description?: string | null;
  is_public?: boolean;
  name?: string;
  prototype_uuid?: string | null;
  space_uuid?: string;
  sticky?: boolean;
  unlisted?: boolean;
};
export type PaginatedProjectDetails = {
  items?: ProjectDetails[];
  page?: number;
  pages?: number;
  total_records?: number;
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
export type Selectionpanel = {
  id?: number;
  name?: string | null;
  projects?: BasicProject[];
  subtitle?: string | null;
  uuid?: string;
};
export const {
  usePostProjectMutation,
  useDeleteProjectByProjectUuidMutation,
  useGetProjectByProjectUuidQuery,
  usePostProjectByProjectUuidCloneMutation,
  useDeleteProjectByProjectUuidShareMutation,
  usePatchProjectByProjectUuidShareMutation,
  usePostProjectByProjectUuidShareMutation,
  useGetProjectsSearchQuery,
} = injectedRtkApi;
