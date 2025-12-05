import { Button, Checkbox, Label, Select, TextInput } from 'flowbite-react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-search-query">Search query</Label>
        </div>
        <TextInput
          id="flowbite-search-query"
          name="query"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-search-category">Category</Label>
        </div>
        <Select id="flowbite-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-search-date-from">Date from</Label>
        </div>
        <TextInput id="flowbite-search-date-from" name="dateFrom" type="date" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-search-date-to">Date to</Label>
        </div>
        <TextInput id="flowbite-search-date-to" name="dateTo" type="date" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="flowbite-search-sort">Sort by</Label>
        </div>
        <Select id="flowbite-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="flowbite-search-archived" name="includeArchived" />
        <Label htmlFor="flowbite-search-archived">Include archived</Label>
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}

export default AdvancedSearchForm
