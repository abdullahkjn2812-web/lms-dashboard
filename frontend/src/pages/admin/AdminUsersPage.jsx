import DataTable from '../../components/ui/DataTable.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { users } from '../../data/users.js'

const columns = [
  {
    key: 'user',
    header: 'User',
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
        <div>
          <p className="font-medium text-slate-900">{row.name}</p>
          <p className="text-xs text-muted">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    render: (row) => <Badge variant={row.role === 'admin' ? 'info' : 'default'}>{row.role}</Badge>,
  },
  {
    key: 'enrolled',
    header: 'Enrolled',
    render: (row) => row.enrolledCourses,
  },
  {
    key: 'joined',
    header: 'Joined',
    render: (row) => row.joinDate,
  },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <Badge variant={row.status === 'Active' ? 'success' : 'warning'}>{row.status}</Badge>,
  },
]

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Users</h1>
        <p className="mt-1 text-sm text-muted">Manage learner and admin accounts.</p>
      </div>
      <DataTable columns={columns} data={users} keyExtractor={(r) => r.id} />
    </div>
  )
}
