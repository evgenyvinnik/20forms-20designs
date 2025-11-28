import { Form, Button } from 'react-bootstrap'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="rb-advanced-search-query">
        <Form.Label>Search query</Form.Label>
        <Form.Control
          name="query"
          type="text"
          placeholder="Enter search terms"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-advanced-search-category">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-advanced-search-date-from">
        <Form.Label>Date from</Form.Label>
        <Form.Control name="dateFrom" type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-advanced-search-date-to">
        <Form.Label>Date to</Form.Label>
        <Form.Control name="dateTo" type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-advanced-search-sort">
        <Form.Label>Sort by</Form.Label>
        <Form.Select name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rb-advanced-search-include-archived">
        <Form.Check
          type="checkbox"
          name="includeArchived"
          label="Include archived"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default AdvancedSearchForm
