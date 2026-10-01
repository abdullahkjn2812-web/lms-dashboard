import DataTable from '../../components/ui/DataTable.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { payments } from '../../data/payments.js'

const statusVariant = {
  Completed: 'success',
  Pending: 'warning',
  Failed: 'danger',
  Refunded: 'default',
}

const columns = [
  { key: 'course', header: 'Course', render: (row) => <span className="font-medium">{row.courseTitle}</span> },
  { key: 'amount', header: 'Amount', render: (row) => `$${row.amount.toFixed(2)}` },
  { key: 'date', header: 'Date', render: (row) => row.date },
  { key: 'method', header: 'Method', render: (row) => row.method },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <Badge variant={statusVariant[row.status]}>{row.status}</Badge>,
  },
  { key: 'invoice', header: 'Invoice', render: (row) => row.invoiceId },
]

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Payments</h1>
        <p className="mt-1 text-sm text-muted">All learner transactions.</p>
      </div>
      <DataTable columns={columns} data={payments} keyExtractor={(r) => r.id} />
    </div>
  )
}
