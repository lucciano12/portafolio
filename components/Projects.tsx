const projects = [
  {
    title: 'Rotulo Digital',
    description: 'Sistema de gestión y generación de etiquetas operativas para negocio gastronómico. Monorepo con API backend NestJS, Dashboard React y PWA móvil con escáner QR.',
    stack: ['NestJS', 'React', 'MongoDB', 'Docker', 'PWA'],
    github: 'https://github.com/lucciano12/Rotulo-digital',
    demo: '',
    status: 'wip',
  },
  {
    title: 'Sampler',
    description: 'Aplicación web de catálogo musical para búsqueda y exploración de samples. Buscador con ranking de relevancia usando Reactive Forms y RxJS.',
    stack: ['Angular 20', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap'],
    github: 'https://github.com/lucciano12/Sampler',
    demo: '',
    status: 'wip',
  },
  {
    title: 'Festival Música',
    description: 'Plataforma web responsiva para festival de música con lineup, horarios, galería y compra de boletos. Layout mobile-first con automatización Gulp 4.',
    stack: ['HTML5', 'SCSS', 'JavaScript', 'Gulp 4', 'Bootstrap'],
    github: 'https://github.com/lucciano12/Festival-musica',
    demo: 'https://festival-musica-lucciano.vercel.app',
    status: 'done',
  },
  {
    title: 'Desarrollo PHP Web',
    description: 'Proyectos de desarrollo web con PHP y MySQL. AppSalon: app de gestión de citas con conexión a BD, endpoints JSON y lógica de negocio.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'SCSS', 'Gulp'],
    github: 'https://github.com/lucciano12/desarrollo-php-web',
    demo: '',
    status: 'done',
  },
  {
    title: 'Practica NestJS',
    description: 'Práctica avanzada de patrones y arquitectura con NestJS. Módulos, controladores, servicios, guards, pipes e integración con bases de datos.',
    stack: ['NestJS', 'TypeScript', 'Node.js'],
    github: 'https://github.com/lucciano12/Practica-NestJS',
    demo: '',
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
            <div
              key={project.title}
              className="group bg-[#f5f5f7] rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-[#1d1d1f]">
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
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs bg-white border border-[#d2d2d7] text-[#6e6e73] px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full bg-[#0071e3] text-white hover:bg-[#0077ed] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
