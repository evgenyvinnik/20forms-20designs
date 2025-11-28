import '@cloudscape-design/global-styles/index.css'
import {
  Button,
  Checkbox,
  Container,
  DatePicker,
  FormField,
  Input,
  Select,
  SpaceBetween,
} from '@cloudscape-design/components'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <SpaceBetween direction="vertical" size="l">
          <FormField label="Search query">
            <Input
              name="query"
              type="text"
              placeholder="Enter search terms"
              required
            />
          </FormField>
          <FormField label="Category">
            <Select
              name="category"
              selectedOption={{ label: 'All', value: 'all' }}
              options={[
                { label: 'All', value: 'all' },
                { label: 'Articles', value: 'articles' },
                { label: 'Products', value: 'products' },
                { label: 'People', value: 'people' },
              ]}
              onChange={() => {}}
            />
          </FormField>
          <FormField label="Date from">
            <DatePicker
              name="dateFrom"
              placeholder="YYYY/MM/DD"
              value=""
              onChange={() => {}}
            />
          </FormField>
          <FormField label="Date to">
            <DatePicker
              name="dateTo"
              placeholder="YYYY/MM/DD"
              value=""
              onChange={() => {}}
            />
          </FormField>
          <FormField label="Sort by">
            <Select
              name="sort"
              selectedOption={{ label: 'Relevance', value: 'relevance' }}
              options={[
                { label: 'Relevance', value: 'relevance' },
                { label: 'Newest', value: 'newest' },
                { label: 'Oldest', value: 'oldest' },
              ]}
              onChange={() => {}}
            />
          </FormField>
          <Checkbox name="includeArchived">Include archived</Checkbox>
          <Button variant="primary" formAction="submit">
            Search
          </Button>
        </SpaceBetween>
      </form>
    </Container>
  )
}

export default AdvancedSearchForm
