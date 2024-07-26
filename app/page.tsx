import { navItems } from "@/data";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { FloatingNav } from "@/components/ui/FloatingNav";
import HomePage from "@/components/HomePage";
import Work from "@/components/Work";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Skills from "@/components/Skills";

const offset = new Date().getTimezoneOffset() / -60; // Calculate the GMT offset

async function getServerTime(offset: number) {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const localTime = new Date(utcTime + (3600000 * offset));
  return localTime.toLocaleTimeString('en-GB'); // 'en-GB' locale for 24-hour format
}

export default async function Home() {
  const serverTime = await getServerTime(offset);

  return (
    <main className="relative flex justify-center items-center flex-col">
      <div className="fixed top-0 left-0 right-0 h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#F0F0F3] dark:bg-[#18191B] z-50"></div>
      <div className="fixed right-[60px] top-9 scale-1 z-[99] min-[1200px]:right-9"><ModeToggle /></div>
      <FloatingNav navItems={navItems} />
      <HomePage serverTime={serverTime} offset={offset} />
      <Skills />
      <Work />
      <About />
      <Testimonial />
      <Footer />
    </main>
  );
}
