"use client";

import { useState } from "react";
import Hero from "./Hero";
import Loader from "./Loader";

export default function Page() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  const handleComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <main>
      <Loader onComplete={handleComplete} />
      {loaderComplete && <Hero />}
    </main>
  );
}
