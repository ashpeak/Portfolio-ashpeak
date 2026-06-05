export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="font-display font-bold text-xl">
            ashish<span className="text-[var(--accent)]">.</span>
          </div>
          
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="https://github.com/ashpeak" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/ashpeak" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:kumarvns130@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>Built with Next.js & Tailwind · Designed with care</p>
          <p className="italic text-[var(--accent)]/50">&quot;Details make the design.&quot;</p>
          <p>© {new Date().getFullYear()} Ashish Singh</p>
        </div>
      </div>
    </footer>
  )
}
