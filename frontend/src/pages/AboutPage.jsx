import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-slate-900">About LearnCorp LMS</h1>
      <p className="mt-4 leading-relaxed text-muted">
        LearnCorp LMS is the official company learning portal. Unlike open marketplaces, every course here is
        created and maintained by LearnCorp teams for employees and partners.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Our mission is to make internal expertise easy to find, track, and apply — from onboarding fundamentals
        to advanced specialty tracks.
      </p>
      <div className="mt-8">
        <Link to="/courses">
          <Button>Explore courses</Button>
        </Link>
      </div>
    </div>
  )
}
