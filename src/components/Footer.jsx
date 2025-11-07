export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 grid place-items-center text-white font-bold">A</div>
            <p className="text-sm text-slate-600">© {year} American University of Madaba</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#overview" className="hover:text-slate-900">Overview</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#help" className="hover:text-slate-900">Help</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
