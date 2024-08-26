import { TCar } from "@/pages/Cars";

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
