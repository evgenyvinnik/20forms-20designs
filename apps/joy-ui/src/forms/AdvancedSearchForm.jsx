function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nocss-search-query">Search query</label>
        <input id="nocss-search-query" name="query" type="text" required />
      </div>
      <div>
        <label htmlFor="nocss-search-category">Category</label>
        <select id="nocss-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div>
        <label htmlFor="nocss-search-date-from">Date from</label>
        <input id="nocss-search-date-from" name="dateFrom" type="date" />
      </div>
      <div>
        <label htmlFor="nocss-search-date-to">Date to</label>
        <input id="nocss-search-date-to" name="dateTo" type="date" />
      </div>
      <div>
        <label htmlFor="nocss-search-sort">Sort by</label>
        <select id="nocss-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div>
        <label>
          <input name="includeArchived" type="checkbox" />
          Include archived
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  )
}

export default AdvancedSearchForm
