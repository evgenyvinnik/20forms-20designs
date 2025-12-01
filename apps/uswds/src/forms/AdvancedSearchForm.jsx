import {
  Form,
  FormGroup,
  Label,
  TextInput,
  Select,
  Checkbox,
  Button,
} from '@trussworks/react-uswds'

function AdvancedSearchForm({ theme }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const darkStyles = {
    label: { color: '#f0f0f0' },
    input: {
      backgroundColor: '#2d2d2d',
      color: '#f0f0f0',
      borderColor: '#565c65',
    },
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label
          htmlFor="uswds-search-query"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Search query
        </Label>
        <TextInput
          id="uswds-search-query"
          name="query"
          type="text"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-category"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Category
        </Label>
        <Select
          id="uswds-search-category"
          name="category"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-date-from"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Date from
        </Label>
        <TextInput
          id="uswds-search-date-from"
          name="dateFrom"
          type="date"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-date-to"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Date to
        </Label>
        <TextInput
          id="uswds-search-date-to"
          name="dateTo"
          type="date"
          style={theme === 'dark' ? darkStyles.input : undefined}
        />
      </FormGroup>
      <FormGroup>
        <Label
          htmlFor="uswds-search-sort"
          style={theme === 'dark' ? darkStyles.label : undefined}
        >
          Sort by
        </Label>
        <Select
          id="uswds-search-sort"
          name="sort"
          required
          style={theme === 'dark' ? darkStyles.input : undefined}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Checkbox
          id="uswds-search-archived"
          name="includeArchived"
          label="Include archived"
        />
      </FormGroup>
      <Button type="submit">Search</Button>
    </Form>
  )
}

export default AdvancedSearchForm
