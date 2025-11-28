import {
  Button,
  Checkbox,
  FormGroup,
  HTMLSelect,
  InputGroup,
} from '@blueprintjs/core'
import { formStackStyles } from './formStyles.js'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} style={formStackStyles}>
      <FormGroup label="Search query" labelFor="blueprint-search-query">
        <InputGroup
          id="blueprint-search-query"
          name="query"
          type="text"
          required
          fill
        />
      </FormGroup>
      <FormGroup label="Category" labelFor="blueprint-search-category">
        <HTMLSelect
          id="blueprint-search-category"
          name="category"
          required
          fill
          options={[
            { label: 'All', value: 'all' },
            { label: 'Articles', value: 'articles' },
            { label: 'Products', value: 'products' },
            { label: 'People', value: 'people' },
          ]}
        />
      </FormGroup>
      <FormGroup label="Date from" labelFor="blueprint-search-date-from">
        <InputGroup
          id="blueprint-search-date-from"
          name="dateFrom"
          type="date"
          fill
        />
      </FormGroup>
      <FormGroup label="Date to" labelFor="blueprint-search-date-to">
        <InputGroup
          id="blueprint-search-date-to"
          name="dateTo"
          type="date"
          fill
        />
      </FormGroup>
      <FormGroup label="Sort by" labelFor="blueprint-search-sort">
        <HTMLSelect
          id="blueprint-search-sort"
          name="sort"
          required
          fill
          options={[
            { label: 'Relevance', value: 'relevance' },
            { label: 'Newest', value: 'newest' },
            { label: 'Oldest', value: 'oldest' },
          ]}
        />
      </FormGroup>
      <Checkbox label="Include archived" name="includeArchived" />
      <Button intent="primary" type="submit">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
