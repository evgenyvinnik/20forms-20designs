import { Form, TextField, Picker, Item, Checkbox, Button, Flex } from '@adobe/react-spectrum'
import { DatePicker } from '@adobe/react-spectrum'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search executed!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column" gap="size-200">
        <TextField
          label="Search query"
          name="query"
          type="text"
          isRequired
        />
        <Picker label="Category" name="category" isRequired>
          <Item key="all">All</Item>
          <Item key="articles">Articles</Item>
          <Item key="products">Products</Item>
          <Item key="people">People</Item>
        </Picker>
        <DatePicker
          label="Date from"
          name="dateFrom"
        />
        <DatePicker
          label="Date to"
          name="dateTo"
        />
        <Picker label="Sort by" name="sort" isRequired>
          <Item key="relevance">Relevance</Item>
          <Item key="newest">Newest</Item>
          <Item key="oldest">Oldest</Item>
        </Picker>
        <Checkbox name="includeArchived">Include archived</Checkbox>
        <Button type="submit" variant="accent">
          Search
        </Button>
      </Flex>
    </Form>
  )
}

export default AdvancedSearchForm
