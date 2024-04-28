import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-wrap xl:flex-nowrap justify-between p-5 lg:p-10 bg-[#262b40] font-sans`}
    >
      <LeftSide />
      <RightSide />
    </main>
  );
}
