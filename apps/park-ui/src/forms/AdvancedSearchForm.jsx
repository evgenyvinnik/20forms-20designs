import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AdvancedSearchForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="park-form">
      <Field.Root required className="park-field">
      <Field.Label className="park-label">Search query</Field.Label>
      <Field.Input className="park-input" name="query" type="text"     required />
      
    </Field.Root>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Field.Root  className="park-field">
        <Field.Label className="park-label">Category</Field.Label>
        <select className="park-select" name="category" defaultValue="all" >
          <option value="all">All categories</option>
          <option value="docs">Documentation</option>
          <option value="blog">Blog posts</option>
        </select>
      </Field.Root>
          <Field.Root  className="park-field">
        <Field.Label className="park-label">Sort by</Field.Label>
        <select className="park-select" name="sortBy" defaultValue="relevance" >
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
        </select>
      </Field.Root>
        </div>
<button type="submit" className="park-button">Search</button>
    </form>
  )
}