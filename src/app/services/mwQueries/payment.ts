import { mwApi2 as api } from "../mwApi2";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
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
    postPayment: build.mutation<PostPaymentApiResponse, PostPaymentApiArg>({
      query: (queryArg) => ({
        url: `/payment`,
        method: "POST",
        headers: { Authorization: queryArg.authorization },
      }),
    }),
    getProducts: build.query<GetProductsApiResponse, GetProductsApiArg>({
      query: (queryArg) => ({
        url: `/products`,
        params: { type: queryArg["type"] },
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
export { injectedRtkApi as mwApi };
export type DeleteCancelSubscriptionApiResponse = unknown;
export type DeleteCancelSubscriptionApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
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
export type GetUserPurchaseApiResponse = unknown;
export type GetUserPurchaseApiArg = {
  /** Authorization HTTP header with JWT access token. */
  authorization: string;
};
export type PostWebhookApiResponse = unknown;
export type PostWebhookApiArg = void;
export const {
  useDeleteCancelSubscriptionMutation,
  usePostPaymentMutation,
  useGetProductsQuery,
  useGetStripeUserPageQuery,
  useGetSubscriptionCheckQuery,
  usePatchUpdateSubscriptionMutation,
  useGetUserPurchaseQuery,
  usePostWebhookMutation,
} = injectedRtkApi;
