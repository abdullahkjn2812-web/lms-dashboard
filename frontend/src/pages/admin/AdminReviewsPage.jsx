import ReviewCard from '../../components/reviews/ReviewCard.jsx'
import { reviews } from '../../data/reviews.js'

export default function AdminReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Reviews</h1>
        <p className="mt-1 text-sm text-muted">Learner feedback across all courses.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
