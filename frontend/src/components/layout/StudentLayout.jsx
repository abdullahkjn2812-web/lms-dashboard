import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  CreditCard,
  Star,
  Bell,
  User,
  LifeBuoy,
  LogOut,
} from 'lucide-react'
import DashboardLayout from './DashboardLayout.jsx'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/dashboard/courses', label: 'My Courses', icon: BookOpen },
  { to: '/dashboard/continue', label: 'Continue Learning', icon: PlayCircle },
  { to: '/dashboard/payments', label: 'Payments', icon: CreditCard },
  { to: '/dashboard/reviews', label: 'Reviews', icon: Star },
  { to: '/dashboard/notifications', label: 'Notifications', icon: Bell },
  { to: '/dashboard/profile', label: 'Profile', icon: User },
  { to: '/dashboard/support', label: 'Support', icon: LifeBuoy },
  { to: '/login', label: 'Logout', icon: LogOut },
]

export default function StudentLayout() {
  return (
    <DashboardLayout title="Student Hub" subtitle="LearnCorp LMS" links={links} homeTo="/" />
  )
}
