import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
import { setUser } from "@/redux/feature/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "user@example.com", password: "password123" },
  });
  const [login, { error }] = useLoginMutation();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.token);

    dispatch(setUser({ user: user, token: res.data.token }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
              {error ? (
                <p className="text-red-500 font-xs">{error.data.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <Link
                    to={"/forgot-password"}
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={"/signUp"} className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://car-images.bauersecure.com/wp-images/4738/1752x1168/should_i_buy_an_electric_car.jpg?mode=max&quality=90&scale=down"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </form>
  );
};
export default Login;
