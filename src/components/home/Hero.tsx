import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-8 pb-28 md:pt-10 md:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <Image
            src="/logo-icon.svg"
            alt=""
            width={220}
            height={220}
            priority
            className="mx-auto mb-2 h-48 w-48"
          />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="max-w-3xl font-bold tracking-tight md:max-w-4xl">
            <span className="block text-4xl text-primary md:text-6xl">Controla tu negocio</span>
            <span className="mt-2 block text-2xl text-foreground md:text-4xl">
              desde cualquier lugar
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Digitalizamos negocios y pymes de forma personalizada: sitios web, e-commerce, sistemas de
            gestión y campañas publicitarias para que tu negocio crezca aunque tú no estés presente.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contacto"
              className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-[1.02]"
            >
              Empieza ahora
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-foreground/15 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver servicios
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
