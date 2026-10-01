import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { topCourses } from '../../data/analytics.js'

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Analytics</h1>
        <p className="mt-1 text-sm text-muted">Enrollment performance by course.</p>
      </div>
      <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-display text-base font-semibold">Top courses by enrollments</h2>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={topCourses} layout="vertical" margin={{ left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 12 }} stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="enrollments" fill="#1e40af" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
