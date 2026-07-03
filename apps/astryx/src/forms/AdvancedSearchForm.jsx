import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search executed!')
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
            { value: 'all', label: 'All categories' },
            { value: 'docs', label: 'Documentation' },
            { value: 'blog', label: 'Blog posts' },
          ]}
        />
        <Selector
          name="sortBy"
          label="Sort by"
          defaultValue="relevance"
          options={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'date', label: 'Date' },
          ]}
        />
      </div>
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
