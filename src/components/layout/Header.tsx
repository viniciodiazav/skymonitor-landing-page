import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";

const NAV_LINKS = [
  { href: "#quienes-somos", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-28 overflow-visible border-b border-black/5 bg-white/80 backdrop-blur-md">
      <Container className="relative flex h-28 items-center justify-between">
        <Link href="/" className="-my-16 flex items-center gap-2">
          <Image src="/logo-full.svg" alt="Skymotion" width={680} height={170} priority className="h-48 w-auto" />
        </Link>
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] md:inline-block"
        >
          Contáctanos
        </a>
        <MobileMenu links={NAV_LINKS} />
      </Container>
    </header>
  );
}
