export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-lg">
          <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-blue-600/40 via-cyan-400/30 to-emerald-400/20 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Your academic world, beautifully connected</h3>
            <p className="mt-2 text-slate-200 max-w-2xl">Sign in with your AUM credentials to access your personalized dashboard — classes, work, and results synced in real time.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Sign in with AUM</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full ring-1 ring-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10">Preview features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
