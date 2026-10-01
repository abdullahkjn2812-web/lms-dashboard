import { Pencil, Star, Trash2 } from 'lucide-react'
import Button from '../ui/Button.jsx'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  )
}

export default function ReviewCard({ review, onEdit, onDelete }) {
  return (
    <article className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={review.userAvatar}
            alt={review.userName}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-slate-900">{review.userName}</p>
            <p className="text-xs text-muted">{review.courseTitle}</p>
          </div>
        </div>
        <Stars rating={review.rating} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.comment}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted">{review.date}</span>
        {review.editable && (
          <div className="flex gap-2">
            {onEdit && (
              <Button variant="ghost" size="sm" onClick={() => onEdit(review)}>
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Button>
            )}
            {onDelete && (
              <Button variant="ghost" size="sm" onClick={() => onDelete(review.id)}>
                <Trash2 className="h-3.5 w-3.5 text-red-500" />
                Delete
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
