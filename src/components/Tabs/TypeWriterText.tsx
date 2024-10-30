"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Connect" },
    { text: "Showcase" },
    { text: "Succeed" },
    { text: "with" },
    { text: "Our Platform.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-xl italic font-bold underline">
        Unlock career opportunities and connect with top employers.
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
