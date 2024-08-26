import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyBookingQuery } from "@/redux/feature/booking/booking.api";
import { TBooking } from "@/types/global";
const UserBookings = () => {
  const { data } = useGetMyBookingQuery(undefined);
  console.log(data);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 lg:pl-0 lg:py-0">
        <main>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>My Bookings</CardTitle>
              <CardDescription>Manage your Booking</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="">img</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Price Per Hour
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Total Cost
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Created at
                    </TableHead>
                    <TableHead>
                      <span className="">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data?.map((booking: TBooking) => (
                    <TableRow key={booking._id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product img"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={booking?.carId?.image}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {booking?.carId?.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Draft</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        ${booking?.carId?.pricePerHour}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {" "}
                        {booking?.totalCost
                          ? booking?.totalCost
                          : "Pending"}{" "}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        2023-07-12 10:42 AM
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};
export default UserBookings;
