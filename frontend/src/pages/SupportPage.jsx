import { MessageSquare, Mail, Clock } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Support</h1>
        <p className="mt-2 text-muted">Need help with courses, payments, or your account?</p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {[
          { icon: MessageSquare, title: 'AI Chat', desc: 'Use the chat button for instant answers.' },
          { icon: Mail, title: 'Email', desc: 'support@learncorp.com' },
          { icon: Clock, title: 'Hours', desc: 'Mon–Fri, 9am–6pm local time' },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-sm">
            <item.icon className="h-5 w-5 text-brand-700" />
            <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>

      <form
        className="mx-auto max-w-xl space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="font-display text-lg font-semibold text-slate-900">Send a message</h2>
        <Input label="Subject" placeholder="How can we help?" />
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-700">Message</span>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
            placeholder="Describe your issue..."
          />
        </label>
        <Button type="submit">Submit ticket</Button>
      </form>
    </div>
  )
}
