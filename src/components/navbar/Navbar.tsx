import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-blue-500 py-4 text-white">
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
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/products"}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/product-management"}
          >
            Manage Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-200 text-black px-2 py-1 rounded-lg" : ""
            }
            to={"/about-us"}
          >
            About Us
          </NavLink>
        </div>
        <NavLink to={"/login"}>
          <Button className="bg-blue-700">Login</Button>
        </NavLink>
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
              <NavLink to={"/products"}>
                <DropdownMenuCheckboxItem>Products</DropdownMenuCheckboxItem>
              </NavLink>
              <NavLink to={"/product-management"}>
                <DropdownMenuCheckboxItem>
                  Manage Products
                </DropdownMenuCheckboxItem>
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
          <NavLink to={"/login"}>
            <Button className="bg-blue-700">Login</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
