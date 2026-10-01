import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout.jsx'
import StudentLayout from './components/layout/StudentLayout.jsx'
import AdminLayout from './components/layout/AdminLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import CourseDetailsPage from './pages/CourseDetailsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import PaymentPage from './pages/PaymentPage.jsx'
import StudentDashboard from './pages/student/StudentDashboard.jsx'
import MyCoursesPage from './pages/student/MyCoursesPage.jsx'
import ContinueLearningPage from './pages/student/ContinueLearningPage.jsx'
import StudentPaymentsPage from './pages/student/StudentPaymentsPage.jsx'
import StudentReviewsPage from './pages/student/StudentReviewsPage.jsx'
import StudentNotificationsPage from './pages/student/StudentNotificationsPage.jsx'
import ProfilePage from './pages/student/ProfilePage.jsx'
import StudentSupportPage from './pages/student/StudentSupportPage.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminUsersPage from './pages/admin/AdminUsersPage.jsx'
import AdminCoursesPage from './pages/admin/AdminCoursesPage.jsx'
import AdminPaymentsPage from './pages/admin/AdminPaymentsPage.jsx'
import AdminReviewsPage from './pages/admin/AdminReviewsPage.jsx'
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage.jsx'
import AdminNotificationsPage from './pages/admin/AdminNotificationsPage.jsx'
import AdminSupportPage from './pages/admin/AdminSupportPage.jsx'
import AdminAuditLogsPage from './pages/admin/AdminAuditLogsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<Navigate to="/signup" replace />} />
        <Route path="/payment/:courseId" element={<PaymentPage />} />
      </Route>

      <Route path="/dashboard" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="courses" element={<MyCoursesPage />} />
        <Route path="continue" element={<ContinueLearningPage />} />
        <Route path="payments" element={<StudentPaymentsPage />} />
        <Route path="reviews" element={<StudentReviewsPage />} />
        <Route path="notifications" element={<StudentNotificationsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="support" element={<StudentSupportPage />} />
      </Route>

      <Route path="/profile" element={<Navigate to="/dashboard/profile" replace />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="courses" element={<AdminCoursesPage />} />
        <Route path="payments" element={<AdminPaymentsPage />} />
        <Route path="reviews" element={<AdminReviewsPage />} />
        <Route path="analytics" element={<AdminAnalyticsPage />} />
        <Route path="notifications" element={<AdminNotificationsPage />} />
        <Route path="support" element={<AdminSupportPage />} />
        <Route path="audit-logs" element={<AdminAuditLogsPage />} />
      </Route>
    </Routes>
  )
}
