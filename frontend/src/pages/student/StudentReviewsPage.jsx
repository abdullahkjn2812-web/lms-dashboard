import { useState } from 'react'
import { Star } from 'lucide-react'
import ReviewCard from '../../components/reviews/ReviewCard.jsx'
import Modal from '../../components/ui/Modal.jsx'
import Button from '../../components/ui/Button.jsx'
import EmptyState from '../../components/ui/EmptyState.jsx'
import { studentReviews as initialReviews } from '../../data/reviews.js'
import { getEnrolledCourses } from '../../data/courses.js'

export default function StudentReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [courseId, setCourseId] = useState('')
  const enrolled = getEnrolledCourses()

  const openCreate = () => {
    setEditing(null)
    setRating(5)
    setComment('')
    setCourseId(enrolled[0]?.id ?? '')
    setModalOpen(true)
  }

  const openEdit = (review) => {
    setEditing(review)
    setRating(review.rating)
    setComment(review.comment)
    setCourseId(review.courseId)
    setModalOpen(true)
  }

  const saveReview = () => {
    const course = enrolled.find((c) => c.id === courseId)
    if (!course || !comment.trim()) return

    if (editing) {
      setReviews((prev) =>
        prev.map((r) =>
          r.id === editing.id ? { ...r, rating, comment, courseId, courseTitle: course.title } : r,
        ),
      )
    } else {
      setReviews((prev) => [
        {
          id: `r-${Date.now()}`,
          courseId,
          courseTitle: course.title,
          userName: 'Alex Rivera',
          userAvatar: 'https://i.pravatar.cc/80?u=alex',
          rating,
          comment,
          date: new Date().toISOString().slice(0, 10),
          editable: true,
        },
        ...prev,
      ])
    }
    setModalOpen(false)
  }

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-slate-900">Reviews</h1>
          <p className="mt-1 text-sm text-muted">Add, edit, or delete your course reviews.</p>
        </div>
        <Button onClick={openCreate}>Add review</Button>
      </div>

      {reviews.length === 0 ? (
        <EmptyState
          title="No reviews yet"
          description="Share feedback on courses you have completed."
          action={<Button onClick={openCreate}>Write a review</Button>}
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} onEdit={openEdit} onDelete={deleteReview} />
          ))}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'Edit review' : 'Add review'}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveReview}>{editing ? 'Save changes' : 'Submit review'}</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-slate-700">Course</span>
            <select
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            >
              {enrolled.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </label>

          <div>
            <span className="mb-1.5 block text-sm font-medium text-slate-700">Rating</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} type="button" onClick={() => setRating(i + 1)} aria-label={`${i + 1} stars`}>
                  <Star className={`h-6 w-6 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                </button>
              ))}
            </div>
          </div>

          <label className="block text-sm">
            <span className="mb-1.5 block font-medium text-slate-700">Review</span>
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="Share your experience..."
            />
          </label>
        </div>
      </Modal>
    </div>
  )
}
