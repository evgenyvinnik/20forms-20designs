import * as Ariakit from '@ariakit/react'

function AdvancedSearchForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      query: '',
      category: 'all',
      dateFrom: '',
      dateTo: '',
      sortBy: 'relevance',
      includeArchived: false,
    },
  })

  form.useSubmit(() => {
    alert('Search submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.query} className="label">
          Search query
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.query}
          className="input"
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.category} className="label">
          Category
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.category}
          render={
            <select className="select">
              <option value="all">All</option>
              <option value="articles">Articles</option>
              <option value="products">Products</option>
              <option value="people">People</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.dateFrom} className="label">
          Date from
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.dateFrom}
          type="date"
          className="input"
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.dateTo} className="label">
          Date to
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.dateTo}
          type="date"
          className="input"
        />
      </Ariakit.FormGroup>
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.sortBy} className="label">
          Sort by
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.sortBy}
          render={
            <select className="select">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          }
          required
        />
      </Ariakit.FormGroup>
      <div className="checkbox-wrapper">
        <Ariakit.FormCheckbox
          name={form.names.includeArchived}
          className="checkbox"
        />
        <label className="label">Include archived</label>
      </div>
      <Ariakit.FormSubmit className="button button-primary">
        Search
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default AdvancedSearchForm
