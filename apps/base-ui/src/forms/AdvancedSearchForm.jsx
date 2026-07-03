import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function AdvancedSearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="base-form">
      <Field.Root required className="base-field">
        <Field.Label className="base-label">Search query</Field.Label>
        <Field.Control
          className="base-input"
          name="query"
          type="text"
          required
        />
      </Field.Root>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="base-field">
          <Field.Label className="base-label">Category</Field.Label>
          <select className="base-select" name="category" defaultValue="all">
            <option value="all">All categories</option>
            <option value="docs">Documentation</option>
            <option value="blog">Blog posts</option>
          </select>
        </Field.Root>
        <Field.Root className="base-field">
          <Field.Label className="base-label">Sort by</Field.Label>
          <select
            className="base-select"
            name="sortBy"
            defaultValue="relevance"
          >
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
          </select>
        </Field.Root>
      </div>
      <button type="submit" className="base-button">
        Search
      </button>
    </form>
  )
}
