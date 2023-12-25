import { FILTERS } from "@/utility";
import { Button } from "../button";
import { IoFilter } from "react-icons/io5";
import { CustomButton } from "../customButton";

export function Filters() {
  return (
    <div className="w-full p-2 sm:p-4 justify-start items-center gap-4 inline-flex">
      <div className="justify-start items-start gap-2 flex w-fit">
        <Button dropdown={true} key={2}>
          Price
        </Button>
        <Button dropdown={true} key={1}>
          Type of place
        </Button>
      </div>
      <div className="h-4 border border-gray-200 hidden sm:block"></div>
      <div className="justify-start gap-2 hidden sm:flex flex-1 w-fit overflow-x-auto px-2 no-scrollbar">
        {FILTERS.map((filter: string) => (
          <Button dropdown={false} key={filter}>
            {filter}
          </Button>
        ))}
      </div>
      <div className="h-4 border border-gray-200"></div>
      <div className="justify-start items-start gap-2 flex w-fit">
        <CustomButton
          icon={<IoFilter className="text-black w-4 h-4 relative" />}
        >
          Filter
        </CustomButton>
      </div>
    </div>
  );
}
