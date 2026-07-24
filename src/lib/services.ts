export type Service = {
  slug: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "sitio-web",
    title: "Sitio web",
    description: "Páginas modernas y a medida que representan la identidad de tu negocio.",
  },
  {
    slug: "ecommerce",
    title: "Plataforma de e-commerce",
    description: "Tiendas en línea listas para vender, con gestión de productos y pagos.",
  },
  {
    slug: "erp",
    title: "ERP personalizado",
    description: "Sistemas de gestión hechos a la medida de los procesos de tu empresa.",
  },
  {
    slug: "whatsapp",
    title: "Automatización en WhatsApp",
    description: "Atención y ventas automatizadas para responder a tus clientes al instante.",
  },
  {
    slug: "identidad-visual",
    title: "Contenido e identidad visual",
    description: "Diseño de marca y contenido que conecta con tu audiencia.",
  },
  {
    slug: "meta-ads",
    title: "Campañas publicitarias",
    description: "Estrategias en Facebook e Instagram para llegar a más clientes.",
  },
];
