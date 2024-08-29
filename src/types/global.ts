import { TCar } from "@/pages/Cars";
import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
export type TBooking = {
  _id: string;
  date: string;
  user: object;
  carId: TCar;
  startTime: string;
  endTime: string;
  totalCost: number;
};
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};
export type TResponse<T> = {
  data?: T;
  error?: TError;
  success: boolean;
  message: string;
};
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
