import { Loader2, MoreHorizontal } from "lucide-react";

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
import { useAppSelector } from "@/redux/hook";
import { useGetAllUserQuery } from "@/redux/feature/auth/authApi";
const ManageUsers = () => {
  let data;
  const { user } = useAppSelector((state) => state.auth);

  const { data: userData, isLoading } = useGetAllUserQuery(undefined);
  console.log(userData);

  if (user?.role === "admin") {
    data = userData;
  }
  console.log(data);

  if (isLoading) {
    return (
      <div className="h-[100vh] max-w-screen-xl mx-auto text-center my-20">
        <Button className="bg-orange-600" disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 lg:pl-0 lg:py-0">
        <main>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Manage All Users</CardTitle>
              <CardDescription>Manage Users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Email
                    </TableHead>

                    <TableHead>
                      <span className="">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.data?.map((user: any) => (
                    <TableRow key={user._id}>
                      <TableCell className="font-medium">
                        {user?.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline"> {user?.role} </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {user?.email}
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
                            <DropdownMenuItem>Update</DropdownMenuItem>
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
export default ManageUsers;
