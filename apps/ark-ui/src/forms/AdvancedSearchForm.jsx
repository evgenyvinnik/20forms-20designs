import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AdvancedSearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
        <Field.Label className="ark-label">Search query</Field.Label>
        <Field.Input className="ark-input" name="query" type="text" required />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="ark-field">
          <Field.Label className="ark-label">Category</Field.Label>
          <select className="ark-select" name="category" defaultValue="all">
            <option value="all">All</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="people">People</option>
          </select>
        </Field.Root>
        <Field.Root className="ark-field">
          <Field.Label className="ark-label">Sort by</Field.Label>
          <select className="ark-select" name="sort" defaultValue="relevance">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </Field.Root>
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="ark-field">
          <Field.Label className="ark-label">Date from</Field.Label>
          <Field.Input className="ark-input" name="dateFrom" type="date" />
        </Field.Root>
        <Field.Root className="ark-field">
          <Field.Label className="ark-label">Date to</Field.Label>
          <Field.Input className="ark-input" name="dateTo" type="date" />
        </Field.Root>
      </div>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        <input type="checkbox" name="includeArchived" />
        Include archived
      </label>
      <button type="submit" className="ark-button">
        Search
      </button>
    </form>
  )
}
