import { Form, Button, Select, Checkbox, DatePicker } from '@douyinfe/semi-ui'

function AdvancedSearchForm() {
  const handleSubmit = (values) => {
    console.log(values)
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} labelPosition="top">
      <Form.Input
        field="query"
        label="Search query"
        rules={[{ required: true, message: 'Please enter a search query' }]}
      />

      <Form.Select
        field="category"
        label="Category"
        rules={[{ required: true, message: 'Please select a category' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="articles">Articles</Select.Option>
        <Select.Option value="products">Products</Select.Option>
        <Select.Option value="people">People</Select.Option>
      </Form.Select>

      <Form.DatePicker
        field="dateFrom"
        label="Date from"
        style={{ width: '100%' }}
      />

      <Form.DatePicker
        field="dateTo"
        label="Date to"
        style={{ width: '100%' }}
      />

      <Form.Select
        field="sort"
        label="Sort by"
        rules={[{ required: true, message: 'Please select sort order' }]}
        style={{ width: '100%' }}
      >
        <Select.Option value="relevance">Relevance</Select.Option>
        <Select.Option value="newest">Newest</Select.Option>
        <Select.Option value="oldest">Oldest</Select.Option>
      </Form.Select>

      <Form.Checkbox field="includeArchived">Include archived</Form.Checkbox>

      <Button type="primary" htmlType="submit" style={{ marginTop: 16 }}>
        Search
      </Button>
    </Form>
  )
}

export default AdvancedSearchForm
