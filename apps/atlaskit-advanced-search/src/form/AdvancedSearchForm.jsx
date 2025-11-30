import { useState } from 'react'
import Button from '@atlaskit/button/new'
import Textfield from '@atlaskit/textfield'
import Select from '@atlaskit/select'
import { DatePicker } from '@atlaskit/datetime-picker'
import { Checkbox } from '@atlaskit/checkbox'
import { Label } from '@atlaskit/form'
import { Box, Stack } from '@atlaskit/primitives'

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

function AdvancedSearchForm() {
  const [category, setCategory] = useState({ label: 'All', value: 'all' })
  const [sort, setSort] = useState({ label: 'Relevance', value: 'relevance' })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack space="space.200">
        <Box>
          <Label htmlFor="atlaskit-search-query">Search query</Label>
          <Textfield
            id="atlaskit-search-query"
            name="query"
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-category">Category</Label>
          <Select
            inputId="atlaskit-search-category"
            name="category"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            isRequired
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-date-from">Date from</Label>
          <DatePicker
            id="atlaskit-search-date-from"
            name="dateFrom"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-date-to">Date to</Label>
          <DatePicker
            id="atlaskit-search-date-to"
            name="dateTo"
            placeholder="Select a date"
          />
        </Box>
        <Box>
          <Label htmlFor="atlaskit-search-sort">Sort by</Label>
          <Select
            inputId="atlaskit-search-sort"
            name="sort"
            options={sortOptions}
            value={sort}
            onChange={setSort}
            isRequired
          />
        </Box>
        <Box>
          <Checkbox
            name="includeArchived"
            label="Include archived"
          />
        </Box>
        <Button type="submit" appearance="primary">Search</Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
