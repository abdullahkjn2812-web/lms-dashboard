import { Lock, PlayCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ModuleList({ modules, isPaidLocked = false }) {
  const [openId, setOpenId] = useState(modules[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {modules.map((mod) => {
        const isOpen = openId === mod.id
        return (
          <div key={mod.id} className="overflow-hidden rounded-xl border border-border bg-white">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : mod.id)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left hover:bg-slate-50"
            >
              <div>
                <p className="font-medium text-slate-900">{mod.title}</p>
                <p className="text-xs text-muted">{mod.lessons.length} lessons</p>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <ul className="border-t border-border divide-y divide-border">
                {mod.lessons.map((lesson) => {
                  const locked = isPaidLocked || lesson.locked
                  return (
                    <li
                      key={lesson.id}
                      className="flex items-center justify-between gap-3 px-4 py-3 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        {locked ? (
                          <Lock className="h-4 w-4 text-slate-400" />
                        ) : (
                          <PlayCircle className="h-4 w-4 text-brand-600" />
                        )}
                        <span className={locked ? 'text-slate-500' : 'text-slate-800'}>
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-xs text-muted">{lesson.duration}</span>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}
