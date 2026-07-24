import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-secondary">
      <Container className="flex flex-col items-center gap-4 py-3 text-center md:flex-row md:justify-between md:text-left">
        <Image src="/logo-full.svg" alt="Skymotion" width={520} height={130} className="h-34 w-auto" />
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Skymotion. Todos los derechos reservados.
        </p>
        <a href="mailto:contacto@skymotion.com.mx" className="text-sm font-medium text-primary hover:underline">
          contacto@skymotion.com.mx
        </a>
      </Container>
    </footer>
  );
}
