import { Link, useParams } from 'react-router-dom'
import { Clock, Eye, Star, Users, BarChart3 } from 'lucide-react'
import { getCourseById } from '../data/courses.js'
import ModuleList from '../components/courses/ModuleList.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import ErrorState from '../components/ui/ErrorState.jsx'

export default function CourseDetailsPage() {
  const { id } = useParams()
  const course = id ? getCourseById(id) : undefined

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <ErrorState title="Course not found" message="This course does not exist or may have been removed." />
        <div className="mt-6 text-center">
          <Link to="/courses">
            <Button variant="outline">Back to courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  const isFree = course.price === 0
  const isLocked = !isFree && !course.enrolled

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img src={course.thumbnail} alt={course.title} className="aspect-video w-full object-cover" />
          </div>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="info">{course.category}</Badge>
              <Badge>{course.level}</Badge>
              {isFree ? <Badge variant="free">Free</Badge> : <Badge variant="warning">${course.price}</Badge>}
            </div>
            <h1 className="mt-3 font-display text-3xl font-semibold text-slate-900">{course.title}</h1>
            <p className="mt-2 text-muted">{course.description}</p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {course.rating} ({course.reviewCount} reviews)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                {course.views.toLocaleString()} views
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="h-4 w-4" />
                {course.level}
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-border bg-white p-5 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-slate-900">Course summary</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.summary}</p>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 font-display text-lg font-semibold text-slate-900">Course content</h2>
            {isLocked && (
              <p className="mb-3 rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                Lessons are locked. Purchase this course to unlock all videos.
              </p>
            )}
            <ModuleList modules={course.modules} isPaidLocked={isLocked} />
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-border bg-white p-5 shadow-sm">
            <div className="mb-4">
              {isFree ? (
                <p className="font-display text-3xl font-semibold text-emerald-600">Free</p>
              ) : (
                <p className="font-display text-3xl font-semibold text-slate-900">${course.price}</p>
              )}
            </div>

            {course.enrolled ? (
              <Link to="/dashboard/continue">
                <Button fullWidth>Continue Learning</Button>
              </Link>
            ) : isFree ? (
              <Link to="/dashboard/courses">
                <Button fullWidth>Enroll for Free</Button>
              </Link>
            ) : (
              <Link to={`/payment/${course.id}`}>
                <Button fullWidth>Buy Course</Button>
              </Link>
            )}

            <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-slate-400" />
                <div>
                  <p className="font-medium text-slate-900">{course.instructor}</p>
                  <p className="text-xs text-muted">{course.company}</p>
                </div>
              </div>
              <MetaRow label="Duration" value={course.duration} />
              <MetaRow label="Level" value={course.level} />
              <MetaRow label="Category" value={course.category} />
              <MetaRow label="Views" value={course.views.toLocaleString()} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function MetaRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  )
}
