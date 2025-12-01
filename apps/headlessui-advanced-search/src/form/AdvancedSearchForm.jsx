import { Checkbox, Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const categories = [
  { value: 'all', label: 'All' },
  { value: 'articles', label: 'Articles' },
  { value: 'products', label: 'Products' },
  { value: 'people', label: 'People' },
]

const sortOptions = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
]

function AdvancedSearchForm() {
  const [category, setCategory] = useState(categories[0])
  const [sortBy, setSortBy] = useState(sortOptions[0])
  const [includeArchived, setIncludeArchived] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-search-query">
          Search query
        </Label>
        <input
          id="headlessui-search-query"
          name="query"
          type="text"
          className="input"
          required
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Category</Label>
        <Listbox value={category} onChange={setCategory} name="category">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{category.label}</span>
              <svg className="select-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {categories.map((cat) => (
                <ListboxOption key={cat.value} value={cat} className="select-option">
                  {cat.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-search-date-from">
          Date from
        </Label>
        <input
          id="headlessui-search-date-from"
          name="dateFrom"
          type="date"
          className="input"
        />
      </Field>

      <Field className="form-field">
        <Label className="label" htmlFor="headlessui-search-date-to">
          Date to
        </Label>
        <input
          id="headlessui-search-date-to"
          name="dateTo"
          type="date"
          className="input"
        />
      </Field>

      <Field className="form-field">
        <Label className="label">Sort by</Label>
        <Listbox value={sortBy} onChange={setSortBy} name="sort">
          <div className="select-wrapper">
            <ListboxButton className="select-button">
              <span>{sortBy.label}</span>
              <svg className="select-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </ListboxButton>
            <ListboxOptions className="select-options">
              {sortOptions.map((opt) => (
                <ListboxOption key={opt.value} value={opt} className="select-option">
                  {opt.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </Field>

      <Field className="checkbox-wrapper">
        <Checkbox
          checked={includeArchived}
          onChange={setIncludeArchived}
          name="includeArchived"
          className="checkbox"
        >
          {includeArchived && (
            <svg className="checkbox-check" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 8L6 11L11 3"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Checkbox>
        <Label className="checkbox-label">Include archived</Label>
      </Field>

      <button type="submit" className="button button-primary">
        Search
      </button>
    </form>
  )
}

export default AdvancedSearchForm
