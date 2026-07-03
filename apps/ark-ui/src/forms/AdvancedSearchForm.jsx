import { useState } from 'react'
import { Field } from '@ark-ui/react'

export default function AdvancedSearchForm() {
  const handleSubmit = (e) => { e.preventDefault(); alert('Submitted!'); }

  return (
    <form onSubmit={handleSubmit} className="ark-form">
      <Field.Root required className="ark-field">
      <Field.Label className="ark-label">Search query</Field.Label>
      <Field.Input className="ark-input" name="query" type="text"     required />
      
    </Field.Root>
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Field.Root  className="ark-field">
        <Field.Label className="ark-label">Category</Field.Label>
        <select className="ark-select" name="category" defaultValue="all" >
          <option value="all">All categories</option>
          <option value="docs">Documentation</option>
          <option value="blog">Blog posts</option>
        </select>
      </Field.Root>
          <Field.Root  className="ark-field">
        <Field.Label className="ark-label">Sort by</Field.Label>
        <select className="ark-select" name="sortBy" defaultValue="relevance" >
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
        </select>
      </Field.Root>
        </div>
<button type="submit" className="ark-button">Search</button>
    </form>
  )
}