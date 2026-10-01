import Button from '../../components/ui/Button.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'

export default function AdminSupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Support</h1>
        <p className="mt-1 text-sm text-muted">Incoming learner tickets (mock queue).</p>
      </div>
      <EmptyState
        title="No open tickets"
        description="New support requests from learners will appear here."
        action={<Button variant="outline">Refresh</Button>}
      />
    </div>
  )
}
