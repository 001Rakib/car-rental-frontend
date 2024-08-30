import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useGetMySingleBookingQuery } from "@/redux/feature/booking/booking.api";
import { usePaymentMutation } from "@/redux/feature/payment/payment.api";
import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { bookingId } = useParams();
  const { register, handleSubmit } = useForm();
  const [payment] = usePaymentMutation();
  const { data: bookingData } = useGetMySingleBookingQuery(bookingId);

  const handlePayment: SubmitErrorHandler<FieldValues> = async (data) => {
    const paymentData = {
      name: data.name || bookingData?.data?.user?.name,
      email: data.email || bookingData?.data?.user?.email,
      totalCost: bookingData?.data?.totalCost,
      bookingId: bookingId,
      carId: bookingData?.data?.carId._id,
      address: data.address || bookingData?.data?.user?.address,
      phone: Number(data.phone) || Number(bookingData?.data?.user?.phone),
    };

    const res = await payment(paymentData).unwrap();
    if (res.success) {
      window.location.href = res.data.payment_url;
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handlePayment)}
        className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Payment Checkout</h2>
        <div className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              {...register("name")}
              defaultValue={bookingData?.data?.user?.name}
            />
            <Label>Email</Label>
            <Input
              {...register("email")}
              defaultValue={bookingData?.data?.user?.email}
            />
            <Label>Address</Label>
            <Input
              {...register("address")}
              defaultValue={bookingData?.data?.user?.address}
            />
            <Label>Phone</Label>
            <Input defaultValue={bookingData?.data?.user?.phone} />
          </div>

          <Separator className="bg-orange-500" orientation="vertical" />

          <h1 className="font-semibold ">Booking Summary</h1>
          <div className="flex justify-around items-center">
            <img
              className="w-20 h-20"
              src={bookingData?.data?.carId.image}
              alt=""
            />
            <p className="font-medium"> {bookingData?.data?.carId.name} </p>
            <p className="font-medium"> ${bookingData?.data?.totalCost} </p>
          </div>

          <Button className="bg-orange-500 " type="submit">
            Payment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
