import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rezolve.ai for Evolve Facilitators | Engineer Productivity & Leadership Insights',
  description: 'Make engineers more productive and deliver actionable insights for leadership. AI tools embedded in ConnectWise and PSA systems. Enterprise search, automated documentation, intelligent ticket analysis. Featuring Matt Ruck - 28 years leading designDATA to $30M revenue.',
  openGraph: {
    title: 'Rezolve.ai - Make Engineers More Productive | Deliver Actionable Insights',
    description: 'AI tools that embed directly into ConnectWise and PSA systems. Enterprise search, automated admin work, and leadership dashboards.',
    type: 'website',
  },
}

export default function EvolveLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
