export default function ProgressBar({
  value,
  label,
  showPercent = true,
  size = 'md',
  className = '',
}) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div className={className}>
      {(label || showPercent) && (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          {label && <span className="font-medium text-slate-700">{label}</span>}
          {showPercent && <span className="text-muted">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-slate-100 ${size === 'sm' ? 'h-1.5' : 'h-2.5'}`}>
        <div
          className="h-full rounded-full bg-brand-600 transition-all duration-500"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
