import * as Ariakit from '@ariakit/react'

function AdvancedSearchForm() {
  const form = Ariakit.useFormStore({
    defaultValues: {
      keywords: '',
      category: 'all',
      dateFrom: '',
      dateTo: '',
      sortBy: 'relevance',
    },
  })

  form.useSubmit(() => {
    alert('Search submitted!')
  })

  return (
    <Ariakit.Form store={form} className="form-stack">
      <Ariakit.FormGroup className="form-field">
        <Ariakit.FormLabel name={form.names.keywords} className="label">
          Keywords
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.keywords}
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
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          }
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
              <option value="date">Date</option>
              <option value="price">Price</option>
            </select>
          }
        />
      </Ariakit.FormGroup>
      <Ariakit.FormSubmit className="button button-primary">
        Search
      </Ariakit.FormSubmit>
    </Ariakit.Form>
  )
}

export default AdvancedSearchForm
