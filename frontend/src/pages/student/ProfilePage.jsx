import { useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Input from '../../components/ui/Input.jsx'
import { currentUser } from '../../data/users.js'

export default function ProfilePage() {
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [saved, setSaved] = useState(false)

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Profile</h1>
        <p className="mt-1 text-sm text-muted">Manage your account settings.</p>
      </div>

      <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="h-20 w-20 rounded-full object-cover ring-2 ring-border"
          />
          <div>
            <p className="font-semibold text-slate-900">{currentUser.name}</p>
            <p className="text-sm text-muted">
              {currentUser.title} · {currentUser.department}
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Change photo
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-slate-900">Account details</h2>
        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSaved(true)
            window.setTimeout(() => setSaved(false), 2000)
          }}
        >
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button type="submit">Save changes</Button>
          {saved && <p className="text-sm text-emerald-600">Profile updated (mock).</p>}
        </form>
      </section>

      <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-slate-900">Change password</h2>
        <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input label="Current password" type="password" placeholder="••••••••" />
          <Input label="New password" type="password" placeholder="••••••••" />
          <Input label="Confirm new password" type="password" placeholder="••••••••" />
          <Button type="submit" variant="outline">
            Update password
          </Button>
        </form>
      </section>

      <section className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-slate-900">Account settings</h2>
        <div className="mt-4 space-y-3">
          <Toggle label="Email me about new courses" defaultChecked />
          <Toggle label="Weekly learning digest" defaultChecked />
          <Toggle label="Marketing communications" />
        </div>
      </section>
    </div>
  )
}

function Toggle({ label, defaultChecked }) {
  const [on, setOn] = useState(!!defaultChecked)
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-border px-4 py-3">
      <span className="text-sm text-slate-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={`relative h-6 w-11 rounded-full transition ${on ? 'bg-brand-600' : 'bg-slate-200'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
            on ? 'translate-x-5' : ''
          }`}
        />
      </button>
    </label>
  )
}
