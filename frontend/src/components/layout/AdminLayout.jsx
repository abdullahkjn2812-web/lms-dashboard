import {
  LayoutDashboard,
  Users,
  BookOpen,
  CreditCard,
  Star,
  BarChart3,
  Bell,
  LifeBuoy,
  ScrollText,
} from 'lucide-react'
import DashboardLayout from './DashboardLayout.jsx'

const links = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/courses', label: 'Courses', icon: BookOpen },
  { to: '/admin/payments', label: 'Payments', icon: CreditCard },
  { to: '/admin/reviews', label: 'Reviews', icon: Star },
  { to: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/admin/notifications', label: 'Notifications', icon: Bell },
  { to: '/admin/support', label: 'Support', icon: LifeBuoy },
  { to: '/admin/audit-logs', label: 'Audit Logs', icon: ScrollText },
]

export default function AdminLayout() {
  return (
    <DashboardLayout title="Admin Console" subtitle="LearnCorp LMS" links={links} homeTo="/" />
  )
}
