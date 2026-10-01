import { Link } from 'react-router-dom'
import { getContinueLearning } from '../../data/courses.js'
import ProgressBar from '../../components/ui/ProgressBar.jsx'
import Button from '../../components/ui/Button.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'

export default function ContinueLearningPage() {
  const list = getContinueLearning()

  if (list.length === 0) {
    return (
      <EmptyState
        title="Nothing in progress"
        description="Start a course to see it here."
        action={
          <Link to="/courses">
            <Button>Find a course</Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Continue Learning</h1>
        <p className="mt-1 text-sm text-muted">Resume unfinished courses.</p>
      </div>
      <div className="space-y-4">
        {list.map((course) => (
          <div
            key={course.id}
            className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-28 w-full rounded-lg object-cover sm:h-24 sm:w-40"
            />
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-900">{course.title}</h3>
              <p className="mt-0.5 text-sm text-muted">
                {course.category} · {course.duration}
              </p>
              <ProgressBar value={course.progress ?? 0} className="mt-3" />
            </div>
            <Link to={`/courses/${course.id}`}>
              <Button>Resume</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
