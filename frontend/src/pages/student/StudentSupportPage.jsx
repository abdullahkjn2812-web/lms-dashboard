import Button from '../../components/ui/Button.jsx'
import Input from '../../components/ui/Input.jsx'

export default function StudentSupportPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-900">Support</h1>
        <p className="mt-1 text-sm text-muted">
          Open a ticket or use the AI chat in the corner for quick answers.
        </p>
      </div>
      <form
        className="space-y-4 rounded-xl border border-border bg-white p-6 shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input label="Subject" placeholder="Invoice download issue" />
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-slate-700">Message</span>
          <textarea
            rows={5}
            className="w-full rounded-lg border border-border px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
            placeholder="Describe your issue..."
          />
        </label>
        <Button type="submit">Submit ticket</Button>
      </form>
    </div>
  )
}
