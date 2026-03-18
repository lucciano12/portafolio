import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f5f7] pt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 py-24">
        <div className="flex-1">
          <p className="text-[#0071e3] text-sm font-medium mb-3 tracking-wide uppercase">Full Stack Developer</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] leading-tight mb-6">
            Hola, soy<br />Lucciano Prado
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed mb-8 max-w-lg">
            Ingeniero Civil Informático especializado en backend con NestJS y TypeScript.
            Construyo APIs robustas, microservicios y aplicaciones full stack.
          </p>
          <div className="flex gap-4">
            <a
              href="#proyectos"
              className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="border border-[#d2d2d7] text-[#1d1d1f] px-6 py-3 rounded-full text-sm font-medium hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/foto.jpg"
              alt="Lucciano Prado"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
