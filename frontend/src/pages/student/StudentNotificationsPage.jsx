import { useState } from 'react'
import NotificationItem from '../../components/notifications/NotificationItem.jsx'
import Button from '../../components/ui/Button.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'
import { notifications as initial } from '../../data/notifications.js'

export default function StudentNotificationsPage() {
  const [items, setItems] = useState(initial)

  const markRead = (id) => {
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-slate-900">Notifications</h1>
          <p className="mt-1 text-sm text-muted">Payments, course access, and support updates.</p>
        </div>
        <Button variant="outline" size="sm" onClick={markAllRead}>
          Mark all as read
        </Button>
      </div>

      {items.length === 0 ? (
        <EmptyState title="No notifications" description="You're all caught up." />
      ) : (
        <div className="space-y-3">
          {items.map((n) => (
            <NotificationItem key={n.id} notification={n} onMarkRead={markRead} />
          ))}
        </div>
      )}
    </div>
  )
}
