const projects = [
  {
    title: 'Rotulo Digital',
    description: 'Sistema de gestión y generación de etiquetas operativas para negocio gastronómico. Monorepo con API backend NestJS, Dashboard React y PWA móvil con escáner QR.',
    stack: ['NestJS', 'React', 'MongoDB', 'Docker', 'PWA'],
    url: 'https://github.com/lucciano12/Rotulo-digital',
    status: 'wip',
  },
  {
    title: 'Sampler',
    description: 'Aplicación web de catálogo musical para búsqueda y exploración de samples. Buscador con ranking de relevancia usando Reactive Forms y RxJS.',
    stack: ['Angular 20', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap'],
    url: 'https://github.com/lucciano12/Sampler',
    status: 'wip',
  },
  {
    title: 'Festival Música',
    description: 'Plataforma web responsiva para festival de música con lineup, horarios, galería y compra de boletos. Layout mobile-first con automatización Gulp 4.',
    stack: ['HTML5', 'SCSS', 'JavaScript', 'Gulp 4', 'Bootstrap'],
    url: 'https://github.com/lucciano12/Festival-musica',
    status: 'done',
  },
  {
    title: 'Desarrollo PHP Web',
    description: 'Proyectos de desarrollo web con PHP y MySQL. AppSalon: app de gestión de citas con conexión a BD, endpoints JSON y lógica de negocio.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'SCSS', 'Gulp'],
    url: 'https://github.com/lucciano12/desarrollo-php-web',
    status: 'done',
  },
  {
    title: 'Practica NestJS',
    description: 'Práctica avanzada de patrones y arquitectura con NestJS. Módulos, controladores, servicios, guards, pipes e integración con bases de datos.',
    stack: ['NestJS', 'TypeScript', 'Node.js'],
    url: 'https://github.com/lucciano12/Practica-NestJS',
    status: 'wip',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">Proyectos</h2>
        <div className="w-12 h-1 bg-[#0071e3] mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#f5f5f7] rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    project.status === 'done'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {project.status === 'done' ? '✅ Terminado' : '🚧 En desarrollo'}
                </span>
              </div>
              <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-white border border-[#d2d2d7] text-[#6e6e73] px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
