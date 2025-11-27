function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-control">
        <label htmlFor="search-query" className="label">
          <span className="label-text">Search query</span>
        </label>
        <input
          id="search-query"
          name="query"
          type="text"
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="search-category" className="label">
          <span className="label-text">Category</span>
        </label>
        <select
          id="search-category"
          name="category"
          required
          className="select select-bordered w-full"
        >
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="search-date-from" className="label">
          <span className="label-text">Date from</span>
        </label>
        <input
          id="search-date-from"
          name="dateFrom"
          type="date"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="search-date-to" className="label">
          <span className="label-text">Date to</span>
        </label>
        <input
          id="search-date-to"
          name="dateTo"
          type="date"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control">
        <label htmlFor="search-sort" className="label">
          <span className="label-text">Sort by</span>
        </label>
        <select
          id="search-sort"
          name="sort"
          required
          className="select select-bordered w-full"
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer justify-start gap-2">
          <input name="includeArchived" type="checkbox" className="checkbox" />
          <span className="label-text">Include archived</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-full">
        Search
      </button>
    </form>
  )
}

export default AdvancedSearchForm
