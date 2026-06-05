export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-mono text-[var(--accent)] mb-4 tracking-wider">
      {`// `}{children}
    </div>
  )
}
