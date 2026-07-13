import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function FloatingWhatsapp() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Hablar por WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={32} color="#fff" />
    </a>
  );
}
