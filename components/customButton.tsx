import { IconType } from "react-icons";

export function CustomButton({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-fit h-9 justify-start items-start inline-flex button-animate">
      <div className="px-4 py-2 bg-white rounded-[100px] shadow border border-gray-200 justify-center items-center gap-2 flex">
        <div className="text-gray-700 text-sm font-normal leading-tight whitespace-nowrap">
          {children}
        </div>
        {icon}
      </div>
    </div>
  );
}
