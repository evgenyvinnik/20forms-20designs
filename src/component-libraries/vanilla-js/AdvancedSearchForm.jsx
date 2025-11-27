function AdvancedSearchForm() {
  return (
    <form>
      <div>
        <label htmlFor="search-query">Search query</label>
        <input id="search-query" name="query" type="text" />
      </div>
      <div>
        <label htmlFor="search-category">Category</label>
        <select id="search-category" name="category">
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div>
        <label htmlFor="search-date-from">Date from</label>
        <input id="search-date-from" name="dateFrom" type="date" />
      </div>
      <div>
        <label htmlFor="search-date-to">Date to</label>
        <input id="search-date-to" name="dateTo" type="date" />
      </div>
      <div>
        <label htmlFor="search-sort">Sort by</label>
        <select id="search-sort" name="sort">
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div>
        <label>
          <input name="includeArchived" type="checkbox" />Include archived
        </label>
      </div>
      <button type="submit">Search</button>
    </form>
  )
}

export default AdvancedSearchForm
