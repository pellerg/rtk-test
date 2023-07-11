import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getReleasesByPlatformDownload: build.query<
      GetReleasesByPlatformDownloadApiResponse,
      GetReleasesByPlatformDownloadApiArg
    >({
      query: (queryArg) => ({
        url: `/releases/${queryArg.platform}/download`,
        body: queryArg.installerDownload,
        params: { nanoid: queryArg.nanoid },
      }),
    }),
    getReleasesByPlatformLatestVersion: build.query<
      GetReleasesByPlatformLatestVersionApiResponse,
      GetReleasesByPlatformLatestVersionApiArg
    >({
      query: (queryArg) => ({
        url: `/releases/${queryArg.platform}/latestVersion`,
      }),
    }),
    getReleasesByPlatformAndVersionDownload: build.query<
      GetReleasesByPlatformAndVersionDownloadApiResponse,
      GetReleasesByPlatformAndVersionDownloadApiArg
    >({
      query: (queryArg) => ({
        url: `/releases/${queryArg.platform}/${queryArg.version}/download`,
        body: queryArg.installerDownload,
        params: { nanoid: queryArg.nanoid },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type GetReleasesByPlatformDownloadApiResponse =
  /** status 200  */ InstallerDownloadResponse;
export type GetReleasesByPlatformDownloadApiArg = {
  platform: string;
  /** Nanoid for installer. */
  nanoid?: string;
  installerDownload: InstallerDownload;
};
export type GetReleasesByPlatformLatestVersionApiResponse =
  /** status 200  */ LatestVersion;
export type GetReleasesByPlatformLatestVersionApiArg = {
  platform: string;
};
export type GetReleasesByPlatformAndVersionDownloadApiResponse =
  /** status 200  */ InstallerDownloadResponse;
export type GetReleasesByPlatformAndVersionDownloadApiArg = {
  version: string;
  platform: string;
  /** Nanoid for installer. */
  nanoid?: string;
  installerDownload: InstallerDownload;
};
export type InstallerDownloadResponse = {
  expires?: number;
  url?: string;
};
export type InstallerDownload = {};
export type LatestVersion = {
  version?: string;
  versioninfo?: string;
};
export const {
  useGetReleasesByPlatformDownloadQuery,
  useGetReleasesByPlatformLatestVersionQuery,
  useGetReleasesByPlatformAndVersionDownloadQuery,
} = injectedRtkApi;
