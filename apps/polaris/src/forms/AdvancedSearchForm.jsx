import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
} from '@shopify/polaris'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const categoryOptions = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'articles' },
    { label: 'Products', value: 'products' },
    { label: 'People', value: 'people' },
  ]

  const sortOptions = [
    { label: 'Relevance', value: 'relevance' },
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Search query"
          type="text"
          value={query}
          onChange={setQuery}
          autoComplete="off"
          requiredIndicator
        />
        <Select
          label="Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
          requiredIndicator
        />
        <FormLayout.Group>
          <TextField
            label="Date from"
            type="date"
            value={dateFrom}
            onChange={setDateFrom}
            autoComplete="off"
          />
          <TextField
            label="Date to"
            type="date"
            value={dateTo}
            onChange={setDateTo}
            autoComplete="off"
          />
        </FormLayout.Group>
        <Select
          label="Sort by"
          options={sortOptions}
          value={sortBy}
          onChange={setSortBy}
          requiredIndicator
        />
        <Checkbox
          label="Include archived"
          checked={includeArchived}
          onChange={setIncludeArchived}
        />
        <Button submit variant="primary">
          Search
        </Button>
      </FormLayout>
    </form>
  )
}

export default AdvancedSearchForm
