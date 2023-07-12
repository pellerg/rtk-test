import { mwApi as api } from "../mwApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as authQueries };
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
export const {
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
} = injectedRtkApi;
