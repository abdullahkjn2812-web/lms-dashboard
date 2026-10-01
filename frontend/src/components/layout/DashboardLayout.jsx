import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GraduationCap, Menu } from 'lucide-react'
import Sidebar from './Sidebar.jsx'
import ChatWidget from '../chat/ChatWidget.jsx'

export default function DashboardLayout({ title, subtitle, links, homeTo }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-canvas">
      <Sidebar
        title={title}
        subtitle={subtitle}
        links={links}
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Link
            to={homeTo}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
          >
            <GraduationCap className="h-4 w-4" />
            Back to portal
          </Link>
        }
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-white/90 px-4 backdrop-blur-md lg:px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold text-slate-900 lg:hidden">{title}</p>
          </div>
          <Link to="/dashboard/profile" className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/80?u=alex"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover ring-2 ring-border"
            />
          </Link>
        </header>
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
      <ChatWidget />
    </div>
  )
}
