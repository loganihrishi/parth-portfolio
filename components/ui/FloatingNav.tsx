"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY, scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  // const [currentSection, setCurrentSection] = useState<number | null>(null);

  // const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // useEffect(() => {
  //   if (!scrollY) return;

  //   const handleScroll = () => {
  //     const sectionTops = sectionRefs.current.map(
  //       (section) => section?.offsetTop || 0
  //     );
  //     const scrollPosition = window.scrollY + window.innerHeight / 2;

  //     const current = sectionTops.findIndex(
  //       (top, idx) =>
  //         scrollPosition >= top && scrollPosition < sectionTops[idx + 1]
  //     );

  //     setCurrentSection(current === -1 ? navItems.length - 1 : current);
  //   };

  //   const unsubscribe = scrollY.onChange(handleScroll);
  //   handleScroll();

  //   return () => unsubscribe();
  // }, [scrollY, navItems.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-[46px] inset-x-0 mx-auto border border-transparent dark:border-[#1F1F21] rounded-[6px] dark:bg-[#111113] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-[40px] min-w-[360px] min-h-[35px] items-center justify-between",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative h-[35px] w-16 font-['Libre_Franklin'] font-normal text-[11px] dark:text-neutral-50 items-center justify-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
            {/* {currentSection === idx && ( */}
              {/* <div className="dot absolute bg-[#1C2024] dark:bg-[#EDEEF0] rounded-full w-1 h-1 bottom-[5px]"></div> */}
            {/* )} */}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
