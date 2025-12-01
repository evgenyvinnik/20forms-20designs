import {
  Box,
  Button,
  CheckBox,
  DateInput,
  Form,
  FormField,
  Heading,
  Select,
  TextInput,
} from 'grommet'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    alert('Reset filters')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading level={3} margin={{ bottom: 'medium' }}>
        Advanced Search
      </Heading>

      <FormField
        label="Search query"
        name="query"
        htmlFor="grommet-search-query"
        required
      >
        <TextInput
          id="grommet-search-query"
          name="query"
          placeholder="Enter keywords..."
        />
      </FormField>

      <FormField
        label="Category"
        name="category"
        htmlFor="grommet-search-category"
      >
        <Select
          id="grommet-search-category"
          name="category"
          options={['All categories', 'Documents', 'Images', 'Videos', 'Audio']}
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

      <FormField label="Sort by" name="sortBy" htmlFor="grommet-search-sort">
        <Select
          id="grommet-search-sort"
          name="sortBy"
          options={[
            'Relevance',
            'Date: Newest',
            'Date: Oldest',
            'Name: A-Z',
            'Name: Z-A',
          ]}
          placeholder="Select sort order"
        />
      </FormField>

      <FormField name="exactMatch" htmlFor="grommet-search-exact">
        <CheckBox
          id="grommet-search-exact"
          name="exactMatch"
          label="Exact match only"
        />
      </FormField>

      <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
        <Button type="button" label="Reset" onClick={handleReset} />
        <Button type="submit" primary label="Search" />
      </Box>
    </Form>
  )
}

export default AdvancedSearchForm
