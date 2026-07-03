import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AdvancedSearchForm() {
  const [formData, setFormData] = useState({
    query: '',
    category: 'all',
    sortBy: 'relevance',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Advanced Search
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dcfce7',
            color: '#166534',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          Search executed!
        </div>
      )}
      <Field.Root required className="park-field">
        <Field.Label className="park-label">Search Keywords</Field.Label>
        <Field.Input
          className="park-input"
          type="text"
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          placeholder="Search..."
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="park-field">
          <Field.Label className="park-label">Category</Field.Label>
          <select
            className="park-select"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="all">All Categories</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="users">Users</option>
          </select>
        </Field.Root>
        <Field.Root className="park-field">
          <Field.Label className="park-label">Sort By</Field.Label>
          <select
            className="park-select"
            value={formData.sortBy}
            onChange={(e) =>
              setFormData({ ...formData, sortBy: e.target.value })
            }
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </Field.Root>
      </div>
      <button type="submit" className="park-button">
        Execute Search
      </button>
    </form>
  )
}
