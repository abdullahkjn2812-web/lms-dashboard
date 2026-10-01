export const suggestedQuestions = [
  'How do I enroll in a course?',
  'Can I get a refund?',
  'Where is my invoice?',
  'How do I reset my password?',
]

export const initialMessages = [
  {
    id: 'm1',
    role: 'assistant',
    content:
      'Hi! I am the LearnCorp support assistant. Ask me about courses, payments, or your account.',
    time: 'Just now',
  },
]

export const mockReplies = {
  enroll:
    'To enroll, open any course page and click “View Course”. Free courses unlock immediately; paid courses go through checkout.',
  refund:
    'Refunds are available within 14 days of purchase if less than 20% of the course has been completed. Visit Payments → Invoice for details.',
  invoice:
    'You can download invoices from Student Dashboard → Payments. Each completed payment has an Invoice button.',
  password:
    'Go to Profile → Change password, or use Forgot password on the Login page. You’ll receive a reset link by email.',
  default:
    'Thanks for your message. A support specialist can also help via Support in your dashboard. Typical response time is under 4 business hours.',
}

export function getMockReply(input) {
  const lower = input.toLowerCase()
  if (lower.includes('enroll') || lower.includes('access')) return mockReplies.enroll
  if (lower.includes('refund')) return mockReplies.refund
  if (lower.includes('invoice') || lower.includes('receipt')) return mockReplies.invoice
  if (lower.includes('password') || lower.includes('reset')) return mockReplies.password
  return mockReplies.default
}
