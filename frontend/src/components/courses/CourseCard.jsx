import { Link } from 'react-router-dom'
import { Clock, Eye, Star } from 'lucide-react'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

export default function CourseCard({ course }) {
  const isFree = course.price === 0

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <Link to={`/courses/${course.id}`} className="relative block aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3">
          {isFree ? <Badge variant="free">Free</Badge> : <Badge variant="info">${course.price}</Badge>}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-2 text-xs text-muted">
          <span>{course.category}</span>
          <span>·</span>
          <span>{course.level}</span>
        </div>
        <Link to={`/courses/${course.id}`}>
          <h3 className="font-display text-base font-semibold text-slate-900 transition group-hover:text-brand-700 line-clamp-2">
            {course.title}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted">{course.shortDescription}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {course.rating}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {course.views.toLocaleString()}
          </span>
        </div>
        <div className="mt-4">
          <Link to={`/courses/${course.id}`}>
            <Button variant="outline" fullWidth size="sm">
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
