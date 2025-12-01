import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CButton,
} from '@coreui/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <CForm onSubmit={handleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-search-query">Search query</CFormLabel>
        <CFormInput
          id="coreui-search-query"
          name="query"
          type="text"
          required
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-search-category">Category</CFormLabel>
        <CFormSelect id="coreui-search-category" name="category" required>
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
          <option value="people">People</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-search-date-from">Date from</CFormLabel>
        <CFormInput id="coreui-search-date-from" name="dateFrom" type="date" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-search-date-to">Date to</CFormLabel>
        <CFormInput id="coreui-search-date-to" name="dateTo" type="date" />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="coreui-search-sort">Sort by</CFormLabel>
        <CFormSelect id="coreui-search-sort" name="sort" required>
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </CFormSelect>
      </div>
      <div className="mb-3">
        <CFormCheck
          id="coreui-search-archived"
          name="includeArchived"
          label="Include archived"
        />
      </div>
      <div className="d-grid">
        <CButton type="submit" color="primary">
          Search
        </CButton>
      </div>
    </CForm>
  )
}

export default AdvancedSearchForm
