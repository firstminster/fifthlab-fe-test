import LeftSide from "@/components/LeftSide";
import Image from "next/image";
// import { Inter } from "next/font/google";
import { SlMagnifier } from "react-icons/sl";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-wrap xl:flex-nowrap justify-between p-5 lg:p-10 bg-[#262b40] font-sans`}
    >
      {/* left side */}
      <LeftSide />

      {/* right side */}
      <div className="bg-white w-full rounded-[30px] h-auto  p-10 ">
        Right
      </div>
    </main>
  );
}
