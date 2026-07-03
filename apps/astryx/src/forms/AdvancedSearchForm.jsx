import { useState } from 'react'
import { TextInput, Selector, CheckboxInput, Button } from '@astryxdesign/core'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sort, setSort] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const categoryOptions = [
    { value: 'all', label: 'All' },
    { value: 'articles', label: 'Articles' },
    { value: 'products', label: 'Products' },
    { value: 'people', label: 'People' },
  ]

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ]

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <TextInput
        id="astryx-search-query"
        name="query"
        type="text"
        label="Search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />

      <Selector
        id="astryx-search-category"
        name="category"
        label="Category"
        value={category}
        onChange={(val) => setCategory(val)}
        options={categoryOptions}
      />

      <TextInput
        id="astryx-search-date-from"
        name="dateFrom"
        type="date"
        label="Date from"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />

      <TextInput
        id="astryx-search-date-to"
        name="dateTo"
        type="date"
        label="Date to"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />

      <Selector
        id="astryx-search-sort"
        name="sort"
        label="Sort by"
        value={sort}
        onChange={(val) => setSort(val)}
        options={sortOptions}
      />

      <CheckboxInput
        name="includeArchived"
        label="Include archived"
        checked={includeArchived}
        onChange={(e) => setIncludeArchived(e.target.checked)}
      />

      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
