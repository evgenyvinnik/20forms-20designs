import { useState, useCallback } from 'react'
import {
  FormLayout,
  TextField,
  Select,
  Checkbox,
  Button,
  InlineStack,
} from '@shopify/polaris'

function AdvancedSearchForm() {
  const [keywords, setKeywords] = useState('')
  const [category, setCategory] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [exactMatch, setExactMatch] = useState(false)

  const categoryOptions = [
    { label: 'All categories', value: '' },
    { label: 'Products', value: 'products' },
    { label: 'Articles', value: 'articles' },
    { label: 'Documents', value: 'documents' },
    { label: 'Images', value: 'images' },
  ]

  const sortOptions = [
    { label: 'Relevance', value: '' },
    { label: 'Date (newest)', value: 'date-desc' },
    { label: 'Date (oldest)', value: 'date-asc' },
    { label: 'Name (A-Z)', value: 'name-asc' },
    { label: 'Name (Z-A)', value: 'name-desc' },
  ]

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    alert('Search executed!')
  }, [])

  const handleReset = useCallback(() => {
    setKeywords('')
    setCategory('')
    setDateFrom('')
    setDateTo('')
    setSortBy('')
    setExactMatch(false)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Keywords"
          type="text"
          value={keywords}
          onChange={setKeywords}
          autoComplete="off"
          requiredIndicator
        />
        <Select
          label="Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
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
        />
        <Checkbox
          label="Exact match only"
          checked={exactMatch}
          onChange={setExactMatch}
        />
        <InlineStack gap="300">
          <Button submit variant="primary">
            Search
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </InlineStack>
      </FormLayout>
    </form>
  )
}

export default AdvancedSearchForm
