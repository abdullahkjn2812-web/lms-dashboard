import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'

export default function SignupPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-800 text-white">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-slate-900">Create account</h1>
          <p className="mt-1 text-sm text-muted">Join the LearnCorp learning portal</p>
        </div>

        <form
          className="rounded-xl border border-border bg-white p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault()
            if (password !== confirm) {
              setError('Passwords do not match')
              return
            }
            setError('')
            navigate('/dashboard')
          }}
        >
          <div className="space-y-4">
            <Input label="Full name" placeholder="Alex Rivera" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input
              label="Email"
              type="email"
              placeholder="you@learncorp.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              label="Confirm password"
              type="password"
              placeholder="Repeat your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              error={error}
              required
            />
            <Button type="submit" fullWidth>
              Sign Up
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
