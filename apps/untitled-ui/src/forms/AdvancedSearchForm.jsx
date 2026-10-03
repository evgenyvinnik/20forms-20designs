import { Button } from '@/components/base/buttons/button'
import { Checkbox } from '@/components/base/checkbox/checkbox'
import { Form } from '@/components/base/form/form'
import { Input } from '@/components/base/input/input'
import { Select } from '@/components/base/select/select'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Input label="Search query" name="query" isRequired />
      <Select
        label="Category"
        name="category"
        defaultValue="all"
        isRequired
        items={[
          { id: 'all', label: 'All' },
          { id: 'articles', label: 'Articles' },
          { id: 'products', label: 'Products' },
          { id: 'people', label: 'People' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Input label="Date from" name="dateFrom" type="date" />
      <Input label="Date to" name="dateTo" type="date" />
      <Select
        label="Sort by"
        name="sort"
        defaultValue="relevance"
        isRequired
        items={[
          { id: 'relevance', label: 'Relevance' },
          { id: 'newest', label: 'Newest' },
          { id: 'oldest', label: 'Oldest' },
        ]}
      >
        {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
      </Select>
      <Checkbox label="Include archived" name="includeArchived" />
      <div className="flex gap-3">
        <Button type="submit" color="primary">
          Search
        </Button>
      </div>
    </Form>
  )
}

export default AdvancedSearchForm
