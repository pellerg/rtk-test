import { mwApi as api } from "../mwApi";

const mwQueries = api.injectEndpoints({
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
    getAnalytic: build.query<GetAnalyticApiResponse, GetAnalyticApiArg>({
      query: (queryArg) => ({
        url: `/analytic`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postAuthLogin: build.mutation<
      PostAuthLoginApiResponse,
      PostAuthLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg.login,
      }),
    }),
    deleteAuthLogout: build.mutation<
      DeleteAuthLogoutApiResponse,
      DeleteAuthLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout`, method: "DELETE" }),
    }),
    patchAuthPasswordChange: build.mutation<
      PatchAuthPasswordChangeApiResponse,
      PatchAuthPasswordChangeApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password_change`,
        method: "PATCH",
        body: queryArg.passwordChange,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postAuthPasswordChangeConfirmByToken: build.mutation<
      PostAuthPasswordChangeConfirmByTokenApiResponse,
      PostAuthPasswordChangeConfirmByTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password_change_confirm/${queryArg.token}`,
        method: "POST",
        body: queryArg.passwordChangeWithToken,
      }),
    }),
    postAuthPasswordChangeEmail: build.mutation<
      PostAuthPasswordChangeEmailApiResponse,
      PostAuthPasswordChangeEmailApiArg
    >({
      query: () => ({ url: `/auth/password_change_email`, method: "POST" }),
    }),
    deleteAuthProfile: build.mutation<
      DeleteAuthProfileApiResponse,
      DeleteAuthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/profile`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAuthProfile: build.query<
      GetAuthProfileApiResponse,
      GetAuthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/profile`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchAuthProfile: build.mutation<
      PatchAuthProfileApiResponse,
      PatchAuthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/profile`,
        method: "PATCH",
        body: queryArg.updateUserDetails,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAuthPublicKey: build.query<
      GetAuthPublicKeyApiResponse,
      GetAuthPublicKeyApiArg
    >({
      query: () => ({ url: `/auth/public_key` }),
    }),
    getAuthRefresh: build.query<
      GetAuthRefreshApiResponse,
      GetAuthRefreshApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/refresh`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postAuthRegistration: build.mutation<
      PostAuthRegistrationApiResponse,
      PostAuthRegistrationApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/registration`,
        method: "POST",
        body: queryArg.registration,
      }),
    }),
    postAuthRegistrationConfirmByToken: build.mutation<
      PostAuthRegistrationConfirmByTokenApiResponse,
      PostAuthRegistrationConfirmByTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/registration_confirm/${queryArg.token}`,
        method: "POST",
      }),
    }),
    postAuthResendConfirmationEmail: build.mutation<
      PostAuthResendConfirmationEmailApiResponse,
      PostAuthResendConfirmationEmailApiArg
    >({
      query: () => ({ url: `/auth/resend_confirmation_email`, method: "POST" }),
    }),
    postAuthSendInvitation: build.mutation<
      PostAuthSendInvitationApiResponse,
      PostAuthSendInvitationApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/send_invitation`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAuthUserStatusCheckByDecryptedEmail: build.query<
      GetAuthUserStatusCheckByDecryptedEmailApiResponse,
      GetAuthUserStatusCheckByDecryptedEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/user_status_check/${queryArg.decryptedEmail}`,
      }),
    }),
    deleteAuthByProvider: build.mutation<
      DeleteAuthByProviderApiResponse,
      DeleteAuthByProviderApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/${queryArg.provider}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getAuthByProvider: build.query<
      GetAuthByProviderApiResponse,
      GetAuthByProviderApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/${queryArg.provider}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteCancelSubscription: build.mutation<
      DeleteCancelSubscriptionApiResponse,
      DeleteCancelSubscriptionApiArg
    >({
      query: (queryArg) => ({
        url: `/cancel_subscription`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postCreateUser: build.mutation<
      PostCreateUserApiResponse,
      PostCreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/create_user`,
        method: "POST",
        body: queryArg.registration,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getDatabaseRetrieve: build.query<
      GetDatabaseRetrieveApiResponse,
      GetDatabaseRetrieveApiArg
    >({
      query: (queryArg) => ({
        url: `/database_retrieve`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getErrorMessages: build.query<
      GetErrorMessagesApiResponse,
      GetErrorMessagesApiArg
    >({
      query: () => ({ url: `/error_messages` }),
    }),
    getHealth: build.query<GetHealthApiResponse, GetHealthApiArg>({
      query: () => ({ url: `/health` }),
    }),
    getOtfAssetByOtfAssetUuid: build.query<
      GetOtfAssetByOtfAssetUuidApiResponse,
      GetOtfAssetByOtfAssetUuidApiArg
    >({
      query: (queryArg) => ({ url: `/otf_asset/${queryArg.otfAssetUuid}` }),
    }),
    getOtfAssets: build.query<GetOtfAssetsApiResponse, GetOtfAssetsApiArg>({
      query: (queryArg) => ({
        url: `/otf_assets`,
        headers: { Authorization: queryArg.authorization },
        params: {
          uuid: queryArg.uuid,
          name: queryArg.name,
          space_affinity: queryArg.spaceAffinity,
          description: queryArg.description,
        },
      }),
    }),
    postPayment: build.mutation<PostPaymentApiResponse, PostPaymentApiArg>({
      query: (queryArg) => ({
        url: `/payment`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getProductByProductId: build.query<
      GetProductByProductIdApiResponse,
      GetProductByProductIdApiArg
    >({
      query: (queryArg) => ({
        url: `/product/${queryArg.productId}`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getProducts: build.query<GetProductsApiResponse, GetProductsApiArg>({
      query: (queryArg) => ({
        url: `/products`,
        params: { type: queryArg["type"] },
      }),
    }),
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
      invalidatesTags:["SandboxSpaces", "EducationSpaces"]
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
      invalidatesTags:["SandboxSpaces", "EducationSpaces"]
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
    providesTags:["SandboxSpaces"]
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
  providesTags:["EducationSpaces"]
}),
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
    getStripeUserPage: build.query<
      GetStripeUserPageApiResponse,
      GetStripeUserPageApiArg
    >({
      query: (queryArg) => ({
        url: `/stripe_user_page`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getSubscriptionCheck: build.query<
      GetSubscriptionCheckApiResponse,
      GetSubscriptionCheckApiArg
    >({
      query: (queryArg) => ({
        url: `/subscription_check`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchUpdateSubscription: build.mutation<
      PatchUpdateSubscriptionApiResponse,
      PatchUpdateSubscriptionApiArg
    >({
      query: (queryArg) => ({
        url: `/update_subscription`,
        method: "PATCH",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    deleteUserByUserUuid: build.mutation<
      DeleteUserByUserUuidApiResponse,
      DeleteUserByUserUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg.userUuid}`,
        method: "DELETE",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    patchUserByUserUuid: build.mutation<
      PatchUserByUserUuidApiResponse,
      PatchUserByUserUuidApiArg
    >({
      query: (queryArg) => ({
        url: `/user/${queryArg.userUuid}`,
        method: "PATCH",
        body: queryArg.userUpdate,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getUserPurchase: build.query<
      GetUserPurchaseApiResponse,
      GetUserPurchaseApiArg
    >({
      query: (queryArg) => ({
        url: `/user_purchase`,
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    postWebhook: build.mutation<PostWebhookApiResponse, PostWebhookApiArg>({
      query: () => ({ url: `/webhook`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
});
export { mwQueries};
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
export type GetAnalyticApiResponse = unknown;
export type GetAnalyticApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PostAuthLoginApiResponse = /** status 200  */ LoginReponse;
export type PostAuthLoginApiArg = {
  login: Login;
};
export type DeleteAuthLogoutApiResponse = unknown;
export type DeleteAuthLogoutApiArg = void;
export type PatchAuthPasswordChangeApiResponse = unknown;
export type PatchAuthPasswordChangeApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  passwordChange: PasswordChange;
};
export type PostAuthPasswordChangeConfirmByTokenApiResponse =
  /** status 200  */ LoginReponse;
export type PostAuthPasswordChangeConfirmByTokenApiArg = {
  token: string;
  passwordChangeWithToken: PasswordChangeWithToken;
};
export type PostAuthPasswordChangeEmailApiResponse = unknown;
export type PostAuthPasswordChangeEmailApiArg = void;
export type DeleteAuthProfileApiResponse = unknown;
export type DeleteAuthProfileApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetAuthProfileApiResponse = /** status 200  */ UserDetails;
export type GetAuthProfileApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PatchAuthProfileApiResponse = /** status 200  */ UserDetails;
export type PatchAuthProfileApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
  updateUserDetails: UpdateUserDetails;
};
export type GetAuthPublicKeyApiResponse = /** status 200  */ PublicKey;
export type GetAuthPublicKeyApiArg = void;
export type GetAuthRefreshApiResponse = /** status 200  */ AccessToken;
export type GetAuthRefreshApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PostAuthRegistrationApiResponse = unknown;
export type PostAuthRegistrationApiArg = {
  registration: Registration;
};
export type PostAuthRegistrationConfirmByTokenApiResponse = unknown;
export type PostAuthRegistrationConfirmByTokenApiArg = {
  token: string;
};
export type PostAuthResendConfirmationEmailApiResponse = unknown;
export type PostAuthResendConfirmationEmailApiArg = void;
export type PostAuthSendInvitationApiResponse = unknown;
export type PostAuthSendInvitationApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetAuthUserStatusCheckByDecryptedEmailApiResponse = unknown;
export type GetAuthUserStatusCheckByDecryptedEmailApiArg = {
  decryptedEmail: string;
};
export type DeleteAuthByProviderApiResponse = unknown;
export type DeleteAuthByProviderApiArg = {
  provider: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetAuthByProviderApiResponse = /** status 200  */ Oauth2Response;
export type GetAuthByProviderApiArg = {
  provider: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type DeleteCancelSubscriptionApiResponse = unknown;
export type DeleteCancelSubscriptionApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PostCreateUserApiResponse = unknown;
export type PostCreateUserApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  registration: Registration;
};
export type GetDatabaseRetrieveApiResponse = unknown;
export type GetDatabaseRetrieveApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type GetErrorMessagesApiResponse = unknown;
export type GetErrorMessagesApiArg = void;
export type GetHealthApiResponse = unknown;
export type GetHealthApiArg = void;
export type GetOtfAssetByOtfAssetUuidApiResponse = /** status 200  */ OtfAsset;
export type GetOtfAssetByOtfAssetUuidApiArg = {
  otfAssetUuid: string;
};
export type GetOtfAssetsApiResponse = /** status 200  */ OtfAsset[];
export type GetOtfAssetsApiArg = {
  uuid?: any;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  name?: string;
  spaceAffinity?: any;
  description?: string;
};
export type PostPaymentApiResponse = unknown;
export type PostPaymentApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetProductByProductIdApiResponse = unknown;
export type GetProductByProductIdApiArg = {
  productId: string;
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetProductsApiResponse = unknown;
export type GetProductsApiArg = {
  type?: string;
};
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
export type PatchSpaceBySpaceUuidApiResponse = /** status 200  */
  | Space
  | /** status 207  */ Space;
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
export type GetStripeUserPageApiResponse = unknown;
export type GetStripeUserPageApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type GetSubscriptionCheckApiResponse = unknown;
export type GetSubscriptionCheckApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PatchUpdateSubscriptionApiResponse = unknown;
export type PatchUpdateSubscriptionApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type DeleteUserByUserUuidApiResponse = unknown;
export type DeleteUserByUserUuidApiArg = {
  userUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
};
export type PatchUserByUserUuidApiResponse = unknown;
export type PatchUserByUserUuidApiArg = {
  userUuid: string;
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  userUpdate: UserUpdate;
};
export type GetUserPurchaseApiResponse = unknown;
export type GetUserPurchaseApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PostWebhookApiResponse = unknown;
export type PostWebhookApiArg = void;
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
export type LoginReponse = {
  access_token?: string;
  expires?: number;
  refresh_token?: string;
};
export type Login = {
  email: string;
  password: string;
};
export type PasswordChange = {
  current_password: string;
  new_password: string;
};
export type PasswordChangeWithToken = {
  new_password: string;
};
export type Provider = {
  provider?: string;
  sid?: string;
};
export type SpaceDetailsOnUser = {
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
export type ScheduledSubscriptionItems = {
  price_id?: string;
  product_id?: string;
  quantity?: number;
};
export type UserScheduledSubscriptionDetails = {
  id?: string;
  period_end?: string;
  period_start?: string;
  products?: ScheduledSubscriptionItems[];
};
export type NestedProduct = {
  billing_period?: string;
  price_id?: string;
  product_id?: string;
  quantity?: number;
};
export type UserSubscriptionDetails = {
  cancel_at_period_end?: boolean;
  collection_method?: string;
  id?: string;
  period_end?: string;
  period_start?: string;
  products?: NestedProduct[];
  status?: string;
};
export type UserDetails = {
  company_name?: string;
  credit_balance?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  max_space?: number;
  max_storage?: number;
  max_user?: number;
  oauth2_accounts?: Provider[];
  owned_spaces?: SpaceDetailsOnUser[];
  scheduled_subscription?: UserScheduledSubscriptionDetails;
  subscribed_to_newsletter?: boolean;
  subscription?: UserSubscriptionDetails;
  toc_accepted?: boolean;
  used_space?: number;
  used_storage?: number;
  used_user?: number;
  uuid?: string;
};
export type UpdateUserDetails = {
  company_name?: string | null;
  first_name?: string;
  last_name?: string;
  purpose?: string;
  subscribed_to_newsletter?: boolean;
  toc_accepted?: boolean;
};
export type PublicKey = {
  base64?: string;
  pubKey?: string;
};
export type AccessToken = {
  access_token?: string;
  expires?: number;
};
export type Registration = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  purpose?: string;
  subscribed_to_newsletter?: boolean;
};
export type Oauth2Response = {
  url?: string;
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
export type InstallerDownloadResponse = {
  expires?: number;
  url?: string;
};
export type InstallerDownload = {};
export type LatestVersion = {
  version?: string;
  versioninfo?: string;
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
export type SmartboardSetterResponse = {
  uuid?: string;
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
export type InstallerStain = {
  created_at?: string;
  expire_at?: string;
  nanoid: string;
};
export type InstallerStainResponse = {
  space_uuid?: string;
};
export type UpdateStory = {
  name?: string;
  story?: StoryCoordinate[];
};
export type User = {
  _stripe_account?: string | null;
  company_name?: string | null;
  created_at?: string;
  email: string;
  first_name: string;
  id?: number;
  last_name: string;
  latest_entry_date?: string | null;
  password_date?: string;
  password_hash?: string | null;
  password_reset_token?: string | null;
  payment_error_date?: string | null;
  purpose?: string | null;
  quota_extension?: any | null;
  status?: "active" | "confirmation email sent" | "registration confirmed";
  toc_version_accepted?: number;
  updated_at?: string | null;
  uuid: string;
};
export type UserUpdate = {
  email?: string;
  first_name?: string;
  is_active?: boolean;
  last_name?: string;
  password?: string;
};
export const {
  usePostAdminOtfAssetMutation,
  useDeleteAdminOtfAssetByOtfAssetUuidMutation,
  useGetAdminOtfAssetByOtfAssetUuidQuery,
  usePatchAdminOtfAssetByOtfAssetUuidMutation,
  usePostAdminOtfAssetByOtfAssetUuidMutation,
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
  useGetAnalyticQuery,
  usePostAuthLoginMutation,
  useDeleteAuthLogoutMutation,
  usePatchAuthPasswordChangeMutation,
  usePostAuthPasswordChangeConfirmByTokenMutation,
  usePostAuthPasswordChangeEmailMutation,
  useDeleteAuthProfileMutation,
  useGetAuthProfileQuery,
  usePatchAuthProfileMutation,
  useGetAuthPublicKeyQuery,
  useGetAuthRefreshQuery,
  usePostAuthRegistrationMutation,
  usePostAuthRegistrationConfirmByTokenMutation,
  usePostAuthResendConfirmationEmailMutation,
  usePostAuthSendInvitationMutation,
  useGetAuthUserStatusCheckByDecryptedEmailQuery,
  useDeleteAuthByProviderMutation,
  useGetAuthByProviderQuery,
  useDeleteCancelSubscriptionMutation,
  usePostCreateUserMutation,
  useGetDatabaseRetrieveQuery,
  useGetErrorMessagesQuery,
  useGetHealthQuery,
  useGetOtfAssetByOtfAssetUuidQuery,
  useGetOtfAssetsQuery,
  usePostPaymentMutation,
  useGetProductByProductIdQuery,
  useGetProductsQuery,
  usePostProjectMutation,
  useDeleteProjectByProjectUuidMutation,
  useGetProjectByProjectUuidQuery,
  usePostProjectByProjectUuidCloneMutation,
  useDeleteProjectByProjectUuidShareMutation,
  usePatchProjectByProjectUuidShareMutation,
  usePostProjectByProjectUuidShareMutation,
  useGetProjectsSearchQuery,
  useGetReleasesByPlatformDownloadQuery,
  useGetReleasesByPlatformLatestVersionQuery,
  useGetReleasesByPlatformAndVersionDownloadQuery,
  usePostSelectionpanelMutation,
  useDeleteSelectionpanelBySmartboardUuidMutation,
  useGetSelectionpanelBySmartboardUuidQuery,
  usePatchSelectionpanelBySmartboardUuidMutation,
  useDeleteSelectionpanelBySmartboardUuidProjectsMutation,
  usePostSelectionpanelBySmartboardUuidProjectsMutation,
  usePostSmartboardMutation,
  useDeleteSmartboardBySmartboardUuidMutation,
  useGetSmartboardBySmartboardUuidQuery,
  usePatchSmartboardBySmartboardUuidMutation,
  usePostSmartboardBySmartboardUuidCloneMutation,
  usePatchSmartboardBySmartboardUuidMoveMutation,
  usePatchSmartboardBySmartboardUuidPlaceholderMutation,
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
  usePostStainedInstallerMutation,
  useDeleteStainedInstallerByNanoidMutation,
  useGetStainedInstallerByNanoidQuery,
  useDeleteStoryByStoryUuidMutation,
  usePatchStoryByStoryUuidMutation,
  useGetStripeUserPageQuery,
  useGetSubscriptionCheckQuery,
  usePatchUpdateSubscriptionMutation,
  useDeleteUserByUserUuidMutation,
  usePatchUserByUserUuidMutation,
  useGetUserPurchaseQuery,
  usePostWebhookMutation,
  useGetSandboxSpacesQuery,
  useGetEducationSpacesQuery
} = mwQueries;
