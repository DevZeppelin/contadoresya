"use client";

import { useEffect } from "react";

export default function ClientInteractions() {
  useEffect(() => {
    const documentRoot = document.querySelector(".client-document");
    const revealItems = documentRoot?.querySelectorAll("[data-client-reveal]") || [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("client-reveal-in");
          entry.target.addEventListener("transitionend", () => {
            entry.target.style.transitionDelay = "";
          }, { once: true });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px 80px" });
    const siblingCounts = new Map();
    revealItems.forEach((item) => {
      const parent = item.parentElement;
      const index = siblingCounts.get(parent) || 0;
      siblingCounts.set(parent, index + 1);
      item.style.transitionDelay = `${Math.min(index, 6) * 70}ms`;
      observer.observe(item);
    });
    documentRoot?.classList.add("client-reveal-ready");

    const onClick = (event) => {
      const menuButton = event.target.closest(".client-menu-toggle");
      if (menuButton) {
        const nav = menuButton.closest(".nav");
        const open = nav?.classList.toggle("client-menu-open");
        menuButton.setAttribute("aria-expanded", String(Boolean(open)));
        menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        return;
      }

      const navigationLink = event.target.closest(".nav .nav-links a");
      if (navigationLink) {
        const nav = navigationLink.closest(".nav");
        nav?.classList.remove("client-menu-open");
        nav?.querySelector(".client-menu-toggle")?.setAttribute("aria-expanded", "false");
      }

      // FAQ acordeón (misma mecánica que el script original de los HTML del cliente)
      const button = event.target.closest(".faq-q");
      if (!button) return;
      const answer = button.nextElementSibling;
      const icon = button.querySelector(".icon");
      const wasOpen = answer?.classList.contains("open");
      document.querySelectorAll(".client-document .faq-a.open").forEach((node) => node.classList.remove("open"));
      document.querySelectorAll(".client-document .faq-q .icon").forEach((node) => { node.textContent = "+"; });
      if (!wasOpen) {
        answer?.classList.add("open");
        if (icon) icon.textContent = "−";
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
