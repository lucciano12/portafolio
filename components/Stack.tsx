const stack = {
  Backend: [
    { name: 'NestJS', emoji: '⚙️' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'PHP', emoji: '🐘' },
    { name: 'Python', emoji: '🐍' },
    { name: 'Spring Boot', emoji: '🍃' },
  ],
  Frontend: [
    { name: 'Angular', emoji: '🔴' },
    { name: 'React', emoji: '⚛️' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'SCSS', emoji: '🎨' },
    { name: 'Tailwind CSS', emoji: '💨' },
  ],
  'Bases de Datos': [
    { name: 'PostgreSQL', emoji: '🐘' },
    { name: 'MySQL', emoji: '🗄️' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'Oracle PL/SQL', emoji: '🔶' },
  ],
  'DevOps & Cloud': [
    { name: 'Docker', emoji: '🐳' },
    { name: 'AWS', emoji: '☁️' },
    { name: 'Azure DevOps', emoji: '🔵' },
    { name: 'Git / GitFlow', emoji: '🌿' },
  ],
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">Stack tecnológico</h2>
        <div className="w-12 h-1 bg-[#0071e3] mb-10 rounded"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(stack).map(([category, techs]) => (
            <div key={category} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wide">{category}</h3>
              <ul className="space-y-2">
                {techs.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-2 text-sm text-[#6e6e73]">
                    <span>{tech.emoji}</span>
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
