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
import { useGetUserQuery } from "@/redux/feature/auth/authApi";
import { useAppSelector } from "@/redux/hook";

const UserInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { data } = useGetUserQuery(user?.email);

  return (
    <div>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>
            Edit your information otherwise leave it as it is!
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <label htmlFor="">Name</label>
            <Input defaultValue={data?.data?.name} />
            <label htmlFor="">Email</label>
            <Input defaultValue={data?.data?.email} />
            <label htmlFor="">Password</label>
            <Input type="password" />
            <label htmlFor="">Address</label>
            <Input defaultValue={data?.data?.address} />
            <label htmlFor="">Phone Number</label>
            <Input defaultValue={data?.data?.phone} />
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button className="bg-orange-500" type="submit">
              Update
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UserInfo;
