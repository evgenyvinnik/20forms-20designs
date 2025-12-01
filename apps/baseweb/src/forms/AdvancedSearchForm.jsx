import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { DatePicker } from 'baseui/datepicker'
import { useState } from 'react'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState([])
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [sortOrder, setSortOrder] = useState([])

  const categoryOptions = [
    { label: 'All Categories', id: 'all' },
    { label: 'Electronics', id: 'electronics' },
    { label: 'Clothing', id: 'clothing' },
    { label: 'Books', id: 'books' },
    { label: 'Home & Garden', id: 'home-garden' },
  ]

  const sortOptions = [
    { label: 'Relevance', id: 'relevance' },
    { label: 'Date: Newest', id: 'date-newest' },
    { label: 'Date: Oldest', id: 'date-oldest' },
    { label: 'Price: Low to High', id: 'price-asc' },
    { label: 'Price: High to Low', id: 'price-desc' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    setQuery('')
    setCategory([])
    setDateFrom(null)
    setDateTo(null)
    setSortOrder([])
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Search query">
          <Input
            id="baseweb-search-query"
            name="query"
            type="text"
            placeholder="Enter keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </FormControl>

        <FormControl label="Category">
          <Select
            id="baseweb-search-category"
            options={categoryOptions}
            value={category}
            placeholder="Select category"
            onChange={(params) => setCategory(params.value)}
          />
        </FormControl>

        <Block display="flex" gridGap="scale400">
          <Block flex="1">
            <FormControl label="Date from">
              <DatePicker
                value={dateFrom}
                onChange={({ date }) => setDateFrom(date)}
                formatString="yyyy-MM-dd"
              />
            </FormControl>
          </Block>
          <Block flex="1">
            <FormControl label="Date to">
              <DatePicker
                value={dateTo}
                onChange={({ date }) => setDateTo(date)}
                formatString="yyyy-MM-dd"
              />
            </FormControl>
          </Block>
        </Block>

        <FormControl label="Sort by">
          <Select
            id="baseweb-search-sort"
            options={sortOptions}
            value={sortOrder}
            placeholder="Select sort order"
            onChange={(params) => setSortOrder(params.value)}
          />
        </FormControl>

        <Block display="flex" gridGap="scale400">
          <Button type="submit">Search</Button>
          <Button type="button" kind="secondary" onClick={handleReset}>
            Reset
          </Button>
        </Block>
      </Block>
    </form>
  )
}

export default AdvancedSearchForm
