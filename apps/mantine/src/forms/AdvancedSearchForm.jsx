import { Button, Checkbox, Stack, TextInput, Select } from '@mantine/core'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          id="mantine-search-query"
          name="query"
          label="Search query"
          type="text"
          required
        />
        <Select
          id="mantine-search-category"
          name="category"
          label="Category"
          data={[
            { value: 'all', label: 'All' },
            { value: 'articles', label: 'Articles' },
            { value: 'products', label: 'Products' },
            { value: 'people', label: 'People' },
          ]}
          required
        />
        <TextInput
          id="mantine-search-date-from"
          name="dateFrom"
          label="Date from"
          type="date"
        />
        <TextInput
          id="mantine-search-date-to"
          name="dateTo"
          label="Date to"
          type="date"
        />
        <Select
          id="mantine-search-sort"
          name="sort"
          label="Sort by"
          data={[
            { value: 'relevance', label: 'Relevance' },
            { value: 'newest', label: 'Newest' },
            { value: 'oldest', label: 'Oldest' },
          ]}
          required
        />
        <Checkbox name="includeArchived" label="Include archived" />
        <Button type="submit">Search</Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
