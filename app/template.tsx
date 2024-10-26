"use client";

import gsap from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  return <>{children}</>;
}
