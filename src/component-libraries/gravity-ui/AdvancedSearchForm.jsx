import { Button, Checkbox, TextInput } from '@gravity-ui/uikit'

import { SingleSelectField, formStackStyle } from './common.jsx'

const categoryOptions = [
  { value: 'all', content: 'All' },
  { value: 'articles', content: 'Articles' },
  { value: 'products', content: 'Products' },
  { value: 'people', content: 'People' },
]

const sortOptions = [
  { value: 'relevance', content: 'Relevance' },
  { value: 'newest', content: 'Newest' },
  { value: 'oldest', content: 'Oldest' },
]

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyle}>
      <TextInput
        id="gravity-search-query"
        label="Search query"
        name="query"
        controlProps={{ required: true }}
      />
      <SingleSelectField
        id="gravity-search-category"
        label="Category"
        name="category"
        options={categoryOptions}
        defaultValue="all"
      />
      <TextInput
        id="gravity-search-date-from"
        label="Date from"
        name="dateFrom"
        placeholder="YYYY-MM-DD"
        controlProps={{ pattern: '\\d{4}-\\d{2}-\\d{2}' }}
      />
      <TextInput
        id="gravity-search-date-to"
        label="Date to"
        name="dateTo"
        placeholder="YYYY-MM-DD"
        controlProps={{ pattern: '\\d{4}-\\d{2}-\\d{2}' }}
      />
      <SingleSelectField
        id="gravity-search-sort"
        label="Sort by"
        name="sort"
        options={sortOptions}
        defaultValue="relevance"
      />
      <Checkbox name="includeArchived" value="true" content="Include archived" />
      <Button view="action" type="submit">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
