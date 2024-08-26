import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

type TCardProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

const CarCard = ({ image, title, description, price, _id }: TCardProps) => {
  return (
    <div>
      <Card className="h-96">
        <CardContent className="pt-5">
          <img className="rounded-md h-52 w-full" src={image} alt="" />
        </CardContent>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle className="text-xl"> {title} </CardTitle>
            <CardDescription>
              {" "}
              {description.slice(0, 30)}...{" "}
              <p>
                Price Per Hour:{" "}
                <span className="font-medium text-slate-700">${price}</span>{" "}
              </p>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div>
              <Link to={`/car/${_id}`}>
                <Button className="mt-2 border-orange-500" variant={"outline"}>
                  Details
                </Button>
              </Link>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default CarCard;
