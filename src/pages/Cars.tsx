import CarCard from "@/components/carCards/CarCard";
import { Button } from "@/components/ui/button";
import { useGetAllCarsQuery } from "@/redux/feature/cars/car.api";
import { Loader2 } from "lucide-react";

export type TCar = {
  _id: string;
  name: string;
  description: string;
  color: string;
  image: string;
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
    <div className="my-20 max-w-screen-xl mx-auto">
      <h2 className="scroll-m-20 text-center text-orange-500 my-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        All Available Cars
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {data?.data?.map((car: TCar) => (
          <CarCard
            key={car._id}
            image={car.image}
            title={car.name}
            description={car.description}
            price={car.pricePerHour}
            _id={car._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
