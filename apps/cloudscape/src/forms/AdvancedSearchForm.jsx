import '@cloudscape-design/global-styles/index.css'
import { useState } from 'react'
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
  const [selectedCategory, setSelectedCategory] = useState({
    label: 'All',
    value: 'all',
  })
  const [selectedSort, setSelectedSort] = useState({
    label: 'Relevance',
    value: 'relevance',
  })
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

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
              selectedOption={selectedCategory}
              options={[
                { label: 'All', value: 'all' },
                { label: 'Articles', value: 'articles' },
                { label: 'Products', value: 'products' },
                { label: 'People', value: 'people' },
              ]}
              onChange={({ detail }) =>
                setSelectedCategory(detail.selectedOption)
              }
            />
          </FormField>
          <FormField label="Date from">
            <DatePicker
              name="dateFrom"
              placeholder="YYYY/MM/DD"
              value={dateFrom}
              onChange={({ detail }) => setDateFrom(detail.value)}
            />
          </FormField>
          <FormField label="Date to">
            <DatePicker
              name="dateTo"
              placeholder="YYYY/MM/DD"
              value={dateTo}
              onChange={({ detail }) => setDateTo(detail.value)}
            />
          </FormField>
          <FormField label="Sort by">
            <Select
              name="sort"
              selectedOption={selectedSort}
              options={[
                { label: 'Relevance', value: 'relevance' },
                { label: 'Newest', value: 'newest' },
                { label: 'Oldest', value: 'oldest' },
              ]}
              onChange={({ detail }) => setSelectedSort(detail.selectedOption)}
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
