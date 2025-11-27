import { Button, Checkbox, Pane, SelectField, TextInputField } from 'evergreen-ui'

const formStackProps = { display: 'flex', flexDirection: 'column', gap: 16 }

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Pane is="form" onSubmit={handleSubmit} {...formStackProps}>
      <TextInputField id="evergreen-search-query" label="Search query" name="query" type="text" required />
      <SelectField id="evergreen-search-category" label="Category" name="category" defaultValue="all" required>
        <option value="all">All</option>
        <option value="articles">Articles</option>
        <option value="products">Products</option>
        <option value="people">People</option>
      </SelectField>
      <TextInputField id="evergreen-search-date-from" label="Date from" name="dateFrom" type="date" />
      <TextInputField id="evergreen-search-date-to" label="Date to" name="dateTo" type="date" />
      <SelectField id="evergreen-search-sort" label="Sort by" name="sort" defaultValue="relevance" required>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </SelectField>
      <Checkbox label="Include archived" name="includeArchived" />
      <Button appearance="primary" type="submit">
        Search
      </Button>
    </Pane>
  )
}

export default AdvancedSearchForm
