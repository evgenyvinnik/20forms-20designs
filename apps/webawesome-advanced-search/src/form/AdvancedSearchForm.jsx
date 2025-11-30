import '@awesome.me/webawesome/dist/components/input/input.js'
import '@awesome.me/webawesome/dist/components/select/select.js'
import '@awesome.me/webawesome/dist/components/option/option.js'
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js'
import '@awesome.me/webawesome/dist/components/button/button.js'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  const handleReset = () => {
    alert('Filters cleared!')
  }

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input
        label="Keywords"
        name="keywords"
        type="text"
        placeholder="Enter search terms"
      />
      <wa-select
        label="Category"
        name="category"
        placeholder="All categories"
      >
        <wa-option value="electronics">Electronics</wa-option>
        <wa-option value="clothing">Clothing</wa-option>
        <wa-option value="home">Home & Garden</wa-option>
        <wa-option value="sports">Sports</wa-option>
        <wa-option value="books">Books</wa-option>
      </wa-select>
      <div className="wa-cluster wa-gap-m">
        <wa-input
          label="Min price"
          name="minPrice"
          type="number"
          min="0"
        />
        <wa-input
          label="Max price"
          name="maxPrice"
          type="number"
          min="0"
        />
      </div>
      <wa-select
        label="Sort by"
        name="sortBy"
        value="relevance"
      >
        <wa-option value="relevance">Relevance</wa-option>
        <wa-option value="price-asc">Price: Low to High</wa-option>
        <wa-option value="price-desc">Price: High to Low</wa-option>
        <wa-option value="newest">Newest First</wa-option>
        <wa-option value="rating">Best Rating</wa-option>
      </wa-select>
      <wa-input
        label="Date from"
        name="dateFrom"
        type="date"
      />
      <wa-input
        label="Date to"
        name="dateTo"
        type="date"
      />
      <wa-checkbox name="inStock">
        In stock only
      </wa-checkbox>
      <wa-checkbox name="onSale">
        On sale
      </wa-checkbox>
      <div className="wa-cluster wa-gap-s">
        <wa-button type="submit" variant="brand">
          Search
        </wa-button>
        <wa-button type="button" variant="neutral" onClick={handleReset}>
          Clear filters
        </wa-button>
      </div>
    </form>
  )
}

export default AdvancedSearchForm
