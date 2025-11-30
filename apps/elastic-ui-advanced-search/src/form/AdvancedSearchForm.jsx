import { useState, useCallback } from 'react'
import {
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiCheckbox,
  EuiButton,
} from '@elastic/eui'

const categoryOptions = [
  { value: 'all', text: 'All' },
  { value: 'articles', text: 'Articles' },
  { value: 'products', text: 'Products' },
  { value: 'people', text: 'People' },
]

const sortOptions = [
  { value: 'relevance', text: 'Relevance' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' },
]

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
    <EuiForm component="form" onSubmit={handleSubmit}>
      <EuiFormRow label="Search query">
        <EuiFieldText
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Category">
        <EuiSelect
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Date from">
        <EuiFieldText
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="Date to">
        <EuiFieldText
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </EuiFormRow>

      <EuiFormRow label="Sort by">
        <EuiSelect
          options={sortOptions}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          required
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiCheckbox
          id="includeArchived"
          label="Include archived"
          checked={includeArchived}
          onChange={(e) => setIncludeArchived(e.target.checked)}
        />
      </EuiFormRow>

      <EuiFormRow>
        <EuiButton type="submit" fill>
          Search
        </EuiButton>
      </EuiFormRow>
    </EuiForm>
  )
}

export default AdvancedSearchForm
