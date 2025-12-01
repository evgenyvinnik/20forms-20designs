import {
  Box,
  FormControl,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@primer/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <FormControl required>
        <FormControl.Label>Search query</FormControl.Label>
        <TextInput id="primer-search-query" name="query" type="text" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Category</FormControl.Label>
        <Select id="primer-search-category" name="category" block>
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="articles">Articles</Select.Option>
          <Select.Option value="products">Products</Select.Option>
          <Select.Option value="people">People</Select.Option>
        </Select>
      </FormControl>

      <FormControl>
        <FormControl.Label>Date from</FormControl.Label>
        <TextInput
          id="primer-search-datefrom"
          name="dateFrom"
          type="date"
          block
        />
      </FormControl>

      <FormControl>
        <FormControl.Label>Date to</FormControl.Label>
        <TextInput id="primer-search-dateto" name="dateTo" type="date" block />
      </FormControl>

      <FormControl required>
        <FormControl.Label>Sort by</FormControl.Label>
        <Select id="primer-search-sort" name="sort" block>
          <Select.Option value="relevance">Relevance</Select.Option>
          <Select.Option value="newest">Newest</Select.Option>
          <Select.Option value="oldest">Oldest</Select.Option>
        </Select>
      </FormControl>

      <FormControl>
        <Checkbox id="primer-search-archived" name="includeArchived" />
        <FormControl.Label>Include archived</FormControl.Label>
      </FormControl>

      <Button type="submit" variant="primary" block>
        Search
      </Button>
    </Box>
  )
}

export default AdvancedSearchForm
