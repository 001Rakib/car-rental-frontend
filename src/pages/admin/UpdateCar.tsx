import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "@/redux/feature/cars/car.api";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=d8c45604255f9ba9f58b7abac6165496`;

const UpdateCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const { carId } = useParams();
  const { data: carData } = useGetSingleCarQuery(carId);
  const [updateCar] = useUpdateCarMutation();
  const [photoUrl, setPhotoUrl] = useState("");

  const handleUpdateCar: SubmitHandler<FieldValues> = async (data) => {
    //upload image to imgbb
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageHostingApi, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => setPhotoUrl(data.url));

    //save car data to mongoDB
    const updateCarData = {
      name: data.name || carData?.data.name,
      description: data.description || carData?.data?.color,
      color: data.color || carData?.data?.color,
      image: photoUrl || carData?.data?.image,
      features: [data.features],
      category: data.category || carData?.data?.category,
      pricePerHour:
        Number(data.pricePerHour) || Number(carData?.data?.pricePerHour),
    };

    const carInfo = {
      carId: carId,
      updateCarData: updateCarData,
    };

    const result = await updateCar(carInfo);

    if (result?.data?.success) {
      toast.success("Car Updated Successfully", { position: "top-center" });
      reset();
    }
  };

  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Update</CardTitle>
          <CardDescription>
            Edit car information otherwise leave it as it is!
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleUpdateCar)}>
          <CardContent>
            <Label htmlFor="">Name</Label>
            <Input {...register("name")} defaultValue={carData?.data.name} />
            <Label htmlFor="">Description</Label>
            <Input
              {...register("description")}
              defaultValue={carData?.data?.description}
            />
            <Label htmlFor="">Color</Label>
            <Input {...register("color")} defaultValue={carData?.data?.color} />
            <Label htmlFor="">Features</Label>
            <Input
              {...register("features")}
              defaultValue={carData?.data?.features}
            />
            <Label htmlFor="">Category</Label>
            <Input
              {...register("category")}
              defaultValue={carData?.data?.category}
            />
            <Label htmlFor="">Price Per Hour</Label>
            <Input
              {...register("pricePerHour")}
              type="number"
              defaultValue={carData?.data?.pricePerHour}
            />
            <Label htmlFor="picture">Image</Label>
            <Input
              {...register("image")}
              id="picture"
              type="file"
              accept="image"
              defaultValue={carData?.data?.image}
            />
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button className="bg-orange-500" type="submit">
              Update Car
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UpdateCar;
