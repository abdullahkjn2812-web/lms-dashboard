import {
  CreditCard,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Bell,
} from 'lucide-react'

const iconMap = {
  payment: CreditCard,
  access: ShieldCheck,
  course: BookOpen,
  support: MessageSquare,
  system: Bell,
}

const colorMap = {
  payment: 'bg-emerald-50 text-emerald-700',
  access: 'bg-brand-50 text-brand-700',
  course: 'bg-violet-50 text-violet-700',
  support: 'bg-amber-50 text-amber-700',
  system: 'bg-slate-100 text-slate-600',
}

export default function NotificationItem({ notification, onMarkRead }) {
  const Icon = iconMap[notification.type] || Bell

  return (
    <div
      className={`flex gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition ${
        notification.read ? 'opacity-80' : 'ring-1 ring-brand-100'
      }`}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colorMap[notification.type] || colorMap.system}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-medium text-slate-900">{notification.title}</p>
            <p className="mt-0.5 text-sm text-muted">{notification.message}</p>
          </div>
          {!notification.read && (
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-label="Unread" />
          )}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xs text-muted">{notification.time}</span>
          {!notification.read && onMarkRead && (
            <button
              type="button"
              onClick={() => onMarkRead(notification.id)}
              className="text-xs font-medium text-brand-700 hover:underline"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
