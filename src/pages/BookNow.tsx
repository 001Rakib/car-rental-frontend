import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBookNowMutation } from "@/redux/feature/booking/booking.api";
import { useGetSingleCarQuery } from "@/redux/feature/cars/car.api";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

// // function for time picker
function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const BookNow = () => {
  const { carId } = useParams();
  const { data } = useGetSingleCarQuery(carId);
  const { register, handleSubmit } = useForm();
  const [bookNow] = useBookNowMutation();
  const navigate = useNavigate();

  const handleBooking: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const bookingInfo = {
      carId: carId,
      name: data.name,
      nid: data.nid,
      drivingLicense: data.drivingLicense,
      startTime: data.startTime,
      date: new Date(),
    };
    const res = await bookNow(bookingInfo);
    if (res?.data?.success) {
      toast.success("Car Booked Successfully", { position: "top-center" });
      navigate("/user-dashboard/user-booking");
    }
  };

  function TimePicker() {
    return (
      <div className="flex items-center space-x-2">
        <ClockIcon className="w-5 h-5" />
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="time"
            id="time"
            aria-label="Choose time"
            className="w-full"
            {...register("startTime")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="flex flex-col gap-10 items-center lg:flex lg:flex-row lg:justify-normal lg:items-start lg:gap-0">
        <div className="w-1/2">
          <h1 className="text-orange-500 text-2xl font-bold mb-5">
            Car Details
          </h1>
          <img className="lg:w-1/2" src={data?.data.image} alt="" />
          <h1 className="font-medium mt-3">Name: {data?.data.name}</h1>
          <h1 className="">Category: {data?.data.category}</h1>
          <h1 className="">
            Price Per Hour:{" "}
            <span className="font-medium">${data?.data.pricePerHour}</span>
          </h1>
          <h1 className="">
            Features:{" "}
            {data?.data?.features.map((item: string, idx: number) => (
              <Badge
                className="px-2 mr-1 bg-orange-300"
                variant={"outline"}
                key={idx}
              >
                {" "}
                {item}{" "}
              </Badge>
            ))}
          </h1>
        </div>
        <div>
          <h1 className="text-orange-500 text-2xl font-bold mb-5">
            Booking Details
          </h1>
          <form onSubmit={handleSubmit(handleBooking)}>
            <div>
              <Label>Name:</Label>
              <Input {...register("name")} />
              <Label>NID / Passport Number:</Label>
              <Input {...register("nid")} />
              <Label>Driving License:</Label>
              <Input {...register("drivingLicense")} />
              <Label>Start Time:</Label>
              <TimePicker />
            </div>
            <Button type="submit" className="bg-orange-500 mt-4">
              Confirm Booking
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
