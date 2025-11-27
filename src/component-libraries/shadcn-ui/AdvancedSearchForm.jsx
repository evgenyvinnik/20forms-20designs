import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Checkbox } from './ui/checkbox'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="shadcn-search-query">Search query</Label>
        <Input id="shadcn-search-query" name="query" type="text" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-search-category">Category</Label>
        <Select id="shadcn-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-search-date-from">Date from</Label>
        <Input id="shadcn-search-date-from" name="dateFrom" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-search-date-to">Date to</Label>
        <Input id="shadcn-search-date-to" name="dateTo" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="shadcn-search-sort">Sort by</Label>
        <Select id="shadcn-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox name="includeArchived" />
        <Label htmlFor="includeArchived" className="font-normal">Include archived</Label>
      </div>
      <Button type="submit">Search</Button>
    </form>
  )
}

export default AdvancedSearchForm
