import DataTable from '../../components/ui/DataTable.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { courses } from '../../data/courses.js'

const columns = [
  {
    key: 'course',
    header: 'Course',
    render: (row) => (
      <div className="flex items-center gap-3">
        <img src={row.thumbnail} alt="" className="h-10 w-16 rounded object-cover" />
        <div>
          <p className="font-medium text-slate-900">{row.title}</p>
          <p className="text-xs text-muted">{row.instructor}</p>
        </div>
      </div>
    ),
  },
  { key: 'category', header: 'Category', render: (row) => row.category },
  { key: 'level', header: 'Level', render: (row) => row.level },
  {
    key: 'price',
    header: 'Price',
    render: (row) => (row.price === 0 ? <Badge variant="free">Free</Badge> : <span>${row.price}</span>),
  },
  { key: 'views', header: 'Views', render: (row) => row.views.toLocaleString() },
  { key: 'rating', header: 'Rating', render: (row) => row.rating.toFixed(1) },
]

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Courses</h1>
        <p className="mt-1 text-sm text-muted">All published LearnCorp courses.</p>
      </div>
      <DataTable columns={columns} data={courses} keyExtractor={(r) => r.id} />
    </div>
  )
}
