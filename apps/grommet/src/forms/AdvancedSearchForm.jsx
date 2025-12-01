import {
  Box,
  Button,
  CheckBox,
  DateInput,
  Form,
  FormField,
  Select,
  TextInput,
} from 'grommet'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label="Search query"
        name="query"
        htmlFor="grommet-search-query"
        required
      >
        <TextInput
          id="grommet-search-query"
          name="query"
        />
      </FormField>

      <FormField
        label="Category"
        name="category"
        htmlFor="grommet-search-category"
        required
      >
        <Select
          id="grommet-search-category"
          name="category"
          options={['All', 'Articles', 'Products', 'People']}
          placeholder="Select category"
        />
      </FormField>

      <FormField
        label="Date from"
        name="dateFrom"
        htmlFor="grommet-search-date-from"
      >
        <DateInput
          id="grommet-search-date-from"
          name="dateFrom"
          format="mm/dd/yyyy"
        />
      </FormField>

      <FormField label="Date to" name="dateTo" htmlFor="grommet-search-date-to">
        <DateInput
          id="grommet-search-date-to"
          name="dateTo"
          format="mm/dd/yyyy"
        />
      </FormField>

      <FormField label="Sort by" name="sortBy" htmlFor="grommet-search-sort" required>
        <Select
          id="grommet-search-sort"
          name="sortBy"
          options={[
            'Relevance',
            'Newest',
            'Oldest',
          ]}
          placeholder="Select sort order"
        />
      </FormField>

      <FormField name="includeArchived" htmlFor="grommet-search-archived">
        <CheckBox
          id="grommet-search-archived"
          name="includeArchived"
          label="Include archived"
        />
      </FormField>

      <Box margin={{ top: 'medium' }}>
        <Button type="submit" primary label="Search" />
      </Box>
    </Form>
  )
}

export default AdvancedSearchForm
