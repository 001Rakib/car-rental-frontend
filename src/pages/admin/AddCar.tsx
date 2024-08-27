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
import { useAddCarMutation } from "@/redux/feature/cars/car.api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const imageHostingApi = `https://api.imgbb.com/1/upload?key=d8c45604255f9ba9f58b7abac6165496`;

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addCar] = useAddCarMutation();

  const handleAddCar: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    //upload image to imgbb
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const res = await fetch(imageHostingApi, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    //save car data to mongoDB
    const carData = {
      name: data.name,
      description: data.description,
      color: data.color,
      image: res.data.url,
      features: [data.features],
      category: data.category,
      pricePerHour: Number(data.pricePerHour),
    };

    const result = await addCar(carData);
    if (result.data.success) {
      toast.success("Car Added Successfully", { position: "top-center" });
      reset();
    }
  };

  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>
            Edit your information otherwise leave it as it is!
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleAddCar)}>
          <CardContent>
            <Label htmlFor="">Name</Label>
            <Input {...register("name")} />
            <Label htmlFor="">Description</Label>
            <Input {...register("description")} />
            <Label htmlFor="">Color</Label>
            <Input {...register("color")} />
            <Label htmlFor="">Features</Label>
            <Input {...register("features")} />
            <Label htmlFor="">Category</Label>
            <Input {...register("category")} />
            <Label htmlFor="">Price Per Hour</Label>
            <Input {...register("pricePerHour")} type="number" />
            <Label htmlFor="picture">Image</Label>
            <Input
              {...register("image")}
              id="picture"
              type="file"
              accept="image"
            />
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button className="bg-orange-500" type="submit">
              Add Car
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddCar;
