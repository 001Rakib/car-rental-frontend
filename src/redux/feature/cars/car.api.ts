import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam } from "@/types/global";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/cars",
          method: "GET",
          params: params,
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
