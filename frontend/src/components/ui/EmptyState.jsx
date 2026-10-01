import { Inbox } from 'lucide-react'

export default function EmptyState({ title, description, icon, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-white px-6 py-16 text-center">
      <div className="mb-4 rounded-full bg-slate-100 p-3 text-slate-500">
        {icon || <Inbox className="h-6 w-6" />}
      </div>
      <h3 className="font-display text-lg font-semibold text-slate-900">{title}</h3>
      {description && <p className="mt-1 max-w-sm text-sm text-muted">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
