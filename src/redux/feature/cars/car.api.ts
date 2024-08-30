import { baseApi } from "@/redux/api/baseApi";
type TQueryProps = { searchCar: string };
const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (query?: TQueryProps) => {
        console.log(query);
        if (query) {
          //sorting by price and searching
          if (query) {
            return {
              method: "GET",
              url: `/cars?searchCar=${query.searchCar}`,
            };
          }
        }
        return {
          method: "GET",
          url: `/cars`,
        };
      },
      providesTags: ["car"],
    }),
    getSingleCar: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "GET",
      }),
      providesTags: ["car"],
    }),
    returnCar: builder.mutation({
      query: (data) => ({
        url: "/cars/return",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["car"],
    }),
    addCar: builder.mutation({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["car"],
    }),
    updateCar: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/cars/${data.carId}`,
          method: "PUT",
          body: data.updateCarData,
        };
      },
      invalidatesTags: ["car"],
    }),
    deleteCar: builder.mutation({
      query: (carId) => {
        return {
          url: `/cars/${carId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["car"],
    }),
  }),
});
export const {
  useGetAllCarsQuery,
  useGetSingleCarQuery,
  useReturnCarMutation,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
