"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroller() {
  const lenis = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    lenis.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const resize = setInterval(() => {
      lenis.current?.resize();
    }, 150);

    const unsubscribe = Tempus.add((time) => {
      lenis.current?.raf(time);
    });

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current?.destroy();
    };
  }, []);

  return null;
}