export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-4">Contacto</h2>
        <div className="w-12 h-1 bg-[#0071e3] mb-10 rounded mx-auto"></div>
        <p className="text-xl text-[#6e6e73] mb-10 max-w-lg mx-auto">
          Estoy disponible para nuevas oportunidades laborales. No dudes en escribirme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:prado.lucciano@gmail.com"
            className="flex items-center justify-center gap-2 bg-[#0071e3] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
          >
            <span>✉️</span>
            <span>prado.lucciano@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/lucciano-prado-estivill-813973156"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-[#d2d2d7] text-[#1d1d1f] px-8 py-4 rounded-full text-sm font-medium hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
          >
            <span>💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-20 text-xs text-[#6e6e73]">
        © 2026 Lucciano Prado · Hecho con Next.js y Tailwind CSS
      </div>
    </section>
  )
}
