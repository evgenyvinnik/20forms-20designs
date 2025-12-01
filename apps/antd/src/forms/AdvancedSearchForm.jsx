import { Form, Input, Button, Select, Checkbox, DatePicker } from 'antd'

function AdvancedSearchForm() {
  const [form] = Form.useForm()

  const handleSubmit = () => {
    alert('Search submitted!')
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Search query"
        name="query"
        rules={[{ required: true, message: 'Please enter a search query' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: 'Please select a category' }]}
      >
        <Select>
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="articles">Articles</Select.Option>
          <Select.Option value="products">Products</Select.Option>
          <Select.Option value="people">People</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date from" name="dateFrom">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Date to" name="dateTo">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Sort by"
        name="sort"
        rules={[{ required: true, message: 'Please select sort order' }]}
      >
        <Select>
          <Select.Option value="relevance">Relevance</Select.Option>
          <Select.Option value="newest">Newest</Select.Option>
          <Select.Option value="oldest">Oldest</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="includeArchived" valuePropName="checked">
        <Checkbox>Include archived</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AdvancedSearchForm
