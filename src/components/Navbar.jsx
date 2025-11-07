import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Overview', href: '#overview' },
    { name: 'Features', href: '#features' },
    { name: 'Help', href: '#help' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-500/30 ring-1 ring-white/20 grid place-items-center text-white font-bold">A</div>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">AUM</p>
              <p className="text-base sm:text-lg font-semibold text-slate-900">Student Platform</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-800 transition-colors"
            >
              Sign in
            </a>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-slate-300 text-slate-900"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="mt-2 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
