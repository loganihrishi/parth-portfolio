import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
      <div className="fixed top-0 left-0 right-0 h-6 bg-[#18191B] z-50"></div>
      
      <div className="bg-[#161617] h-screen pt-6 pb-6 w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: "/", icon: <FaHome />}
        ]}/>
        <ModeToggle />
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#18191B] z-50"></div>
    </main>
  );
}
