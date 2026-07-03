import { useState } from 'react'
import { Button, Checkbox, Select, Stack, TextInput } from '@mantine/core'

function AdvancedSearchForm() {
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('any')
  const [sortBy, setSortBy] = useState('relevance')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-search-query"
          name="query"
          label="Search query"
          type="text"
          required
        />
        <Select
          id="mantine-search-category"
          name="category"
          label="Category"
          value={category}
          onChange={setCategory}
          data={[
            { value: 'all', label: 'All categories' },
            { value: 'products', label: 'Products' },
            { value: 'articles', label: 'Articles' },
            { value: 'docs', label: 'Documentation' },
          ]}
        />
        <Select
          id="mantine-search-date-range"
          name="dateRange"
          label="Date range"
          value={dateRange}
          onChange={setDateRange}
          data={[
            { value: 'any', label: 'Any time' },
            { value: '24h', label: 'Past 24 hours' },
            { value: '7d', label: 'Past week' },
            { value: '30d', label: 'Past month' },
            { value: '1y', label: 'Past year' },
          ]}
        />
        <Select
          id="mantine-search-sort"
          name="sortBy"
          label="Sort by"
          value={sortBy}
          onChange={setSortBy}
          data={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'newest', label: 'Newest first' },
            { value: 'oldest', label: 'Oldest' },
          ]}
        />
        <Checkbox name="includeArchived" label="Include archived" />
        <Button type="submit">Search</Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
