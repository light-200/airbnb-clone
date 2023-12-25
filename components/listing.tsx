export function Listing({
  imageUrl,
  title,
  description,
  price,
}: {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="min-w-[150px] sm:min-w-[180px] max-w-[400px] w-full rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow duration-200 ease-out">
      <img
        className="w-full h-auto aspect-video object-cover object-center"
        src={imageUrl}
        alt="Placeholder"
      />
      <div className="p-3">
        <div className="text-gray-700 text-base font-medium leading-tight mb-2">
          {title}
        </div>
        <div className="text-gray-500 text-sm font-normal leading-tight mb-4 h-8 line-clamp-2">
          {description}
        </div>
        <div className="flex justify-between items-center flex-1">
          <div className="flex items-center w-fit">
            <div className="text-gray-700 text-sm font-medium leading-tight">
              5.0
            </div>
            <div className="text-gray-700 text-sm font-normal break-words truncate hidden sm:block">
              (318 reviews)
            </div>
          </div>
          <div className="flex items-center text-sm sm:text-md">
            <div className="text-gray-700 font-medium leading-7">${price}</div>
            <div className="text-gray-700  font-normal leading-tight">
              /night
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}