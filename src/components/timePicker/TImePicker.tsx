import { Input } from "@/components/ui/input";
export default function TimePicker() {
  return (
    <div className="flex items-center space-x-2">
      <ClockIcon className="w-5 h-5" />
      <div className="grid w-full items-center gap-1.5">
        <Input
          type="time"
          id="time"
          aria-label="Choose time"
          className="w-full"
        />
      </div>
    </div>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
