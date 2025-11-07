import { CalendarDays, BookOpenCheck, FileCheck2, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Unified Schedule',
    description: 'See all your classes, labs, and events in a single intelligent timeline.',
    icon: CalendarDays,
  },
  {
    title: 'Assignments',
    description: 'Track due dates, upload submissions, and get instant confirmations.',
    icon: BookOpenCheck,
  },
  {
    title: 'Assessments',
    description: 'Plan quizzes and exams with smart reminders and conflict detection.',
    icon: FileCheck2,
  },
  {
    title: 'Grades',
    description: 'Visualize your progress with clean analytics and performance insights.',
    icon: GraduationCap,
  },
  {
    title: 'Secure by Design',
    description: 'Institutional SSO, privacy-first data handling, and role-based access.',
    icon: ShieldCheck,
  },
  {
    title: 'Polished Experience',
    description: 'A premium interface built for focus, clarity, and speed.',
    icon: Sparkles,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Everything you need, beautifully organized</h2>
          <p className="mt-3 text-slate-600">Powerful tools elegantly crafted for the AUM learning journey.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-2.5 text-white shadow-md shadow-blue-600/20">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
