import { useMemo, useState } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import CourseCard from '../components/courses/CourseCard.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import { courses, categories, levels } from '../data/courses.js'

const PAGE_SIZE = 6

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [price, setPrice] = useState('all')
  const [category, setCategory] = useState('all')
  const [level, setLevel] = useState('all')
  const [rating, setRating] = useState(0)
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
      const matchesPrice = price === 'all' || (price === 'free' ? c.price === 0 : c.price > 0)
      const matchesCategory = category === 'all' || c.category === category
      const matchesLevel = level === 'all' || c.level === level
      const matchesRating = c.rating >= rating
      return matchesSearch && matchesPrice && matchesCategory && matchesLevel && matchesRating
    })
  }, [search, price, category, level, rating])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const resetFilters = () => {
    setSearch('')
    setPrice('all')
    setCategory('all')
    setLevel('all')
    setRating(0)
    setPage(1)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Courses</h1>
        <p className="mt-1 text-muted">Browse all LearnCorp training programs.</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPage(1)
            }}
            placeholder="Search courses..."
            className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
        <button type="button" onClick={resetFilters} className="text-sm font-medium text-brand-700 hover:underline">
          Reset filters
        </button>
      </div>

      <div className="mb-8 grid gap-3 rounded-xl border border-border bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        <FilterSelect
          label="Price"
          value={price}
          onChange={(v) => {
            setPrice(v)
            setPage(1)
          }}
          options={[
            { value: 'all', label: 'All' },
            { value: 'free', label: 'Free' },
            { value: 'paid', label: 'Paid' },
          ]}
        />
        <FilterSelect
          label="Category"
          value={category}
          onChange={(v) => {
            setCategory(v)
            setPage(1)
          }}
          options={[{ value: 'all', label: 'All categories' }, ...categories.map((c) => ({ value: c, label: c }))]}
        />
        <FilterSelect
          label="Level"
          value={level}
          onChange={(v) => {
            setLevel(v)
            setPage(1)
          }}
          options={[{ value: 'all', label: 'All levels' }, ...levels.map((l) => ({ value: l, label: l }))]}
        />
        <FilterSelect
          label="Min rating"
          value={String(rating)}
          onChange={(v) => {
            setRating(Number(v))
            setPage(1)
          }}
          options={[
            { value: '0', label: 'Any rating' },
            { value: '4', label: '4.0+' },
            { value: '4.5', label: '4.5+' },
            { value: '4.8', label: '4.8+' },
          ]}
        />
      </div>

      <p className="mb-4 text-sm text-muted">
        Showing {pageItems.length} of {filtered.length} courses
      </p>

      {pageItems.length === 0 ? (
        <EmptyState
          title="No courses match your filters"
          description="Try adjusting search or filter criteria."
          action={
            <button type="button" onClick={resetFilters} className="text-sm font-medium text-brand-700">
              Clear filters
            </button>
          }
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => p - 1)}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i + 1)}
              className={`h-9 w-9 rounded-lg text-sm font-medium ${
                currentPage === i + 1
                  ? 'bg-brand-700 text-white'
                  : 'border border-border bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-white px-3 py-2 text-sm disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}
