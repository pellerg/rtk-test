import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
  }),
  overrideExisting: false,
});
export { injectedRtkApi as mwApi };
export type GetAuthUserStatusCheckByDecryptedEmailApiResponse = unknown;
export type GetAuthUserStatusCheckByDecryptedEmailApiArg = {
  decryptedEmail: string;
};
export type PostCreateUserApiResponse = unknown;
export type PostCreateUserApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization?: string;
  registration: Registration;
};
export type GetStripeUserPageApiResponse = unknown;
export type GetStripeUserPageApiArg = {
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
export type Registration = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  purpose?: string;
  subscribed_to_newsletter?: boolean;
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
  usePostCreateUserMutation,
  useDeleteUserByUserUuidMutation,
  usePatchUserByUserUuidMutation,
} = injectedRtkApi;
