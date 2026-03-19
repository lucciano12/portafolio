export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#1d1d1f] font-semibold text-sm tracking-tight"></span> 
        <div className="flex gap-6 text-sm text-[#6e6e73]">
          <a href="#sobre-mi" className="hover:text-[#1d1d1f] transition-colors">Sobre mí</a>
          <a href="#stack" className="hover:text-[#1d1d1f] transition-colors">Stack</a>
          <a href="#proyectos" className="hover:text-[#1d1d1f] transition-colors">Proyectos</a>
          <a href="#experiencia" className="hover:text-[#1d1d1f] transition-colors">Experiencia</a>
          <a href="#contacto" className="hover:text-[#1d1d1f] transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  )
}
