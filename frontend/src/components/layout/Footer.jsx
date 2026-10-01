import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-800 text-white">
              <GraduationCap className="h-4 w-4" />
            </div>
            <span className="font-display font-semibold text-slate-900">LearnCorp</span>
          </div>
          <p className="mt-3 text-sm text-muted">
            The official learning portal for LearnCorp employees and partners.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/courses" className="hover:text-brand-700">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-brand-700">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Account</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/login" className="hover:text-brand-700">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-brand-700">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-brand-700">
                Student Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Learning Guidelines</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} LearnCorp. All rights reserved.
      </div>
    </footer>
  )
}
