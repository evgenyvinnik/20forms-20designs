import { useState } from 'react'

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
    <form onSubmit={handleSubmit} className="gluestack-form">
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
        Advanced Search
      </h2>
      {submitted && (
        <div
          style={{
            padding: '0.75rem 1rem',
            background: '#dbeafe',
            color: '#1e40af',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
          }}
        >
          Search executed!
        </div>
      )}
      <div className="gluestack-field">
        <label className="gluestack-label">Search Keywords</label>
        <input
          className="gluestack-input"
          type="text"
          required
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
          placeholder="Search..."
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="gluestack-field">
          <label className="gluestack-label">Category</label>
          <select
            className="gluestack-select"
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
        </div>
        <div className="gluestack-field">
          <label className="gluestack-label">Sort By</label>
          <select
            className="gluestack-select"
            value={formData.sortBy}
            onChange={(e) =>
              setFormData({ ...formData, sortBy: e.target.value })
            }
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
      <button type="submit" className="gluestack-button">
        Execute Search
      </button>
    </form>
  )
}
