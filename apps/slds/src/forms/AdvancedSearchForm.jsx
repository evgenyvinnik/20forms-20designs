import { useState } from 'react'
import Input from '@salesforce/design-system-react/components/input'
import Combobox from '@salesforce/design-system-react/components/combobox'
import Checkbox from '@salesforce/design-system-react/components/checkbox'
import Button from '@salesforce/design-system-react/components/button'

const categoryOptions = [
  { id: 'all', label: 'All' },
  { id: 'articles', label: 'Articles' },
  { id: 'products', label: 'Products' },
  { id: 'people', label: 'People' },
]

const sortOptions = [
  { id: 'relevance', label: 'Relevance' },
  { id: 'newest', label: 'Newest' },
  { id: 'oldest', label: 'Oldest' },
]

function AdvancedSearchForm() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState([])
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [sort, setSort] = useState([])
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-search-query"
          label="Search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-search-category"
          labels={{ label: 'Category' }}
          options={categoryOptions}
          selection={category}
          onSelect={(event, data) => setCategory(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-search-datefrom"
          type="date"
          label="Date from"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Input
          id="slds-search-dateto"
          type="date"
          label="Date to"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>

      <div className="slds-form-element slds-m-bottom_small">
        <Combobox
          id="slds-search-sort"
          labels={{ label: 'Sort by' }}
          options={sortOptions}
          selection={sort}
          onSelect={(event, data) => setSort(data.selection)}
          variant="readonly"
          required
        />
      </div>

      <div className="slds-form-element slds-m-bottom_medium">
        <Checkbox
          id="slds-search-archived"
          labels={{ label: 'Include archived' }}
          checked={includeArchived}
          onChange={() => setIncludeArchived(!includeArchived)}
        />
      </div>

      <div className="slds-form-element">
        <Button type="submit" variant="brand" label="Search" />
      </div>
    </form>
  )
}

export default AdvancedSearchForm
