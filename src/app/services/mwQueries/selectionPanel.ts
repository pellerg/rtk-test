import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postSelectionpanel: build.mutation<
      PostSelectionpanelApiResponse,
      PostSelectionpanelApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel`,
        method: "POST",
        body: queryArg.selectionpanelSetter,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteSelectionpanelBySmartboardUuid: build.mutation<
      DeleteSelectionpanelBySmartboardUuidApiResponse,
      DeleteSelectionpanelBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel/${queryArg.smartboardUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSelectionpanelBySmartboardUuid: build.query<
      GetSelectionpanelBySmartboardUuidApiResponse,
      GetSelectionpanelBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel/${queryArg.smartboardUuid}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchSelectionpanelBySmartboardUuid: build.mutation<
      PatchSelectionpanelBySmartboardUuidApiResponse,
      PatchSelectionpanelBySmartboardUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel/${queryArg.smartboardUuid}`,
        method: "PATCH",
        body: queryArg.updateSelectionPanel,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteSelectionpanelBySmartboardUuidProjects: build.mutation<
      DeleteSelectionpanelBySmartboardUuidProjectsApiResponse,
      DeleteSelectionpanelBySmartboardUuidProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel/${queryArg.smartboardUuid}/projects`,
        method: "DELETE",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postSelectionpanelBySmartboardUuidProjects: build.mutation<
      PostSelectionpanelBySmartboardUuidProjectsApiResponse,
      PostSelectionpanelBySmartboardUuidProjectsApiArg
    >({
      query: (queryArg) => ({
        url: `/selectionpanel/${queryArg.smartboardUuid}/projects`,
        method: "POST",
        body: queryArg.body,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type PostSelectionpanelApiResponse = unknown;
export type PostSelectionpanelApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  selectionpanelSetter: SelectionpanelSetter;
};
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
export type SelectionpanelSetterResponse = {
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
export type SelectionpanelSetter = {
  placeholder?: Placeholder;
  project_uuid?: string;
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
export const {
  usePostSelectionpanelMutation,
  useDeleteSelectionpanelBySmartboardUuidMutation,
  useGetSelectionpanelBySmartboardUuidQuery,
  usePatchSelectionpanelBySmartboardUuidMutation,
  useDeleteSelectionpanelBySmartboardUuidProjectsMutation,
  usePostSelectionpanelBySmartboardUuidProjectsMutation,
} = injectedRtkApi;
