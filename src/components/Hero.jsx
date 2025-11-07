import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden" id="overview">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 ring-1 ring-white/60 backdrop-blur">American University of Madaba</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-slate-900">
            A smart academic hub for AUM students
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700/90 max-w-xl">
            Access schedules, assignments, assessments, and grades in one elegant, futuristic workspace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors">
              Open Platform
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/80 px-6 py-3 text-slate-900 font-semibold ring-1 ring-black/10 backdrop-blur hover:bg-white">
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
