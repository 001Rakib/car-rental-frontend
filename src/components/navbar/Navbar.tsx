import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout } from "@/redux/feature/auth/authSlice";
import { CircleUser } from "lucide-react";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="bg-orange-500 py-4 text-white">
      {/* navbar for large and medium device */}
      <div className="hidden  md:flex justify-between max-w-screen-xl mx-auto items-center font-inter px-4">
        <NavLink to={"/"}>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-car"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
            </svg>
            <h1>Ride Flex</h1>
          </div>
        </NavLink>
        <div className="flex gap-8 font-inter">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-orange-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-orange-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/cars"}
          >
            Cars
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-orange-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/user-dashboard/user-booking"}
          >
            Booking
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-orange-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/about-us"}
          >
            About Us
          </NavLink>
        </div>
        <div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to={"/user-dashboard/user-info"}>
                  {" "}
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleLogout()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink to={"/login"}>
              <Button className="bg-orange-200 text-black">Login</Button>
            </NavLink>
          )}
        </div>
      </div>
      {/* navbar for mobile devices */}
      <div className="flex justify-between px-4 items-center md:hidden">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-transparent p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuSeparator />
              <NavLink to={"/"}>
                <DropdownMenuCheckboxItem>Home</DropdownMenuCheckboxItem>
              </NavLink>
              <NavLink to={"/cars"}>
                <DropdownMenuCheckboxItem>Cars</DropdownMenuCheckboxItem>
              </NavLink>
              <NavLink to={"/user-dashboard/user-booking"}>
                <DropdownMenuCheckboxItem>Booking</DropdownMenuCheckboxItem>
              </NavLink>
              <NavLink to={"/contact"}>
                <DropdownMenuCheckboxItem>Contact</DropdownMenuCheckboxItem>
              </NavLink>
              <NavLink to={"/about-us"}>
                <DropdownMenuCheckboxItem>About Us</DropdownMenuCheckboxItem>
              </NavLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <NavLink to={"/"}>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-car"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
              </svg>
              <h1>Ride Flex</h1>
            </div>
          </NavLink>
        </div>
        <div>
          <div>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={"/user-dashboard/user-info"}>
                    {" "}
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleLogout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink to={"/login"}>
                <Button className="bg-orange-200 text-black">Login</Button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
