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

  return (
    <form onSubmit={handleSubmit} className="wa-stack wa-gap-m">
      <wa-input label="Search query" name="query" type="text" required />
      <wa-select label="Category" name="category" value="all" required>
        <wa-option value="all">All</wa-option>
        <wa-option value="articles">Articles</wa-option>
        <wa-option value="products">Products</wa-option>
        <wa-option value="people">People</wa-option>
      </wa-select>
      <wa-input label="Date from" name="dateFrom" type="date" />
      <wa-input label="Date to" name="dateTo" type="date" />
      <wa-select label="Sort by" name="sort" value="relevance" required>
        <wa-option value="relevance">Relevance</wa-option>
        <wa-option value="newest">Newest</wa-option>
        <wa-option value="oldest">Oldest</wa-option>
      </wa-select>
      <wa-checkbox name="includeArchived">Include archived</wa-checkbox>
      <wa-button type="submit" variant="brand">
        Search
      </wa-button>
    </form>
  )
}

export default AdvancedSearchForm
