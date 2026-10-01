import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Shield, Users, Star } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import CourseCard from '../components/courses/CourseCard.jsx'
import ReviewCard from '../components/reviews/ReviewCard.jsx'
import {
  getFeaturedCourses,
  getFreeCourses,
  getPaidCourses,
  getPopularCourses,
} from '../data/courses.js'
import { reviews } from '../data/reviews.js'

export default function HomePage() {
  const featured = getFeaturedCourses().slice(0, 3)
  const free = getFreeCourses().slice(0, 3)
  const paid = getPaidCourses().slice(0, 3)
  const popular = getPopularCourses().slice(0, 4)
  const homeReviews = reviews.slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-medium text-brand-700">LearnCorp Internal Learning Portal</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Grow your skills with company-curated courses
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Access engineering, product, design, and leadership training built exclusively for
              LearnCorp teams — free and premium tracks in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses">
                <Button size="lg">
                  Browse Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg">
                  Create Account
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-brand-600" /> 8+ courses
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-600" /> 2.8k learners
              </span>
              <span className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-600" /> Company verified
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop"
                alt="Team learning together"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-white p-4 shadow-md sm:block">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.8 average rating
              </div>
              <p className="mt-1 text-xs text-muted">From internal learner reviews</p>
            </div>
          </div>
        </div>
      </section>

      <Section title="Featured courses" subtitle="Hand-picked programs recommended for this quarter." actionTo="/courses">
        <CourseGrid courses={featured} />
      </Section>

      <Section
        title="Free courses"
        subtitle="Start learning immediately with no purchase required."
        actionTo="/courses"
        tone="muted"
      >
        <CourseGrid courses={free} />
      </Section>

      <Section
        title="Premium courses"
        subtitle="In-depth tracks with certificates and advanced modules."
        actionTo="/courses"
      >
        <CourseGrid courses={paid} />
      </Section>

      <Section
        title="Popular this month"
        subtitle="Most viewed by LearnCorp employees."
        actionTo="/courses"
        tone="muted"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Section>

      <Section title="What learners say" subtitle="Recent feedback from across teams.">
        <div className="grid gap-5 md:grid-cols-3">
          {homeReviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </Section>

      <section className="border-t border-border bg-brand-800">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Ready to start your learning path?
            </h2>
            <p className="mt-2 text-brand-100">Sign in with your LearnCorp account to track progress and enroll.</p>
          </div>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-brand-800 hover:bg-brand-50">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function Section({ title, subtitle, actionTo, children, tone = 'default' }) {
  return (
    <section className={tone === 'muted' ? 'bg-slate-50/70' : 'bg-white'}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          </div>
          {actionTo && (
            <Link to={actionTo} className="text-sm font-medium text-brand-700 hover:underline">
              View all
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

function CourseGrid({ courses }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  )
}
