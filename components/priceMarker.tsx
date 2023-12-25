export function PriceMarker({ price }: { price: String }) {
  return (
    <div className="px-2 py-1 bg-white rounded-[100px] shadow border border-gray-200 justify-center items-center gap-1 flex">
      <div className="text-center text-gray-700 text-sm font-medium font-['Inter'] leading-tight">
        {price}
      </div>
    </div>
  );
}
