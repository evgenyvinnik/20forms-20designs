import {
  Button,
  Field,
  Input,
  Stack,
  Checkbox,
  NativeSelect,
} from '@chakra-ui/react'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Field.Root required>
          <Field.Label>Search query</Field.Label>
          <Input id="chakra-search-query" name="query" type="text" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Category</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-search-category" name="category">
              <option value="all">All</option>
              <option value="articles">Articles</option>
              <option value="products">Products</option>
              <option value="people">People</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Field.Root>
          <Field.Label>Date from</Field.Label>
          <Input id="chakra-search-date-from" name="dateFrom" type="date" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Date to</Field.Label>
          <Input id="chakra-search-date-to" name="dateTo" type="date" />
        </Field.Root>
        <Field.Root required>
          <Field.Label>Sort by</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field id="chakra-search-sort" name="sort">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
        <Checkbox.Root name="includeArchived">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Include archived</Checkbox.Label>
        </Checkbox.Root>
        <Button type="submit" colorPalette="blue">
          Search
        </Button>
      </Stack>
    </form>
  )
}

export default AdvancedSearchForm
