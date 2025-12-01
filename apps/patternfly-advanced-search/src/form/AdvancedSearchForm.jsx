import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Checkbox,
  ActionGroup,
  FormSelect,
  FormSelectOption,
} from '@patternfly/react-core'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup label="Search query" isRequired fieldId="pf-search-query">
        <TextInput isRequired type="text" id="pf-search-query" name="query" />
      </FormGroup>
      <FormGroup label="Category" isRequired fieldId="pf-search-category">
        <FormSelect id="pf-search-category" name="category" isRequired>
          <FormSelectOption value="all" label="All" />
          <FormSelectOption value="articles" label="Articles" />
          <FormSelectOption value="products" label="Products" />
          <FormSelectOption value="people" label="People" />
        </FormSelect>
      </FormGroup>
      <FormGroup label="Date from" fieldId="pf-search-date-from">
        <TextInput type="date" id="pf-search-date-from" name="dateFrom" />
      </FormGroup>
      <FormGroup label="Date to" fieldId="pf-search-date-to">
        <TextInput type="date" id="pf-search-date-to" name="dateTo" />
      </FormGroup>
      <FormGroup label="Sort by" isRequired fieldId="pf-search-sort">
        <FormSelect id="pf-search-sort" name="sort" isRequired>
          <FormSelectOption value="relevance" label="Relevance" />
          <FormSelectOption value="newest" label="Newest" />
          <FormSelectOption value="oldest" label="Oldest" />
        </FormSelect>
      </FormGroup>
      <FormGroup fieldId="pf-search-archived">
        <Checkbox
          label="Include archived"
          id="pf-search-archived"
          name="includeArchived"
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </ActionGroup>
    </Form>
  )
}

export default AdvancedSearchForm
