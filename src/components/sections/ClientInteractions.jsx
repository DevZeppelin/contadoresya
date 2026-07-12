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
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px 80px" });
    revealItems.forEach((item) => observer.observe(item));
    documentRoot?.classList.add("client-reveal-ready");

    const onClick = (event) => {
      const menuButton = event.target.closest(".client-menu-toggle");
      if (menuButton) {
        const header = menuButton.closest("header");
        const open = header?.classList.toggle("client-menu-open");
        menuButton.setAttribute("aria-expanded", String(Boolean(open)));
        menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        return;
      }

      const navigationLink = event.target.closest("header .nav-links a");
      if (navigationLink) {
        const header = navigationLink.closest("header");
        header?.classList.remove("client-menu-open");
        header?.querySelector(".client-menu-toggle")?.setAttribute("aria-expanded", "false");
      }

      const button = event.target.closest(".faq-q");
      if (!button) return;
      const item = button.closest(".faq-item");
      const wasOpen = item?.classList.contains("open");
      const list = item?.closest(".faq-list");
      list?.querySelectorAll(".faq-item.open").forEach((node) => node.classList.remove("open"));
      if (!wasOpen) item?.classList.add("open");
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }, []);

  return null;
}
