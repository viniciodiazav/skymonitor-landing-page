import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import ServiceCard from "@/components/home/ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-secondary py-24 md:py-32">
      <Container>
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Todo lo que tu negocio necesita para digitalizarse
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
