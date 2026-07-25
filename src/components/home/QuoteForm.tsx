"use client";

import { FormEvent, useState } from "react";

const BUDGET_OPTIONS = [
  "Menos de $5,000 MXN",
  "$5,000 - $15,000 MXN",
  "$15,000 - $30,000 MXN",
  "Más de $30,000 MXN",
  "Aún no lo sé",
];

const inputClasses =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [comments, setComments] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Solicitud de cotización - ${name}`;
    const body = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Celular: ${phone}`,
      `Presupuesto estimado: ${budget}`,
      "",
      "Comentarios:",
      comments,
    ].join("\n");

    window.location.href = `mailto:contacto@skymotion.com.mx?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 text-left sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Correo
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          className={inputClasses}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Celular
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10 dígitos"
          className={inputClasses}
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Presupuesto
        </label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={inputClasses}
        >
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="comments" className="mb-1.5 block text-sm font-medium text-foreground/80">
          Comentarios
        </label>
        <textarea
          id="comments"
          rows={4}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Cuéntanos qué necesita tu negocio"
          className={`${inputClasses} resize-none`}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-transform duration-200 hover:scale-[1.02] sm:w-auto"
        >
          Solicitar cotización
        </button>
      </div>
    </form>
  );
}
