import { TCar } from "@/pages/Cars";
import { useGetAllCarsQuery } from "@/redux/feature/cars/car.api";
import CarCard from "../carCards/CarCard";

const FeaturedCars = () => {
  const { data } = useGetAllCarsQuery(undefined);

  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl text-orange-600 leading-tight font-bold mb-4 text-center">
          Featured Cars
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
          {data?.data?.slice(0, 3).map((car: TCar) => (
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
    </div>
  );
};

export default FeaturedCars;
