import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function FloatingWhatsapp() {
  return (
    <a href={siteConfig.whatsapp} target="_blank" aria-label="Hablar por WhatsApp" className="site-shell whatsapp-float" style={{ animation: "pulse-glow 2.4s ease-in-out infinite" }}>
      <MessageCircle size={32} />
    </a>
  );
}
