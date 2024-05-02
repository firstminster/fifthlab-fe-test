import UserSearch from "@/components/UserSearch/UserSearch";
import UserLists from "@/components/UserLists";


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-wrap xl:flex-nowrap justify-between p-5 lg:p-10 bg-[#262b40] font-sans`}
    >
      <UserSearch />
      <UserLists />
    </main>
  );
}
