import ImageMagnifier from "@/components/imageMagnifier/ImageMagnifier";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetSingleCarQuery } from "@/redux/feature/cars/car.api";
import { SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarQuery(id);
  console.log(data);

  const handleAddToCart: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-xl mx-auto md:mt-16 p-4 md:p-0">
      <div className="flex flex-col  items-center md:flex-row gap-5 md:items-start">
        <div className="md:w-1/2">
          <ImageMagnifier image={data?.data?.image}></ImageMagnifier>
        </div>
        <div>
          <h1 className="text-4xl font-semibold font-inter">
            {data?.data?.name}{" "}
          </h1>
          <div className="flex items-center font-inter gap-2 text-slate-500 mt-2">
            {/* <p> {data?.data?.ratings}</p> */}
          </div>
          <div className="font-inter  text-slate-500 text-wrap mt-4">
            <p> {data?.data?.description} </p>
            <p className="mt-2">
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
              ))}{" "}
            </p>
            <p className="mt-2">
              Status:{" "}
              <Badge
                style={
                  data?.data?.status === "available"
                    ? { backgroundColor: "#86efac" }
                    : { backgroundColor: "#fb7185" }
                }
                variant={"outline"}
              >
                {data?.data?.status}
              </Badge>
            </p>
            <p className="mt-2 font-medium text-slate-700">
              Price Per Hour: ${data?.data?.pricePerHour}
            </p>
          </div>
          <div className="mt-4">
            <Button
              onClick={() => handleAddToCart(data?.data)}
              className="bg-orange-600"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
