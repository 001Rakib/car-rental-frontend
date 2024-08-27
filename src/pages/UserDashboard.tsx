import Navbar from "@/components/navbar/Navbar";
import { useAppSelector } from "@/redux/hook";
import { NavLink, Outlet } from "react-router-dom";
const UserDashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold capitalize">
            {user?.role} Dashboard
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <NavLink
              to={`/${user?.role}-dashboard/${user?.role}-info`}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold capitalize"
                  : "capitalize"
              }
            >
              {user?.role} Info
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-semibold" : ""
              }
              to={`/${user?.role}-dashboard/${user?.role}-booking`}
            >
              {user?.role === "admin" ? "Manage Bookings" : "My Bookings"}
            </NavLink>

            {user?.role === "admin" ? (
              <div className="flex flex-col gap-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-semibold" : ""
                  }
                  to={`/${user?.role}-dashboard/manage-cars`}
                >
                  Manage Cars
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-semibold" : ""
                  }
                  to={`/${user?.role}-dashboard/manage-users`}
                >
                  Manage Users
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </nav>
          <div className="grid gap-6">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
