import { Form, Button, Checkbox, Select } from 'semantic-ui-react'

const categoryOptions = [
  { key: 'all', value: 'all', text: 'All' },
  { key: 'articles', value: 'articles', text: 'Articles' },
  { key: 'products', value: 'products', text: 'Products' },
  { key: 'people', value: 'people', text: 'People' },
]

const sortOptions = [
  { key: 'relevance', value: 'relevance', text: 'Relevance' },
  { key: 'newest', value: 'newest', text: 'Newest' },
  { key: 'oldest', value: 'oldest', text: 'Oldest' },
]

function AdvancedSearchForm({ inverted }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} inverted={inverted}>
      <Form.Input
        id="semantic-ui-advanced-search-query"
        name="query"
        label="Search query"
        type="text"
        required
      />
      <Form.Field required>
        <label>Category</label>
        <Select
          name="category"
          options={categoryOptions}
          defaultValue="all"
          required
        />
      </Form.Field>
      <Form.Input
        id="semantic-ui-advanced-search-date-from"
        name="dateFrom"
        label="Date from"
        type="date"
      />
      <Form.Input
        id="semantic-ui-advanced-search-date-to"
        name="dateTo"
        label="Date to"
        type="date"
      />
      <Form.Field required>
        <label>Sort by</label>
        <Select
          name="sort"
          options={sortOptions}
          defaultValue="relevance"
          required
        />
      </Form.Field>
      <Form.Field>
        <Checkbox name="includeArchived" label="Include archived" />
      </Form.Field>
      <Button type="submit" primary>
        Search
      </Button>
    </Form>
  )
}

export default AdvancedSearchForm
