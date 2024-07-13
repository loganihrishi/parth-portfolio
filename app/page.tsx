import HomePage from "@/components/HomePage";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="bg-[#161617] h-screen pt-6 pb-6 w-full">
        <div className="bg-white dark:bg-[#111113] absolute inset-6 rounded-xl">
          <FloatingNav navItems={[
            {name: 'Home', link: "/", icon: <FaHome />}
          ]}/>
          <div className="absolute right-4 top-3 scale-75 z-[99]"><ModeToggle /></div>
          <HomePage />
        </div>
      </div>
    </main>
  );
}
