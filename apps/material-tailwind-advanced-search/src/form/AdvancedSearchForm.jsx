import { useState } from 'react'
import { Input, Button, Checkbox, Typography } from '@material-tailwind/react'

function AdvancedSearchForm() {
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('relevance')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Search query
        </Typography>
        <Input
          id="material-tailwind-advanced-search-query"
          name="query"
          type="text"
          required
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Category
        </Typography>
        <select
          id="material-tailwind-advanced-search-category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Date from
        </Typography>
        <Input
          id="material-tailwind-advanced-search-dateFrom"
          name="dateFrom"
          type="date"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Date to
        </Typography>
        <Input
          id="material-tailwind-advanced-search-dateTo"
          name="dateTo"
          type="date"
          className="!border-gray-300 dark:!border-gray-700 dark:bg-gray-800 dark:text-white"
          labelProps={{ className: 'hidden' }}
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-1 font-medium text-gray-900 dark:text-white"
        >
          Sort by
        </Typography>
        <select
          id="material-tailwind-advanced-search-sort"
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="material-tailwind-advanced-search-includeArchived"
          name="includeArchived"
          className="dark:border-gray-600"
        />
        <Typography variant="small" className="text-gray-900 dark:text-white">
          Include archived
        </Typography>
      </div>
      <Button type="submit" className="mt-2">
        Search
      </Button>
    </form>
  )
}

export default AdvancedSearchForm
