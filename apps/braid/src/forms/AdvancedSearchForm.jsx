import { useState, useCallback } from 'react'
import {
  Box,
  Stack,
  TextField,
  Dropdown,
  Checkbox,
  Button,
} from 'braid-design-system'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sort, setSort] = useState('relevance')
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search submitted!')
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="medium">
        <TextField
          id="braid-search-query"
          label="Search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />

        <Dropdown
          id="braid-search-category"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Dropdown>

        <TextField
          id="braid-search-date-from"
          label="Date from"
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />

        <TextField
          id="braid-search-date-to"
          label="Date to"
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />

        <Dropdown
          id="braid-search-sort"
          label="Sort by"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Dropdown>

        <Checkbox
          id="braid-search-archived"
          checked={includeArchived}
          onChange={(e) => setIncludeArchived(e.target.checked)}
        >
          Include archived
        </Checkbox>

        <Box>
          <Button type="submit">Search</Button>
        </Box>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
