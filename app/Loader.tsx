"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const sentences = [
    "Who am I?",
    "An agent of justice.",
    "An artist of words.",
    "A voice for the nation.",
  ];

  const loaderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      onComplete: onComplete,
    });

    sentences.forEach((_, index) => {
      const element = loaderRef.current?.querySelector(`#text-${index}`);

      timeline
        .to(`#text-${index}`, { opacity: 1, display: "block", duration: 1 })
        .to(`#text-${index}`, {
          opacity: 0,
          display: "none",
          duration: 1,
          delay: 1.2,
        });
    });

    timeline.to("#loader", { opacity: 0 }).to("#loader", { display: "none" });
  }, []);

  return (
    <div
      className="flex justify-center items-center h-full w-full fixed top-0 z-30 bg-black text-white font-nb"
      id="loader"
      ref={loaderRef}
    >
      {sentences.map((sentence, index) => (
        <h1
          key={index}
          id={`text-${index}`}
          className="text-3xl font-mono opacity-0 hidden"
        >
          {sentence}
        </h1>
      ))}
    </div>
  );
}
