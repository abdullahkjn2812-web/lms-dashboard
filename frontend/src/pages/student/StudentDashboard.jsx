import { Link } from 'react-router-dom'
import { BookOpen, CheckCircle2, PlayCircle, Bell } from 'lucide-react'
import StatsCard from '../../components/ui/StatsCard.jsx'
import ProgressBar from '../../components/ui/ProgressBar.jsx'
import NotificationItem from '../../components/notifications/NotificationItem.jsx'
import Button from '../../components/ui/Button.jsx'
import {
  getCompletedCourses,
  getContinueLearning,
  getEnrolledCourses,
} from '../../data/courses.js'
import { notifications } from '../../data/notifications.js'

export default function StudentDashboard() {
  const enrolled = getEnrolledCourses()
  const completed = getCompletedCourses()
  const continueLearning = getContinueLearning()
  const recentNotifications = notifications.slice(0, 3)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">Welcome back, Alex. Pick up where you left off.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Enrolled courses" value={enrolled.length} icon={BookOpen} />
        <StatsCard title="Completed" value={completed.length} icon={CheckCircle2} trend="+1 this month" trendUp />
        <StatsCard title="In progress" value={continueLearning.length} icon={PlayCircle} />
        <StatsCard title="Notifications" value={notifications.filter((n) => !n.read).length} icon={Bell} />
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-slate-900">Continue learning</h2>
          <Link to="/dashboard/continue" className="text-sm font-medium text-brand-700 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {continueLearning.map((course) => (
            <div key={course.id} className="flex gap-4 rounded-xl border border-border bg-white p-4 shadow-sm">
              <img src={course.thumbnail} alt={course.title} className="h-20 w-32 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-medium text-slate-900">{course.title}</h3>
                <p className="mt-0.5 text-xs text-muted">{course.instructor}</p>
                <ProgressBar value={course.progress ?? 0} size="sm" className="mt-3" />
                <Link to={`/courses/${course.id}`} className="mt-3 inline-block">
                  <Button size="sm" variant="outline">
                    Resume
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <h2 className="mb-4 font-display text-lg font-semibold text-slate-900">Enrolled courses</h2>
          <div className="space-y-3">
            {enrolled.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-900">{course.title}</p>
                  <p className="text-xs text-muted">
                    {course.completed ? 'Completed' : `${course.progress ?? 0}% complete`}
                  </p>
                </div>
                <Link to={`/courses/${course.id}`}>
                  <Button size="sm" variant="ghost">
                    Open
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold text-slate-900">Recent notifications</h2>
            <Link to="/dashboard/notifications" className="text-sm font-medium text-brand-700 hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {recentNotifications.map((n) => (
              <NotificationItem key={n.id} notification={n} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
