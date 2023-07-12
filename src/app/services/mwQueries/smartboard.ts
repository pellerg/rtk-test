import { mwApi as api } from "../mwApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postSmartboard: build.mutation<
      PostSmartboardApiResponse,
      PostSmartboardApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard`,
        method: "POST",
        body: queryArg.smartboardSetter,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteSmartboardBySmartboardUuid: build.mutation<
      DeleteSmartboardBySmartboardUuidApiResponse,
      DeleteSmartboardBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSmartboardBySmartboardUuid: build.query<
      GetSmartboardBySmartboardUuidApiResponse,
      GetSmartboardBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSmartboardBySmartboardUuid: build.mutation<
      PatchSmartboardBySmartboardUuidApiResponse,
      PatchSmartboardBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}`,
        method: "PATCH",
        body: queryArg.smartboardUpdate,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    putSmartboardBySmartboardUuid: build.mutation<
      PutSmartboardBySmartboardUuidApiResponse,
      PutSmartboardBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}`,
        method: "PUT",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSmartboardBySmartboardUuidClone: build.mutation<
      PostSmartboardBySmartboardUuidCloneApiResponse,
      PostSmartboardBySmartboardUuidCloneApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}/clone`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSmartboardBySmartboardUuidMove: build.mutation<
      PatchSmartboardBySmartboardUuidMoveApiResponse,
      PatchSmartboardBySmartboardUuidMoveApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}/move`,
        method: "PATCH",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSmartboardBySmartboardUuidPlaceholder: build.mutation<
      PatchSmartboardBySmartboardUuidPlaceholderApiResponse,
      PatchSmartboardBySmartboardUuidPlaceholderApiArg
    >({
      query: (queryArg) => ({
        url: `/smartboard/${queryArg.smartboardUuid}/placeholder`,
        method: "PATCH",
        body: queryArg.placeholder,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type DeleteSelectionpanelBySmartboardUuidApiResponse = unknown;
export type DeleteSelectionpanelBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetSelectionpanelBySmartboardUuidApiResponse =
  /** status 200  */ Selectionpanel;
export type GetSelectionpanelBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PatchSelectionpanelBySmartboardUuidApiResponse =
  /** status 200  */ Selectionpanel;
export type PatchSelectionpanelBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  updateSelectionPanel: UpdateSelectionPanel;
};
export type DeleteSelectionpanelBySmartboardUuidProjectsApiResponse = unknown;
export type DeleteSelectionpanelBySmartboardUuidProjectsApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: {
    project_uuids?: string[];
  };
};
export type PostSelectionpanelBySmartboardUuidProjectsApiResponse = unknown;
export type PostSelectionpanelBySmartboardUuidProjectsApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  body: {
    project_uuids?: string[];
  };
};
export type PostSmartboardApiResponse =
  /** status 200  */ SmartboardSetterResponse;
export type PostSmartboardApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  smartboardSetter: SmartboardSetter;
};
export type DeleteSmartboardBySmartboardUuidApiResponse = unknown;
export type DeleteSmartboardBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetSmartboardBySmartboardUuidApiResponse = unknown;
export type GetSmartboardBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PatchSmartboardBySmartboardUuidApiResponse =
  /** status 200  */ Smartboard;
export type PatchSmartboardBySmartboardUuidApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  smartboardUpdate: SmartboardUpdate;
};
export type PostSmartboardBySmartboardUuidCloneApiResponse =
  /** status 200  */ Smartboard;
export type PostSmartboardBySmartboardUuidCloneApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    project_uuid?: string;
  };
};
export type PatchSmartboardBySmartboardUuidMoveApiResponse = unknown;
export type PatchSmartboardBySmartboardUuidMoveApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  body: {
    project_uuid?: string;
  };
};
export type PatchSmartboardBySmartboardUuidPlaceholderApiResponse =
  /** status 200  */ Smartboard;
export type PatchSmartboardBySmartboardUuidPlaceholderApiArg = {
  smartboardUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  placeholder: Placeholder;
};

export type PutSmartboardBySmartboardUuidApiResponse = /** status 200  */ {
  uuid: string;
};

export type PutSmartboardBySmartboardUuidApiArg = {
  smartboardUuid: string;
  authorization?: string;
  body: {
    content_type: string;
    link: string;
  };
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
export type UpdateSelectionPanel = {
  name?: string;
  subtitle?: string;
};
export type SmartboardSetterResponse = {
  uuid?: string;
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
export type Placeholder = {
  orientation?: Orientation;
  position?: Position;
  resolution?: Resolution;
  scale?: Scale;
  size?: Size;
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
export type SmartboardSetter = {
  client_type?: string;
  content_type?: string;
  link?: string;
  placeholder?: Placeholder;
  project_uuid?: string;
  properties?: SmartboardProperties;
};
export type Smartboard = {
  auto_resolution?: boolean;
  content_type?:
    | (
        | "banner_widget"
        | "customlink"
        | "file"
        | "image"
        | "link"
        | "pdf"
        | "staticWeb"
      )
    | null;
  is_global?: boolean;
  is_visible?: boolean;
  live_link?: string | null;
  locked?: boolean;
  orientation?: any | null;
  position?: any | null;
  preview_image?: string | null;
  properties?: any | null;
  resolution?: any | null;
  scale?: any | null;
  size?: any | null;
  size_ratio?: string | null;
  type?:
    | (
        | "billboard"
        | "image frame"
        | "selectionpanel"
        | "sleepy smartboard"
        | "smartboard"
      )
    | null;
  uuid?: string;
};
export type SmartboardUpdate = {
  client_type?: string;
  properties?: SmartboardProperties;
};
export const {
  usePostSmartboardMutation,
  useDeleteSmartboardBySmartboardUuidMutation,
  useGetSmartboardBySmartboardUuidQuery,
  usePatchSmartboardBySmartboardUuidMutation,
  usePutSmartboardBySmartboardUuidMutation,
  usePostSmartboardBySmartboardUuidCloneMutation,
  usePatchSmartboardBySmartboardUuidMoveMutation,
  usePatchSmartboardBySmartboardUuidPlaceholderMutation,
} = injectedRtkApi;
