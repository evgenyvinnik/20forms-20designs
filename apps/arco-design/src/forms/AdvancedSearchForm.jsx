import {
  Button,
  Input,
  Checkbox,
  Select,
  DatePicker,
  Radio,
  InputNumber,
  TimePicker,
  Switch,
  Form,
  Space,
} from '@arco-design/web-react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="medium" style={{ width: '100%' }}>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-search-query"
          >
            Search query
          </label>
          <Input
            id="nocss-search-query"
            name="query"
            type="text"
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-search-category"
          >
            Category
          </label>
          <Select
            id="nocss-search-category"
            name="category"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="articles">Articles</Select.Option>
            <Select.Option value="products">Products</Select.Option>
            <Select.Option value="people">People</Select.Option>
          </Select>
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-search-date-from"
          >
            Date from
          </label>
          <DatePicker
            id="nocss-search-date-from"
            name="dateFrom"
            type="date"
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-search-date-to"
          >
            Date to
          </label>
          <DatePicker
            id="nocss-search-date-to"
            name="dateTo"
            type="date"
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            style={{ display: 'block', marginBottom: '4px' }}
            htmlFor="nocss-search-sort"
          >
            Sort by
          </label>
          <Select
            id="nocss-search-sort"
            name="sort"
            required
            style={{ width: '100%' }}
          >
            <Select.Option value="relevance">Relevance</Select.Option>
            <Select.Option value="newest">Newest</Select.Option>
            <Select.Option value="oldest">Oldest</Select.Option>
          </Select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            <Checkbox name="includeArchived">Include archived</Checkbox>
          </label>
        </div>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Space>
    </form>
  )
}

export default AdvancedSearchForm
