import { useState } from 'react'
import { Field } from '@base-ui-components/react/field'

export default function AdvancedSearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Search submitted!')
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
            <option value="all">All</option>
            <option value="articles">Articles</option>
            <option value="products">Products</option>
            <option value="people">People</option>
          </select>
        </Field.Root>
        <Field.Root className="base-field">
          <Field.Label className="base-label">Sort by</Field.Label>
          <select className="base-select" name="sort" defaultValue="relevance">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </Field.Root>
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
      >
        <Field.Root className="base-field">
          <Field.Label className="base-label">Date from</Field.Label>
          <Field.Control className="base-input" name="dateFrom" type="date" />
        </Field.Root>
        <Field.Root className="base-field">
          <Field.Label className="base-label">Date to</Field.Label>
          <Field.Control className="base-input" name="dateTo" type="date" />
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
      <button type="submit" className="base-button">
        Search
      </button>
    </form>
  )
}
