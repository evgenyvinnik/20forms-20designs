import { useState } from 'react'
import { Input, Button } from '@heroui/react'

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
    <form onSubmit={handleSubmit} className="heroui-form">
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
      <div className="heroui-field">
        <label className="heroui-label">Search Keywords</label>
        <Input
          isRequired
          type="text"
          value={formData.query}
          onValueChange={(val) => setFormData({ ...formData, query: val })}
          placeholder="Search..."
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <div className="heroui-field">
          <label className="heroui-label">Category</label>
          <select
            className="heroui-select"
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
        <div className="heroui-field">
          <label className="heroui-label">Sort By</label>
          <select
            className="heroui-select"
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
      <Button type="submit" color="primary">
        Execute Search
      </Button>
    </form>
  )
}
