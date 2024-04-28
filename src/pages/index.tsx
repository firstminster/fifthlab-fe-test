import LeftSide from "@/components/LeftSide";


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
