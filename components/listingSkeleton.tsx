import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ListingSkeletons({ listings }: { listings: number }) {
  return Array(listings)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="min-w-[150px] sm:min-w-[180px] max-w-[400px] w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow duration-200 ease-out"
      >
        <div className="w-full aspect-video object-cover">
          <Skeleton className="w-full h-full -top-2" />
        </div>
        <div className="p-3">
          <div className="text-gray-700 text-base font-medium leading-tight mb-2">
            <Skeleton height={20} />
          </div>
          <div className="text-gray-500 text-sm font-normal leading-tight mb-4 h-8 line-clamp-2">
            <Skeleton count={2} />
          </div>
          <div className="flex justify-between items-center flex-1 gap-8">
            <div className="w-full items-center flex-1 flex gap-2">
              <div className="text-gray-700 text-sm font-medium leading-tight flex-1">
                <Skeleton />
              </div>
              <div className="text-gray-700 text-sm font-normal break-words truncate hidden sm:flex-1">
                <Skeleton />
              </div>
            </div>
            <div className="items-center text-sm sm:text-md flex-1">
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    ));
}
