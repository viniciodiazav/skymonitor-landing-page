import {
  FaGlobe,
  FaShoppingCart,
  FaFolderOpen,
  FaWhatsapp,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";
import { Service } from "@/lib/services";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "sitio-web": FaGlobe,
  ecommerce: FaShoppingCart,
  erp: FaFolderOpen,
  whatsapp: FaWhatsapp,
  "identidad-visual": FaPalette,
  "meta-ads": FaChartLine,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.slug];

  return (
    <div className="group rounded-xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <Icon className="h-8 w-8 text-primary" />
      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{service.description}</p>
    </div>
  );
}
