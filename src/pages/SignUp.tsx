import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignUpMutation } from "@/redux/feature/auth/authApi";

const signUpSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Name is required" }),
    password: z.string().min(1, { message: "Name is required" }),
    confirmPassword: z.string({ message: "Passwords does not match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords does not match",
  });

const SignUp = () => {
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });
  const [signup] = useSignUpMutation();
  const handleSignUp: SubmitHandler<FieldValues> = async (data) => {
    const res = await signup(data);
    console.log(res);
    navigate("/login");
  };

  return (
    <div className="h-[100vh] grid justify-center items-center">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Full Name</label>
                  <Input
                    id="first-name"
                    placeholder="Your Full Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-500">
                      Name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p role="alert" className="text-red-500">
                    Password is required
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Confirm Password</label>
                <Input
                  type="password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Confirm Password is required
                  </p>
                )}
                {errors.confirmPassword?.type === "custom" && (
                  <p role="alert" className="text-red-500">
                    Passwords does not match
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    onCheckedChange={() => setCheckbox(!checkbox)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>

              {checkbox === true ? (
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              ) : (
                <Button type="submit" className="w-full" disabled>
                  Create an account
                </Button>
              )}
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={"/login"} className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};
export default SignUp;
