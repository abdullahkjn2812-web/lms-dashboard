import NotificationItem from '../../components/notifications/NotificationItem.jsx'
import { notifications } from '../../data/notifications.js'

export default function AdminNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Notifications</h1>
        <p className="mt-1 text-sm text-muted">Platform activity feed.</p>
      </div>
      <div className="space-y-3">
        {notifications.map((n) => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </div>
    </div>
  )
}
