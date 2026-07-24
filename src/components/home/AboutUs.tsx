import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quiénes somos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Digitalización a medida para negocios pequeños y pymes
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg leading-relaxed text-foreground/70">
            En Skymotion creemos que cada negocio es único, por eso no ofrecemos soluciones
            genéricas. Diseñamos e implementamos sitios web, plataformas de e-commerce, sistemas de
            gestión (ERP) y estrategias publicitarias adaptadas a la realidad de cada cliente,
            acompañándolos en todo el proceso de digitalización para que puedan enfocarse en hacer
            crecer su negocio.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
