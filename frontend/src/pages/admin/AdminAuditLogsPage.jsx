import DataTable from '../../components/ui/DataTable.jsx'
import { auditLogs } from '../../data/users.js'

const columns = [
  { key: 'action', header: 'Action', render: (row) => <span className="font-medium">{row.action}</span> },
  { key: 'actor', header: 'Actor', render: (row) => row.actor },
  { key: 'target', header: 'Target', render: (row) => row.target },
  { key: 'timestamp', header: 'Timestamp', render: (row) => row.timestamp },
  { key: 'ip', header: 'IP', render: (row) => row.ip },
]

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Audit Logs</h1>
        <p className="mt-1 text-sm text-muted">Administrative actions recorded in the portal.</p>
      </div>
      <DataTable columns={columns} data={auditLogs} keyExtractor={(r) => r.id} />
    </div>
  )
}
