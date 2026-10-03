import { Button, Checkbox, Input, Select } from '@cloudflare/kumo'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="kumo-form">
      <Input label="Search query" name="query" type="text" required />
      <Select
        label="Category"
        name="category"
        defaultValue="all"
        items={[
          { value: 'all', label: 'All' },
          { value: 'articles', label: 'Articles' },
          { value: 'products', label: 'Products' },
          { value: 'people', label: 'People' },
        ]}
        required
        className="kumo-select"
      />
      <Input label="Date from" name="dateFrom" type="date" />
      <Input label="Date to" name="dateTo" type="date" />
      <Select
        label="Sort by"
        name="sort"
        defaultValue="relevance"
        items={[
          { value: 'relevance', label: 'Relevance' },
          { value: 'newest', label: 'Newest' },
          { value: 'oldest', label: 'Oldest' },
        ]}
        required
        className="kumo-select"
      />
      <Checkbox label="Include archived" name="includeArchived" />
      <div className="kumo-actions">
        <Button type="submit" variant="primary">
          Search
        </Button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
