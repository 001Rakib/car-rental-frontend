import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReturnCarMutation } from "@/redux/feature/cars/car.api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

const ReturnCar = ({ bookingId }: { bookingId: string }) => {
  const { register, handleSubmit } = useForm();
  const [returnCar] = useReturnCarMutation();
  const navigate = useNavigate();
  const handleReturnCar: SubmitHandler<FieldValues> = async (data) => {
    const res = await returnCar(data);

    if (res?.data.success) {
      toast.success("Car returned Successfully ", { position: "top-center" });
      navigate("/admin-dashboard/admin-booking");
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
            {...register("endTime")}
          />
        </div>
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-orange-500">
          Return Car
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleReturnCar)}>
          <DialogHeader>
            <DialogTitle className="text-center">Return Car</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Booking Id
              </Label>
              <Input
                {...register("bookingId")}
                type="text"
                defaultValue={bookingId}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                End Time
              </Label>
              <TimePicker />
            </div>
          </div>

          <DialogFooter>
            <Button className="bg-orange-500" type="submit">
              Return
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReturnCar;
