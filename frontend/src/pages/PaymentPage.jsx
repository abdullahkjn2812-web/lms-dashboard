import { useNavigate, useParams } from 'react-router-dom'
import { CreditCard, Lock } from 'lucide-react'
import { useState } from 'react'
import { getCourseById } from '../data/courses.js'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'
import ErrorState from '../components/ui/ErrorState.jsx'
import Badge from '../components/ui/Badge.jsx'

export default function PaymentPage() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = courseId ? getCourseById(courseId) : undefined
  const [method, setMethod] = useState('card')
  const [done, setDone] = useState(false)

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <ErrorState title="Course not found" message="Unable to start checkout for this course." />
      </div>
    )
  }

  if (course.price === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-semibold">This course is free</h1>
        <p className="mt-2 text-muted">No payment is required.</p>
        <Button className="mt-6" onClick={() => navigate(`/courses/${course.id}`)}>
          Go to course
        </Button>
      </div>
    )
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-8">
          <h1 className="font-display text-2xl font-semibold text-emerald-800">Payment successful</h1>
          <p className="mt-2 text-sm text-emerald-700">Access to {course.title} has been activated (mock).</p>
          <Button className="mt-6" onClick={() => navigate('/dashboard/courses')}>
            Go to My Courses
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-2xl font-semibold text-slate-900">Checkout</h1>
      <p className="mt-1 text-sm text-muted">Complete your purchase to unlock this course.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <section className="rounded-xl border border-border bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">Payment method</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <MethodCard
                active={method === 'card'}
                onClick={() => setMethod('card')}
                title="Credit / Debit Card"
                icon={<CreditCard className="h-5 w-5" />}
              />
              <MethodCard
                active={method === 'paypal'}
                onClick={() => setMethod('paypal')}
                title="PayPal"
                icon={<span className="text-sm font-bold text-blue-700">PayPal</span>}
              />
            </div>

            {method === 'card' && (
              <div className="mt-5 space-y-4">
                <Input label="Cardholder name" placeholder="Alex Rivera" />
                <Input label="Card number" placeholder="4242 4242 4242 4242" />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Expiry" placeholder="09/28" />
                  <Input label="CVC" placeholder="123" />
                </div>
              </div>
            )}

            {method === 'paypal' && (
              <p className="mt-5 rounded-lg bg-slate-50 px-4 py-3 text-sm text-muted">
                You will be redirected to PayPal to complete payment (UI mock only).
              </p>
            )}
          </section>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-900">Order summary</h2>
            <div className="mt-4 flex gap-3">
              <img src={course.thumbnail} alt={course.title} className="h-16 w-24 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-slate-900">{course.title}</p>
                <p className="text-xs text-muted">{course.instructor}</p>
                <Badge variant="info" className="mt-1">
                  {course.level}
                </Badge>
              </div>
            </div>
            <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <Row label="Course price" value={`$${course.price.toFixed(2)}`} />
              <Row label="Tax" value="$0.00" />
              <Row label="Total" value={`$${course.price.toFixed(2)}`} bold />
            </div>
            <Button fullWidth className="mt-5" onClick={() => setDone(true)}>
              <Lock className="h-4 w-4" />
              Purchase — ${course.price}
            </Button>
            <p className="mt-3 text-center text-xs text-muted">Mock checkout — no real payment is processed.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function MethodCard({ active, onClick, title, icon }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition ${
        active ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' : 'border-border hover:bg-slate-50'
      }`}
    >
      {icon}
      <span className="font-medium text-slate-800">{title}</span>
    </button>
  )
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-semibold text-slate-900' : 'text-slate-600'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
