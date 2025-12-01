import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

function AdvancedSearchForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Search submitted!')
  }

  return (
    <Theme>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-search-query"
            >
              Search query
            </Text>
            <TextField.Root
              id="radix-search-query"
              name="query"
              type="text"
              placeholder="Enter search query"
              required
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-search-category"
            >
              Category
            </Text>
            <Select.Root name="category" required defaultValue="all">
              <Select.Trigger id="radix-search-category" />
              <Select.Content>
                <Select.Item value="all">All</Select.Item>
                <Select.Item value="articles">Articles</Select.Item>
                <Select.Item value="products">Products</Select.Item>
                <Select.Item value="people">People</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-search-date-from"
            >
              Date from
            </Text>
            <input
              id="radix-search-date-from"
              name="dateFrom"
              type="date"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
              }}
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-search-date-to"
            >
              Date to
            </Text>
            <input
              id="radix-search-date-to"
              name="dateTo"
              type="date"
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
              }}
            />
          </Box>
          <Box>
            <Text
              as="label"
              size="2"
              weight="medium"
              htmlFor="radix-search-sort"
            >
              Sort by
            </Text>
            <Select.Root name="sort" required defaultValue="relevance">
              <Select.Trigger id="radix-search-sort" />
              <Select.Content>
                <Select.Item value="relevance">Relevance</Select.Item>
                <Select.Item value="newest">Newest</Select.Item>
                <Select.Item value="oldest">Oldest</Select.Item>
              </Select.Content>
            </Select.Root>
          </Box>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox name="includeArchived" />
              Include archived
            </Flex>
          </Text>
          <Button type="submit">Search</Button>
        </Flex>
      </form>
    </Theme>
  )
}

export default AdvancedSearchForm
