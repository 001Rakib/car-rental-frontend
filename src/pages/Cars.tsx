import CarCard from "@/components/carCards/CarCard";
import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/feature/cars/car.api";
import { Loader2 } from "lucide-react";

type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
};

const Cars = () => {
  const { data, isLoading } = useGetAllCarsQuery(undefined);
  console.log(data);

  if (isLoading) {
    return (
      <div className="h-[100vh] max-w-screen-xl mx-auto text-center my-20">
        <Button className="bg-orange-600" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5 my-20 max-w-screen-xl mx-auto">
      {data?.data?.map((car: TCar) => (
        <CarCard
          key={car._id}
          image={
            "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?cs=srgb&dl=pexels-garvin-st-villier-719266-3972755.jpg&fm=jpg"
          }
          title={car.name}
          description={car.description}
          price={car.pricePerHour}
          _id={car._id}
        />
      ))}
    </div>
  );
};

export default Cars;
