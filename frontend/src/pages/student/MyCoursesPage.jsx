import { Link } from 'react-router-dom'
import { getEnrolledCourses } from '../../data/courses.js'
import ProgressBar from '../../components/ui/ProgressBar.jsx'
import Badge from '../../components/ui/Badge.jsx'
import Button from '../../components/ui/Button.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'

export default function MyCoursesPage() {
  const enrolled = getEnrolledCourses()

  if (enrolled.length === 0) {
    return (
      <EmptyState
        title="No enrolled courses yet"
        description="Browse the catalog and enroll to see courses here."
        action={
          <Link to="/courses">
            <Button>Browse courses</Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">My Courses</h1>
        <p className="mt-1 text-sm text-muted">Courses you are enrolled in.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {enrolled.map((course) => (
          <article key={course.id} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
            <img src={course.thumbnail} alt={course.title} className="aspect-video w-full object-cover" />
            <div className="p-4">
              <div className="mb-2 flex gap-2">
                {course.completed ? <Badge variant="success">Completed</Badge> : <Badge variant="info">In progress</Badge>}
                {course.price === 0 ? <Badge variant="free">Free</Badge> : null}
              </div>
              <h3 className="font-semibold text-slate-900">{course.title}</h3>
              <ProgressBar value={course.progress ?? 0} size="sm" className="mt-3" />
              <Link to={`/courses/${course.id}`} className="mt-4 block">
                <Button variant="outline" fullWidth size="sm">
                  {course.completed ? 'Review' : 'Continue'}
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
