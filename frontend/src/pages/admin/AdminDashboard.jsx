import {
  Users,
  BookOpen,
  DollarSign,
  Eye,
  GraduationCap,
  BadgeDollarSign,
  UserPlus,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import StatsCard from '../../components/ui/StatsCard.jsx'
import { adminStats } from '../../data/users.js'
import { courseViewsTrend, enrollmentsByCategory, revenueByMonth } from '../../data/analytics.js'

const PIE_COLORS = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#64748b', '#94a3b8']

export default function AdminDashboard() {
  const s = adminStats

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-muted">Overview of users, courses, and revenue.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total users" value={s.totalUsers.toLocaleString()} icon={Users} trend="+4.2% MoM" trendUp />
        <StatsCard title="Total courses" value={s.totalCourses} icon={BookOpen} />
        <StatsCard title="Paid courses" value={s.paidCourses} icon={BadgeDollarSign} />
        <StatsCard title="Free courses" value={s.freeCourses} icon={GraduationCap} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatsCard title="Revenue" value={`$${(s.revenue / 1000).toFixed(1)}k`} icon={DollarSign} trend="+12% MoM" trendUp />
        <StatsCard title="Enrollments" value={s.enrollments.toLocaleString()} icon={UserPlus} trend="+8% MoM" trendUp />
        <StatsCard title="Course views" value={s.courseViews.toLocaleString()} icon={Eye} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Revenue & enrollments">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={revenueByMonth}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#2563eb" fill="url(#rev)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Weekly course views">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={courseViewsTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="views" fill="#1e40af" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Enrollments by category">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={enrollmentsByCategory}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
              >
                {enrollmentsByCategory.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ul className="w-full space-y-2 md:max-w-xs">
            {enrollmentsByCategory.map((item, i) => (
              <li key={item.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-slate-700">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
                  />
                  {item.name}
                </span>
                <span className="font-medium text-slate-900">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </ChartCard>
    </div>
  )
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-display text-base font-semibold text-slate-900">{title}</h2>
      {children}
    </div>
  )
}
