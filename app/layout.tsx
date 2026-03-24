import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Lucciano Prado — Full Stack Developer',
  description: 'Portafolio profesional de Lucciano Prado, Ingeniero Civil Informático y Full Stack Developer especializado en NestJS, TypeScript, Angular y React.',
  keywords: ['Full Stack Developer', 'NestJS', 'TypeScript', 'Angular', 'React', 'Chile'],
  authors: [{ name: 'Lucciano Prado' }],
  openGraph: {
    title: 'Lucciano Prado — Full Stack Developer',
    description: 'Portafolio profesional de Lucciano Prado',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
