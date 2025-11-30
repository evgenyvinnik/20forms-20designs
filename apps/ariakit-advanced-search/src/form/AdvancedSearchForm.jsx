import * as Ariakit from '@ariakit/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-field">
        <label htmlFor="ariakit-search-keywords" className="label">
          Keywords
        </label>
        <input
          id="ariakit-search-keywords"
          name="keywords"
          type="text"
          className="input"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-search-category" className="label">
          Category
        </label>
        <select
          id="ariakit-search-category"
          name="category"
          className="select"
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-search-dateFrom" className="label">
          Date from
        </label>
        <input
          id="ariakit-search-dateFrom"
          name="dateFrom"
          type="date"
          className="input"
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-search-dateTo" className="label">
          Date to
        </label>
        <input
          id="ariakit-search-dateTo"
          name="dateTo"
          type="date"
          className="input"
        />
      </div>
      <div className="form-field">
        <label htmlFor="ariakit-search-sortBy" className="label">
          Sort by
        </label>
        <select
          id="ariakit-search-sortBy"
          name="sortBy"
          className="select"
          defaultValue="relevance"
        >
          <option value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="price">Price</option>
        </select>
      </div>
      <Ariakit.Button type="submit" className="button button-primary">
        Search
      </Ariakit.Button>
    </form>
  )
}

export default AdvancedSearchForm
