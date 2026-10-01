export const courses = [
  {
    id: 'c1',
    title: 'React Fundamentals for Engineers',
    shortDescription: 'Build production-ready React apps with modern patterns and tooling.',
    description:
      'Master React from the ground up with LearnCorp Engineering. This course covers components, hooks, state management, routing, and performance best practices used across our product teams.',
    summary:
      'A hands-on path from JSX to scalable component architecture. Ideal for engineers joining frontend squads.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
    instructor: 'Sarah Chen',
    company: 'LearnCorp Engineering',
    rating: 4.8,
    reviewCount: 342,
    views: 18420,
    duration: '12h 30m',
    level: 'Beginner',
    category: 'Engineering',
    price: 0,
    isFeatured: true,
    isPopular: true,
    enrolled: true,
    progress: 65,
    completed: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Getting Started',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '8m', locked: false },
          { id: 'l2', title: 'React Setup', duration: '15m', locked: false },
          { id: 'l3', title: 'Components', duration: '22m', locked: false },
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — Hooks Deep Dive',
        lessons: [
          { id: 'l4', title: 'useState & useEffect', duration: '28m', locked: false },
          { id: 'l5', title: 'Custom Hooks', duration: '20m', locked: false },
          { id: 'l6', title: 'Performance Hooks', duration: '18m', locked: false },
        ],
      },
      {
        id: 'm3',
        title: 'Module 3 — Building Apps',
        lessons: [
          { id: 'l7', title: 'Routing Basics', duration: '25m', locked: false },
          { id: 'l8', title: 'Forms & Validation', duration: '30m', locked: false },
        ],
      },
    ],
  },
  {
    id: 'c2',
    title: 'Advanced TypeScript Patterns',
    shortDescription: 'Type-safe architectures used in large LearnCorp codebases.',
    description:
      'Go beyond basics into generics, conditional types, utility types, and domain modeling patterns that power LearnCorp services.',
    summary: 'Level up type safety and reduce runtime bugs with advanced TypeScript techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop',
    instructor: 'Marcus Webb',
    company: 'LearnCorp Engineering',
    rating: 4.9,
    reviewCount: 218,
    views: 12450,
    duration: '9h 15m',
    level: 'Advanced',
    category: 'Engineering',
    price: 79,
    isFeatured: true,
    isPopular: true,
    enrolled: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Type System Mastery',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '10m', locked: true },
          { id: 'l2', title: 'Generics in Depth', duration: '24m', locked: true },
          { id: 'l3', title: 'Conditional Types', duration: '26m', locked: true },
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — Domain Modeling',
        lessons: [
          { id: 'l4', title: 'Branded Types', duration: '18m', locked: true },
          { id: 'l5', title: 'API Contracts', duration: '22m', locked: true },
        ],
      },
    ],
  },
  {
    id: 'c3',
    title: 'Product Discovery Essentials',
    shortDescription: 'How LearnCorp product teams validate ideas before shipping.',
    description:
      'Learn our discovery framework: problem framing, customer interviews, opportunity scoring, and experiment design.',
    summary: 'A practical playbook for PMs and engineers collaborating on discovery.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    instructor: 'Priya Nair',
    company: 'LearnCorp Product',
    rating: 4.7,
    reviewCount: 156,
    views: 9820,
    duration: '6h 45m',
    level: 'Intermediate',
    category: 'Product',
    price: 49,
    isFeatured: true,
    isPopular: false,
    enrolled: true,
    progress: 100,
    completed: true,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Framing Problems',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '12m', locked: true },
          { id: 'l2', title: 'Opportunity Mapping', duration: '20m', locked: true },
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — Validation',
        lessons: [
          { id: 'l3', title: 'Interview Scripts', duration: '18m', locked: true },
          { id: 'l4', title: 'Running Experiments', duration: '25m', locked: true },
        ],
      },
    ],
  },
  {
    id: 'c4',
    title: 'Design Systems at Scale',
    shortDescription: 'Build and maintain a cohesive component library.',
    description:
      'Explore how LearnCorp Design ships accessible, themeable components used across web and mobile products.',
    summary: 'Tokens, documentation, contribution workflows, and accessibility standards.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
    instructor: 'Elena Park',
    company: 'LearnCorp Design',
    rating: 4.6,
    reviewCount: 98,
    views: 7640,
    duration: '8h 20m',
    level: 'Intermediate',
    category: 'Design',
    price: 59,
    isFeatured: false,
    isPopular: true,
    enrolled: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Foundations',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '9m', locked: true },
          { id: 'l2', title: 'Design Tokens', duration: '21m', locked: true },
          { id: 'l3', title: 'Accessibility Basics', duration: '19m', locked: true },
        ],
      },
    ],
  },
  {
    id: 'c5',
    title: 'Leadership for Tech Leads',
    shortDescription: 'Grow from senior IC into an effective tech lead.',
    description:
      'Communication, prioritization, mentoring, and stakeholder management tailored to LearnCorp engineering culture.',
    summary: 'Practical leadership skills for first-time and aspiring tech leads.',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=450&fit=crop',
    instructor: 'David Okonkwo',
    company: 'LearnCorp Leadership',
    rating: 4.8,
    reviewCount: 187,
    views: 11200,
    duration: '7h 10m',
    level: 'Intermediate',
    category: 'Leadership',
    price: 89,
    isFeatured: true,
    isPopular: true,
    enrolled: true,
    progress: 32,
    completed: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Role Shift',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '11m', locked: true },
          { id: 'l2', title: 'From IC to Lead', duration: '23m', locked: true },
        ],
      },
      {
        id: 'm2',
        title: 'Module 2 — People & Delivery',
        lessons: [
          { id: 'l3', title: '1:1 Conversations', duration: '20m', locked: true },
          { id: 'l4', title: 'Unblocking Teams', duration: '17m', locked: true },
        ],
      },
    ],
  },
  {
    id: 'c6',
    title: 'Enterprise Sales Playbook',
    shortDescription: 'LearnCorp’s methodology for complex B2B deals.',
    description:
      'Pipeline hygiene, discovery calls, multi-threaded selling, and closing strategies used by our top account executives.',
    summary: 'A structured approach to enterprise sales cycles at LearnCorp.',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop',
    instructor: 'Anita Brooks',
    company: 'LearnCorp Sales',
    rating: 4.5,
    reviewCount: 74,
    views: 5430,
    duration: '5h 40m',
    level: 'Beginner',
    category: 'Sales',
    price: 0,
    isFeatured: false,
    isPopular: false,
    enrolled: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Foundations',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '10m', locked: false },
          { id: 'l2', title: 'Ideal Customer Profile', duration: '16m', locked: false },
          { id: 'l3', title: 'Discovery Framework', duration: '22m', locked: false },
        ],
      },
    ],
  },
  {
    id: 'c7',
    title: 'Operations Excellence',
    shortDescription: 'Processes and metrics that keep LearnCorp running smoothly.',
    description:
      'Incident response, SLA management, capacity planning, and continuous improvement for operations teams.',
    summary: 'Operational rigor with practical templates and case studies.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    instructor: 'James Liu',
    company: 'LearnCorp Operations',
    rating: 4.4,
    reviewCount: 61,
    views: 4210,
    duration: '4h 55m',
    level: 'Beginner',
    category: 'Operations',
    price: 39,
    isFeatured: false,
    isPopular: false,
    enrolled: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Core Ops',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '8m', locked: true },
          { id: 'l2', title: 'SLA Design', duration: '18m', locked: true },
        ],
      },
    ],
  },
  {
    id: 'c8',
    title: 'UI Motion & Microinteractions',
    shortDescription: 'Craft polished motion that guides users without distraction.',
    description:
      'Principles of purposeful motion, timing curves, and implementation patterns used in LearnCorp product UI.',
    summary: 'Design and engineer delightful, accessible microinteractions.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop',
    instructor: 'Elena Park',
    company: 'LearnCorp Design',
    rating: 4.7,
    reviewCount: 112,
    views: 8910,
    duration: '5h 25m',
    level: 'Intermediate',
    category: 'Design',
    price: 0,
    isFeatured: false,
    isPopular: true,
    enrolled: true,
    progress: 18,
    completed: false,
    modules: [
      {
        id: 'm1',
        title: 'Module 1 — Motion Basics',
        lessons: [
          { id: 'l1', title: 'Introduction', duration: '9m', locked: false },
          { id: 'l2', title: 'Timing & Easing', duration: '20m', locked: false },
          { id: 'l3', title: 'Feedback Patterns', duration: '17m', locked: false },
        ],
      },
    ],
  },
]

export const categories = ['Engineering', 'Product', 'Design', 'Leadership', 'Sales', 'Operations']
export const levels = ['Beginner', 'Intermediate', 'Advanced']

export function getCourseById(id) {
  return courses.find((c) => c.id === id)
}

export function getFeaturedCourses() {
  return courses.filter((c) => c.isFeatured)
}

export function getPopularCourses() {
  return courses.filter((c) => c.isPopular)
}

export function getFreeCourses() {
  return courses.filter((c) => c.price === 0)
}

export function getPaidCourses() {
  return courses.filter((c) => c.price > 0)
}

export function getEnrolledCourses() {
  return courses.filter((c) => c.enrolled)
}

export function getCompletedCourses() {
  return courses.filter((c) => c.completed)
}

export function getContinueLearning() {
  return courses.filter((c) => c.enrolled && !c.completed && (c.progress ?? 0) > 0)
}
