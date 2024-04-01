import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function WhiteBtn({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Link className="flex bg-white w-fit justify-center px-10 py-2 rounded-lg border border-gray-500 items-center gap-5 text-gray-900" href="">
      {children}<FaChevronRight />
    </Link>
  )
}