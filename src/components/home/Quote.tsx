import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/home/QuoteForm";

export default function Quote() {
  return (
    <section id="contacto" className="bg-secondary py-24 md:py-32">
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Listo para digitalizar tu negocio?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Agenda tu cita sin costo ahora mismo: cuéntanos sobre tu negocio y te contactamos con una
            propuesta a la medida.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-10 rounded-xl border border-black/5 bg-white p-6 shadow-sm md:p-10">
          <QuoteForm />
        </Reveal>
      </Container>
    </section>
  );
}
