import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { Select } from 'baseui/select'
import { Button } from 'baseui/button'
import { Block } from 'baseui/block'
import { DatePicker } from 'baseui/datepicker'
import { Checkbox } from 'baseui/checkbox'
import { useState } from 'react'

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState([])
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [sortOrder, setSortOrder] = useState([])
  const [includeArchived, setIncludeArchived] = useState(false)

  const categoryOptions = [
    { label: 'All', id: 'all' },
    { label: 'Articles', id: 'articles' },
    { label: 'Products', id: 'products' },
    { label: 'People', id: 'people' },
  ]

  const sortOptions = [
    { label: 'Relevance', id: 'relevance' },
    { label: 'Newest', id: 'newest' },
    { label: 'Oldest', id: 'oldest' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Block display="flex" flexDirection="column" gridGap="scale600">
        <FormControl label="Search query">
          <Input
            id="baseweb-search-query"
            name="query"
            type="text"
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
            required
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
            required
          />
        </FormControl>

        <Checkbox
          checked={includeArchived}
          onChange={(e) => setIncludeArchived(e.target.checked)}
        >
          Include archived
        </Checkbox>

        <Button type="submit">Search</Button>
      </Block>
    </form>
  )
}

export default AdvancedSearchForm
