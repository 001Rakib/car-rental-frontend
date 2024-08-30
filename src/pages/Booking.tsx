import CarCard from "@/components/carCards/CarCard";
import { Input } from "@/components/ui/input";
import { useGetAllCarsQuery } from "@/redux/feature/cars/car.api";
import { Search } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { TCar } from "./Cars";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Booking = () => {
  const [searchCar, setSearchCar] = useState("");
  const { register, handleSubmit } = useForm();

  const handleSearch = (data: FieldValues) => {
    const search = data.searchCar;

    setSearchCar(search);
  };
  const { data } = useGetAllCarsQuery({ searchCar });

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto my-20">
        <h1 className="text-center font-bold text-3xl text-slate-800 my-20 bg-orange-400 py-5 rounded-md">
          Book Your Desire Car
        </h1>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <form onChange={handleSubmit(handleSearch)}>
            <Input
              type="text"
              {...register("searchCar")}
              placeholder="Search name,category or feature"
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </form>
        </div>

        {searchCar ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {data?.data.map((car: TCar) => (
              <CarCard
                key={car._id}
                image={car.image}
                _id={car._id}
                description={car.description}
                price={car.pricePerHour}
                title={car.name}
              ></CarCard>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-center font-semibold text-4xl text-orange-500 text-wrap my-10">
              Search by car name or category or features or other info to get
              cars
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Booking;
