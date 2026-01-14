import '../styles/globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Citroën C4',
  description: 'Citroën C4 Pack Look 2012 en excelente estado. USD 6500. Services al día, VTV vigente, segundo dueño.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}