import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    deleteStoryByStoryUuid: build.mutation<
      DeleteStoryByStoryUuidApiResponse,
      DeleteStoryByStoryUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/story/${queryArg.storyUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchStoryByStoryUuid: build.mutation<
      PatchStoryByStoryUuidApiResponse,
      PatchStoryByStoryUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/story/${queryArg.storyUuid}`,
        method: "PATCH",
        body: queryArg.updateStory,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
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
export type DeleteStoryByStoryUuidApiResponse = unknown;
export type DeleteStoryByStoryUuidApiArg = {
  storyUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PatchStoryByStoryUuidApiResponse = /** status 200  */ Story;
export type PatchStoryByStoryUuidApiArg = {
  storyUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  updateStory: UpdateStory;
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
export type UpdateStory = {
  name?: string;
  story?: StoryCoordinate[];
};
export const {
  useGetSpaceBySpaceUuidStoryQuery,
  usePostSpaceBySpaceUuidStoryMutation,
  useDeleteStoryByStoryUuidMutation,
  usePatchStoryByStoryUuidMutation,
} = injectedRtkApi;
