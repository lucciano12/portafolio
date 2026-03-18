const experience = [
  {
    company: 'Agibiz / MetLife Chile',
    role: 'Programador Backend Nivel 3',
    period: 'Feb 2025 – Jul 2025',
    description: 'Diseñé e implementé servicios RESTful en NestJS migrando lógica desde Oracle PL/SQL a microservicios. Autenticación JWT, documentación Swagger, pruebas en Azure Test Plans y GitFlow.',
  },
  {
    company: 'CyD Ingeniería',
    role: 'Administrador Informático',
    period: 'May 2024 – Feb 2025',
    description: 'Automaticé migración de datos desde Excel a plataformas de control con Python, mejorando eficiencia operativa un 40%. Implementé fiscalización automatizada de procesos documentales.',
  },
  {
    company: 'Axioma Ingenieros Consultores',
    role: 'Administrador Informático',
    period: 'Dic 2023 – May 2024',
    description: 'Administré plataformas informáticas y documentales en proyectos de ingeniería civil. Gestión de control documental y trazabilidad de procesos.',
  },
  {
    company: 'IODEV SPA',
    role: 'Desarrollador Backend (Práctica)',
    period: 'Ene 2020 – Dic 2020',
    description: 'Desarrollé APIs REST en Spring Boot para gestión de usuarios con autenticación segura y manejo de datos sensibles.',
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">Experiencia</h2>
        <div className="w-12 h-1 bg-[#0071e3] mb-10 rounded"></div>
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">{exp.role}</h3>
                  <p className="text-[#0071e3] text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-[#6e6e73] mt-1 md:mt-0 shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
