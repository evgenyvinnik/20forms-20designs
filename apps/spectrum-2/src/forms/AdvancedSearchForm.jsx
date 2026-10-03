import {
  Button,
  ButtonGroup,
  Checkbox,
  DatePicker,
  Form,
  Picker,
  PickerItem,
  TextField,
} from '@react-spectrum/s2'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Search query" name="query" isRequired />
      <Picker label="Category" name="category" defaultValue="all" isRequired>
        <PickerItem id="all">All</PickerItem>
        <PickerItem id="articles">Articles</PickerItem>
        <PickerItem id="products">Products</PickerItem>
        <PickerItem id="people">People</PickerItem>
      </Picker>
      <DatePicker label="Date from" name="dateFrom" />
      <DatePicker label="Date to" name="dateTo" />
      <Picker label="Sort by" name="sort" defaultValue="relevance" isRequired>
        <PickerItem id="relevance">Relevance</PickerItem>
        <PickerItem id="newest">Newest</PickerItem>
        <PickerItem id="oldest">Oldest</PickerItem>
      </Picker>
      <Checkbox name="includeArchived">Include archived</Checkbox>
      <ButtonGroup>
        <Button type="submit" variant="accent">
          Search
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default AdvancedSearchForm
