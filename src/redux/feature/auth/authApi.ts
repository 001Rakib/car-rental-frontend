import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    getUser: builder.query({
      query: (email) => {
        return {
          url: `/auth/user/${email}`,
          method: "GET",
        };
      },
    }),
    getAllUser: builder.query({
      query: () => {
        return {
          url: `/auth/user`,
          method: "GET",
        };
      },
    }),
  }),
});
export const {
  useLoginMutation,
  useSignUpMutation,
  useGetUserQuery,
  useGetAllUserQuery,
} = authApi;
