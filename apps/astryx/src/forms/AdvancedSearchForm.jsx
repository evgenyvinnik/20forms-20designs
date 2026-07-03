import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput name="query" type="text" label="Search query" required />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <Selector
          name="category"
          label="Category"
          defaultValue="all"
          options={[
            { value: 'all', label: 'All' },
            { value: 'articles', label: 'Articles' },
            { value: 'products', label: 'Products' },
            { value: 'people', label: 'People' },
          ]}
        />
        <Selector
          name="sort"
          label="Sort by"
          defaultValue="relevance"
          options={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'newest', label: 'Newest' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
      >
        <TextInput name="dateFrom" type="date" label="Date from" />
        <TextInput name="dateTo" type="date" label="Date to" />
      </div>
      <CheckboxInput name="includeArchived" label="Include archived" />
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
