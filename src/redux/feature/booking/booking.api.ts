import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),
    getMyBooking: builder.query({
      query: () => {
        return {
          url: "/bookings/my-bookings",
          method: "GET",
        };
      },
    }),
    getAllBooking: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      providesTags: ["car"],
    }),
  }),
});
export const { useLoginMutation, useGetMyBookingQuery, useGetAllBookingQuery } =
  bookingApi;
