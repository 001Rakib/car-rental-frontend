import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

const Hero = () => {
  const [date, setDate] = useState<Date>();
  return (
    <section className="w-full py-10 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Find Your Perfect Ride, Anytime, Anywhere
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl">
                Whether it's a weekend getaway or a business trip, we've got the
                perfect car for every journey. Book now and hit the road!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="">
                <div className="flex gap-5">
                  <Input
                    type="text"
                    placeholder="Enter your destination"
                    className=""
                  />
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <Link to={"/cars"}>
                  <Button className="my-4 bg-orange-500" type="submit">
                    Book Now
                  </Button>
                </Link>
              </form>
            </div>
          </div>
          <img
            src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
