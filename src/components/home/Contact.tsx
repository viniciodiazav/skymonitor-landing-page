import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container className="flex flex-col items-center rounded-xl bg-primary px-8 py-16 text-center md:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            ¿Listo para digitalizar tu negocio?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Agenda tu cita sin costo ahora mismo y diseñemos juntos la solución que tu negocio necesita.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="mailto:contacto@skymotion.com.mx"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg transition-transform duration-200 hover:scale-[1.02]"
          >
            contacto@skymotion.com.mx
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
