export default function StatsCard({ title, value, subtitle, icon: Icon, trend, trendUp }) {
  return (
    <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted">{title}</p>
          <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
          {subtitle && <p className="mt-1 text-xs text-muted">{subtitle}</p>}
          {trend && (
            <p className={`mt-2 text-xs font-medium ${trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
