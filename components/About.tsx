export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">Sobre mí</h2>
        <div className="w-12 h-1 bg-[#0071e3] mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-[#6e6e73] leading-relaxed mb-6">
              Soy Ingeniero Civil Informático egresado de la Universidad Andrés Bello con más de 3 años
              de experiencia en desarrollo backend y full stack.
            </p>
            <p className="text-lg text-[#6e6e73] leading-relaxed">
              Me especializo en construir arquitecturas de microservicios con NestJS y TypeScript,
              integración de APIs REST, y manejo de bases de datos relacionales y no relacionales.
              Cuento con experiencia en proyectos reales con equipos ágiles y despliegue en entornos cloud.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Ubicación', value: 'Viña del Mar, Chile' },
              { label: 'Disponibilidad', value: 'Inmediata — Remoto o híbrido' },
              { label: 'Certificación', value: 'Scrum Foundation Professional (SFPC)' },
              { label: 'Idiomas', value: 'Español nativo · Inglés B1' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 p-4 bg-[#f5f5f7] rounded-2xl">
                <span className="text-sm font-medium text-[#1d1d1f] w-32 shrink-0">{item.label}</span>
                <span className="text-sm text-[#6e6e73]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
