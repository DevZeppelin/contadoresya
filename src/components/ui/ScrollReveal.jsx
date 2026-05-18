"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let io;
    const frame = requestAnimationFrame(() => {
      const els = document.querySelectorAll(".reveal:not(.reveal--in)");
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("reveal--in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(frame);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
