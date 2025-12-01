import { Form, TextInput, Select, SelectItem, DatePicker, DatePickerInput, Button, Checkbox, Stack } from '@carbon/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <TextInput
          id="carbon-search-query"
          name="query"
          labelText="Search query"
          required
        />
        <Select
          id="carbon-search-category"
          name="category"
          labelText="Category"
          defaultValue="all"
          required
        >
          <SelectItem value="all" text="All" />
          <SelectItem value="articles" text="Articles" />
          <SelectItem value="products" text="Products" />
          <SelectItem value="people" text="People" />
        </Select>
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-search-date-from"
            name="dateFrom"
            labelText="Date from"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="carbon-search-date-to"
            name="dateTo"
            labelText="Date to"
            placeholder="mm/dd/yyyy"
          />
        </DatePicker>
        <Select
          id="carbon-search-sort"
          name="sort"
          labelText="Sort by"
          defaultValue="relevance"
          required
        >
          <SelectItem value="relevance" text="Relevance" />
          <SelectItem value="newest" text="Newest" />
          <SelectItem value="oldest" text="Oldest" />
        </Select>
        <Checkbox
          id="carbon-search-archived"
          name="includeArchived"
          labelText="Include archived"
        />
        <Button type="submit">Search</Button>
      </Stack>
    </Form>
  )
}

export default AdvancedSearchForm
