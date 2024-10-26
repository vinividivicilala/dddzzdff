"use client";

import Image from "next/image";
import JavedImage from "./images/javed.jpg";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Draggable);

export default function Hero() {
  const handRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const dragAreaRef = useRef<HTMLDivElement>(null);

  const degrees = [-7, -6, -5, -4, -3, 0, 1, 3, 4, 5, 6, 7];

  function pickDeg(): number {
    return degrees[Math.floor(Math.random() * degrees.length)];
  }

  // Generating random degrees for each element
  const sedDeg = pickDeg();
  const courtDeg = pickDeg();
  const writerDeg = pickDeg();

  useGSAP(() => {
    const timeline = gsap.timeline();

    // Setting up the draggable elements
    Draggable.create("#sed", {
      type: "x,y",
      bounds: dragAreaRef.current,
    });

    Draggable.create("#court", {
      type: "x,y",
      bounds: dragAreaRef.current,
    });

    Draggable.create("#writer", {
      type: "x,y",
      bounds: dragAreaRef.current,
    });

    Draggable.create("#javed", {
      type: "x,y",
      bounds: dragAreaRef.current,
    });

    timeline.to("#hello", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Hand wave animation
    if (handRef.current) {
      timeline.to(handRef.current, {
        delay: 0.5,
        rotation: 20,
        duration: 0.7,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Name stagger animation
    timeline.from(".name-letter", {
      y: 200,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });

    timeline.to("#javed, #sed, #court, #writer", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="container flex flex-col items-center mt-10 mx-auto h-full">
      <p className="text-2xl font-outfit mb-5 opacity-0" id="hello">
        Hello there{" "}
        <span
          ref={handRef}
          style={{ display: "inline-block", transformOrigin: "bottom right" }}
        >
          👋🏻
        </span>
      </p>

      <h1
        className="text-[11.5vw] font-outfit self-center leading-none overflow-hidden"
        ref={nameRef}
      >
        {"JAVED RASIN".split("").map((letter, index) => (
          <span key={index} className="name-letter inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <div className="w-full h-[50vh] mt-10 relative" ref={dragAreaRef}>
        <div
          className="absolute size-[13vw] left-0 right-0 mx-auto top-5 opacity-0"
          id="javed"
        >
          <Image src={JavedImage} alt="Javed" className="rounded-full" />
        </div>

        <TextBox
          className={`bg-green-300 left-0 opacity-0`}
          sentence="Founder & CEO at SED Foundation 🌿"
          id="sed"
          deg={sedDeg}
        />

        <TextBox
          className={`bg-purple-200 right-0 opacity-0`}
          sentence="Advocate at Supreme Court of Bangladesh ⚖️"
          id="court"
          deg={courtDeg}
        />
        <TextBox
          className={`bg-blue-200 bottom-0 left-1/3 opacity-0`}
          sentence="Writer, Editor & Publisher at ঈহা প্রকাশ ✒️"
          id="writer"
          deg={writerDeg}
        />
      </div>
    </section>
  );
}

function TextBox({
  sentence,
  className,
  id,
  deg,
}: {
  sentence: string;
  className?: string;
  id?: string;
  deg: number;
}) {
  return (
    <div
      className={`p-2 h-min w-fit text-xl font-outfit rounded-md absolute cursor-grab ${className}`}
      style={{
        transform: `rotate(${deg}deg)`,
      }}
      id={id}
    >
      <p>{sentence}</p>
    </div>
  );
}
